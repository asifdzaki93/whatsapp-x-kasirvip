import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

import SelectConection from "../../components/SelectConection";
import MainHeader from "../../components/MainHeader";
import Title from "../../components/Title";
import MainContainer from "../../components/MainContainer";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(1),
    overflowY: "scroll",
  },
  margin: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  textField: {
    width: "25ch",
  },
}));

const ConfigMessage = () => {
  const classes = useStyles();

  return (
    <MainContainer>
      <MainHeader>
        <Title>Configuração de envio de mensagem.</Title>
      </MainHeader>
      <Paper className={classes.mainPaper} variant="outlined">
        <SelectConection />

        <div>
          <TextField
            label="Limite de envio a cada 24h"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Limite</InputAdornment>
              ),
            }}
          />

          <TextField
            label="Aguardar entre"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Minutos</InputAdornment>
              ),
            }}
          />

          <TextField
            label="Segundos a cada envio"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Segundos</InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <FormControl
            component="fieldset"
            fullWidth
            className={classes.margin}
          >
            <FormLabel component="legend">Configurações adicionais</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch name="contact" />
                }
                label="Enviar só para os meus contatos"
              />
              <FormControlLabel
                control={
                  <Switch name="photo" />
                }
                label="Enviar mensagem só para os numeros que tem foto"
              />
              <FormControlLabel
                control={
                  <Switch name="random" />
                }
                label="Enviar em ordem aleatória"
              />
            </FormGroup>
          </FormControl>

          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="standard-adornment-amount">
              Incluir mensagem no final com opção de não receber mais (opt-out)
            </InputLabel>
            <Input
              multiline
              rows={5}
              margin="dense"
              variant="outlined"
            />
          </FormControl>
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Salvar configurações
          </Button>
        </div>
      </Paper>
    </MainContainer>
  );
};

export default ConfigMessage;
