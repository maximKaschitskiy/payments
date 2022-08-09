import * as React from "react";
import * as Yup from "yup";

import { paymentSchema } from "../../utility/formValidateSchema";

import FormComponent from "../Form/Form";
import StepButtons from "../SterButtons/StepButtons";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { useFormControl } from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";

const PaymentForm = ({
  onSubmit,
  isButtonDisable,
  handleBack,
  handleNext,
  steps,
  activeStep,
  getValues,
  isLoading,
}) => {
  const thisform = React.useRef();

  const [inputField, setInputField] = React.useState({});
  const [fieldsValidiy, setFieldsValidity] = React.useState({});
  const [showErros, setShowErrors] = React.useState(false);
  const [isInputEdit, setIsInputEdit] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isFormEdit, setIsFormEdit] = React.useState(false);

  const handleChange = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    const allErrs = {};
    paymentSchema
      .validate(inputField, { abortEarly: false })
      .then(() => {
        setShowErrors(false);
        getValues(inputField);
        handleNext(inputField);
      })
      .catch((err) => {
        console.log(err);
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
        Payment method
      </Typography>
      <FormComponent
        formClassName="form_state_post-card"
        refLink={thisform}
        onSubmit={onSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="amount"
              label="Amount"
              fullWidth
              autoComplete="cc-amount"
              variant="standard"
              name="amount"
              value={inputField.amount || ""}
              onChange={(event) => {
                const reg = /^$|^[0-9]+$/;
                if (reg.test(event.target.value)) {
                  handleChange(event);
                }
              }}
              inputProps={{
                minLength: 2,
                maxLength: 6,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              error={
                fieldsValidiy.amount
                  ? !fieldsValidiy.amount.validity && showErros
                  : false
              }
              helperText={
                showErros && fieldsValidiy.amount
                  ? fieldsValidiy.amount.message
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              name="cardNumber"
              value={
                inputField.cardNumber
                  ? inputField.cardNumber
                      .replace(/[^\dA-Z]/g, "")
                      .replace(/(.{4})/g, "$1 ")
                      .trim()
                  : "" || ""
              }
              onChange={(event) => {
                const reg = /^$|^[0-9." "]+$/;
                if (reg.test(event.target.value)) {
                  handleChange(event);
                }
              }}
              inputProps={{
                minLength: 19,
                maxLength: 19,
              }}
              error={
                fieldsValidiy.cardNumber
                  ? !fieldsValidiy.cardNumber.validity && showErros
                  : false
              }
              helperText={
                showErros && fieldsValidiy.cardNumber
                  ? fieldsValidiy.cardNumber.message
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              name="expDate"
              value={inputField.expDate || ""}
              onChange={(event) => {
                const reg = /^$|^[0-9./\/]+$/;
                if (reg.test(event.target.value)) {
                  event.target.value = event.target.value
                    .replace(/^(\d\d)(\d)$/g, "$1/$2")
                    .replace(/^(\d\d\/\d\d\d\d)(\d+)$/g, "$1/$2")
                    .replace(/[^\d\/]/g, "");
                  handleChange(event);
                }
              }}
              inputProps={{
                minLength: 7,
                maxLength: 7,
              }}
              error={
                fieldsValidiy.expDate
                  ? !fieldsValidiy.expDate.validity && showErros
                  : false
              }
              helperText={
                showErros && fieldsValidiy.expDate
                  ? fieldsValidiy.expDate.message
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              name="cvv"
              value={inputField.cvv || ""}
              onChange={(event) => {
                const reg = /^$|^[0-9]+$/;
                if (reg.test(event.target.value)) {
                  handleChange(event);
                }
              }}
              inputProps={{
                type: "password",
                minLength: 3,
                maxLength: 3,
              }}
              error={
                fieldsValidiy.cvv
                  ? !fieldsValidiy.cvv.validity && showErros
                  : false
              }
              helperText={
                showErros && fieldsValidiy.cvv ? fieldsValidiy.cvv.message : ""
              }
            />
          </Grid>
        </Grid>
        <StepButtons
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          onSubmit={() => {
            handleSubmit();
          }}
          loading={isLoading}
        />
      </FormComponent>
    </React.Fragment>
  );
};

export default PaymentForm;
