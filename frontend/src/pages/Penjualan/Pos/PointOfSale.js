import React, { useState } from "react";
import { Stepper, Step, StepLabel, Typography, Button, Grid, Paper } from "@material-ui/core";
import { CartProvider } from "../../CartContext";
import SelectProduct from "./SelelctProduct";

function getSteps() {
  return ['Pilih Produk', 'Detail Invoice', 'Detail Pembayaran'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <SelectProduct/>;
    case 1:
      return 'Bagian untuk melihat detail invoice...';
    case 2:
      return 'Bagian untuk mengisi detail pembayaran...';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <CartProvider>
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Paper elevation={3} style={{ padding: '2em', marginTop: '2em' }}>
                <Typography>{getStepContent(activeStep)}</Typography>
              </Paper>
              <Grid container justify="center" style={{ marginTop: '2em' }}>
                <Button disabled={activeStep === 0} onClick={handleBack} style={{ marginRight: '1em' }}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Grid>
            </div>
          )}
        </div>
      </div>
    </CartProvider>
  );
}
