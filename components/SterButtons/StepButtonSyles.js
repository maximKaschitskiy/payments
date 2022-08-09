import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const StyledButtonStep = styled(Button, { name: "StyledButtonStep" })({
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

const StyledCircularProgress = styled(CircularProgress, { name: "StyledCircularProgress" })({

});

export { StyledButtonStep, StyledCircularProgress };