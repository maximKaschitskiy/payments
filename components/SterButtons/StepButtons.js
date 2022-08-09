import { jsx, css } from "@emotion/react";
import Box from "@mui/material/Box";

import { green } from "@mui/material/colors";
import { StyledButtonStep, StyledCircularProgress } from "./StepButtonSyles.js";

const StepButtons = ({ onSubmit, handleBack, activeStep, steps, loading }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
    >
      {activeStep !== 0 && (
        <Box sx={{ mt: 3, mr: 0.5, position: "relative" }}>
          <StyledButtonStep
            className="customButton"
            variant="contained"
            onClick={handleBack}
            sx={({ mt: 3, ml: 1 })}
          >
            Back
          </StyledButtonStep>
        </Box>
      )}
      <Box sx={{ mt: 3, ml: 0.5, position: "relative" }}>
        <StyledButtonStep
          className="customButton"
          variant="contained"
          disabled={loading}
          onClick={() => {
            onSubmit();
          }}
          sx={({ mt: 3, ml: 1 })}
        >
          {activeStep === steps.length - 1 ? "Place order" : (loading ? <StyledCircularProgress size={24}/> : "Next")} 
        </StyledButtonStep>
      </Box>
    </Box>
  );
};

export default StepButtons;
