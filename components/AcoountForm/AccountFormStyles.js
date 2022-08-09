import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AccountFormWrapper = styled(Grid, { name: "AccountFormWrapper" })({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "20px",
});

const StyledButtonAcoount = styled(Button, { name: "StyledButtonAcoount" })({
    borderRadius: "2.5px",
    border: "2px solid #000",
    backgroundColor: "white",
    color: "black",
    transition: "all ease 0.6s",
    background: "linear-gradient(75deg, black 50%, white 50%)",
    backgroundSize: "250% 100%",
    backgroundPosition: "right bottom",
    "&:hover": {
      color: "#fff",
      backgroundPosition: "left bottom",
    },
});

export { StyledButtonAcoount, AccountFormWrapper };