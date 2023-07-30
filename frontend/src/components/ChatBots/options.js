import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import Switch from "@material-ui/core/Switch";
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  greetingMessage: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
  },
  Box: {
    cursor: "pointer",
    alignItems: "center",
  },
}));

export default function VerticalLinearStepper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper activeStep={0} orientation="vertical">
        <Step>
          <StepLabel>
            <div className={classes.greetingMessage}>
              {"Opção 1"}
              <IconButton size="small">
                <EditIcon />
              </IconButton>
              <IconButton size="small">
                <DeleteOutline />
              </IconButton>
            </div>
          </StepLabel>

          <StepContent>
            <div className={classes.greetingMessage}>
              <Typography color="textSecondary" variant="body1">
                Message:
              </Typography>
              {"Esta é a mensagem de saudação"}
              <IconButton size="small">
                <EditIcon />
              </IconButton>
            </div>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>
            <div className={classes.greetingMessage}>
              <TextField variant="standard" color="primary" autoFocus />
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Atendente"
              />
              <IconButton size="small">
                <SaveIcon />
              </IconButton>
              <IconButton size="small">
                <DeleteOutline />
              </IconButton>
            </div>
          </StepLabel>
        </Step>

        <Step>
          <StepLabel>Adicionar opções</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}
