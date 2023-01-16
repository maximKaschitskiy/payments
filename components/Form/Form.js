import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";

function FormComponent({
  name,
  buttonText,
  url,
  text,
  children,
  onLoad,
  onSubmit,
  formClassName,
  fieldsetClassName,
  bottomLink,
  linkText,
  refLink,
}) {
  return (
    <form
      onSubmit={
        (event)=>event.preventDefault()
      }
      name={name}
      method="post"
      className={`form ${formClassName}`}
      noValidate
      ref={refLink}
      xs={12}
      md={12}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </form>
  );
}

export default FormComponent;
