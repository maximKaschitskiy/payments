import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const MainWrapper = styled(Container, { name: "MainWrapper" })({
    borderRadius: "5px",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.2)",
    position: "absolute",
    background: "#ffe897",
    background: "-moz-radial-gradient(top right, #ffe897, #f98a05)",
    background: "radial-gradient(to bottom left, #ffe897, #f98a05)",
    background: "-webkit-radial-gradient(top right, #ffe897, #f98a05)",
    background: "#e0e793",
    background: "-moz-radial-gradient(bottom right, #e0e793, #6dd0f1)",
    background: "radial-gradient(to top left, #e0e793, #6dd0f1)",
    background: "-webkit-radial-gradient(bottom right, #e0e793, #6dd0f1)",
    zIndex: "-1",
    left: "0", 
    right: "0", 
    marginLeft: "auto", 
    marginRight: "auto", 
    width: "100%",
    overflow: "hidden",
});

const MainFormWrapper = styled(Paper, { name: "MainFormWrapper" })({
    backgroundColor: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(10px) saturate(100%) contrast(45%) brightness(130%)",
});

const StyledStep = styled(Step, { name: "StyledStepper" })({
    "& .Mui-active": {
        color: "#000000 !important",
    },
    "& .Mui-completed": {
        color: "#212121 !important",
    },
    "& .Mui-disabled": {
        color: "#757575 !important",
    },
});

const StyledStepLabel = styled(StepLabel, { name: "StyledStepLabel" })({
    "& .Mui-active": {
        color: "#000000 !important",
    },
    "& .Mui-completed": {
        color: "#212121 !important",
    },
    "& .Mui-disabled": {
        color: "#757575 !important",
    },
});

export { MainWrapper, MainFormWrapper, StyledStep, StyledStepLabel };