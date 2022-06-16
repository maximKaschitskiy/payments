import * as React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountForm from "../AcoountForm/AcoountForm";
import PaymentForm from "../PaymentForm/PaymentForm";
import Review from "../Review/Review";
import stepperStyle from "../../styles/stepper";
import bgStyle from "../../styles/background";
import paperStyle from "../../styles/paper";

export default function Checkout() {
  const steps = ["Payment account", "Payment details", "Review your order"];
  const [loginFormData, setLoginFormData] = React.useState({});
  const [paymentFormData, setPaymentFormData] = React.useState({});
  const [fromApi, setFromApi] = React.useState({});
  const { data: session } = useSession();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isAccountEdit, setIsAccountEdit] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  function getStepContent(step) {
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
            isAccountEdit={isAccountEdit}
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
            isLoading={isLoading}
          />
        );
      case 2:
        return <Review activeStep={activeStep} fromApi={fromApi} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const fetchData = (values) => {
    setIsLoading(true);
    values.cardNumber = values.cardNumber.replace(/ /g, "");
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
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        setFromApi(data);
        handleNext();
      })
      .catch((err) => {
        console.log(err);
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

  React.useEffect(() => {
    if (
      session &&
      (loginFormData.email !== session.user.email ||
        loginFormData.name !== session.user.name)
    ) {
      setIsAccountEdit(true);
    }
  }, [loginFormData]);

  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
        sx={
          ({
            mb: 4,
            overflow: "hidden",
          },
          bgStyle)
        }
      >
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter:
              "blur(10px) saturate(100%) contrast(45%) brightness(130%)",
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            Make payment
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label} sx={stepperStyle.step}>
                <StepLabel sx={stepperStyle.stepLabel}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
    </>
  );
}
