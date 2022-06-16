import buttonStyle from "../../styles/button";

import { jsx, css } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

const StepButtons = ({ onSubmit, handleBack, activeStep, steps, loading }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
    >
      {activeStep !== 0 && (
        <Box sx={{ mt: 3, mr: 0.5, position: "relative" }}>
          <Button
            className="customButton"
            variant="contained"
            onClick={handleBack}
            sx={({ mt: 3, ml: 1 }, buttonStyle)}
          >
            Back
          </Button>
        </Box>
      )}
      <Box sx={{ mt: 3, ml: 0.5, position: "relative" }}>
        <Button
          className="customButton"
          variant="contained"
          disabled={loading}
          onClick={() => {
            onSubmit();
          }}
          sx={({ mt: 3, ml: 1 }, buttonStyle)}
        >
          {activeStep === steps.length - 1 ? "Place order" : "Next"}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              top: "20%",
              left: "35%",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default StepButtons;
