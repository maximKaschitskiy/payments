import * as React from "react";
import * as Yup from "yup";

import { accountSchema } from "../../utility/formValidateSchema";

import buttonStyle from "../../styles/button";
import FormComponent from "../Form/Form";
import StepButtons from "../SterButtons/StepButtons";

import { useSession, signIn, signOut } from "next-auth/react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import Toolbar from "@mui/material/Toolbar";

const AccountForm = ({
  onSubmit,
  isButtonDisable,
  handleBack,
  handleNext,
  steps,
  activeStep,
  getValues,
  isAccountEdit,
  formData,
}) => {
  const { data: session } = useSession();

  const thisform = React.useRef();

  const [inputField, setInputField] = React.useState({});
  const [fieldsValidiy, setFieldsValidity] = React.useState({});
  const [showErros, setShowErrors] = React.useState(false);
  const [isInputEdit, setIsInputEdit] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    if (session && !isAccountEdit) {
      setInputField({
        name: session.user.name,
        email: session.user.email,
      });
    } else {
      setInputField({
        name: formData.name,
        email: formData.email,
      });
    }
  }, [session, thisform]);

  const handleChange = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    const allErrs = {};
    accountSchema
      .validate(inputField, { abortEarly: false })
      .then(() => {
        setShowErrors(false);
        getValues(inputField);
        handleNext(inputField);
      })
      .catch((err) => {
        err.inner.map((event) => {
          allErrs[event.path] = {
            validity: false,
            message: event.message,
          };
        });
        setFieldsValidity(allErrs);
        setShowErrors(true);
      });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment account
      </Typography>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={
            showErros && !session
              ? {
                  borderBottom: "2px solid #d32f2f",
                }
              : { borderBottom: "none" }
          }
        >
          {session
            ? "Sign out if you want to change your account"
            : "Sign in to continue"}
        </Typography>
        <Button
          sx={buttonStyle}
          variant="contained"
          onClick={session ? () => signOut() : () => signIn()}
          startIcon={<GoogleIcon />}
        >
          {session ? "Sign out" : "Sign In"}
        </Button>
      </Grid>
      <FormComponent
        buttonText="Отправить"
        formClassName="form_state_post-card"
        bottomLink={"/"}
        refLink={thisform}
        onSubmit={onSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={inputField.name || ""}
              onChange={(event) => {
                handleChange(event);
              }}
              inputProps={{
                minLength: 3,
                maxLength: 30,
              }}
              error={
                fieldsValidiy.name
                  ? !fieldsValidiy.name.validity && showErros
                  : false
              }
              helperText={
                showErros && fieldsValidiy.name
                  ? fieldsValidiy.name.message
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={inputField.email || ""}
              onChange={(event) => {
                handleChange(event);
              }}
              inputProps={{
                type: "email",
                minLength: 5,
                maxLength: 20,
              }}
              error={
                fieldsValidiy.email
                  ? !fieldsValidiy.email.validity && showErros
                  : false
              }
              helperText={
                showErros && fieldsValidiy.email
                  ? fieldsValidiy.email.message
                  : ""
              }
            />
          </Grid>
        </Grid>
        <StepButtons
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          onSubmit={() => handleSubmit()}
        />
      </FormComponent>
    </React.Fragment>
  );
};

export default AccountForm;
