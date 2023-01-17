import * as React from "react";
import Head from 'next/head'
import { useSession, signIn, signOut, getSession } from "next-auth/react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { MainWrapper, MainFormWrapper, StyledStep, StyledStepLabel } from "./MakePaymentStyles.js";

import AccountForm from "../AcoountForm/AcoountForm";
import PaymentForm from "../PaymentForm/PaymentForm";
import Review from "../Review/Review";
import CustomSnackbar from "../SnackBar/SnackBar.js";

export default function Checkout() {
  const steps = ["Payment account", "Payment details", "Review your order"];
  const [loginFormData, setLoginFormData] = React.useState({});
  const [paymentFormData, setPaymentFormData] = React.useState({});
  const [fromApi, setFromApi] = React.useState({});
  const { data: session } = useSession();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [snackBarOpen, setSnackBarOpen] = React.useState(false);
  const [snackBarStatus, setSnackBarStatus] = React.useState();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <AccountForm
            activeStep={activeStep}
            steps={steps}
            handleBack={() => {
              handleBack();
            }}
            handleNext={() => {
              handleNext();
            }}
            getValues={(values) => {
              setLoginFormData(values);
            }}
            formData={loginFormData}
          />
        );
      case 1:
        return (
          <PaymentForm
            activeStep={activeStep}
            steps={steps}
            handleBack={() => {
              handleBack();
            }}
            handleNext={(values) => {
              fetchData(values);
            }}
            getValues={(values) => {
              setPaymentFormData(values);
            }}
            formData={paymentFormData}
            isLoading={isLoading}
          />
        );
      case 2:
        return <Review activeStep={activeStep} fromApi={fromApi} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setSnackBarOpen(false);
  };

  const fetchData = (values) => {
    setIsLoading(true);
    return fetch("api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({ ...values, ...loginFormData }),
    })
      .then((res) => {
        if (res.ok) {
          console.log({res});
          const {ok, status, statusText} = res;
          setSnackBarStatus({ok, status, statusText});
          setSnackBarOpen(true);
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        setFromApi(data);
        handleNext();
      })
      .catch((err) => {
        console.log({err})
        const {ok, status, statusText} = err;
        setSnackBarStatus({ok, status, statusText});
        setSnackBarOpen(true);
        return Promise.reject(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Head>
        <title>Make Payment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainWrapper
        component="main"
        maxWidth="sm"
      >
        <MainFormWrapper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            Make payment
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <StyledStep key={label}>
                <StyledStepLabel>{label}</StyledStepLabel>
              </StyledStep>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
          </React.Fragment>
          <CustomSnackbar 
            handleClose={(event, reason) => handleSnackBarClose(event, reason)}
            isOpen={snackBarOpen}
            status={snackBarStatus}
          />
        </MainFormWrapper>
      </MainWrapper>
    </>
  );
}
