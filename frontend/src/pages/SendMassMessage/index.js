import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Field, Form, Formik } from "formik";
import React from "react";
import SelectConection from "../../components/SelectConection";
import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import Title from "../../components/Title";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(1),
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
  textField: {
    marginRight: theme.spacing(1),
    flex: 1,
  },
  extraAttr: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrapper: {
    position: "relative",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const RenderForm = ({
  classes,
  handleSaveContact,
  handlePreview,
}) => {
  return (
    <div className={classes.root}>
      <Formik
        onSubmit={(values, actions) => {
            handleSaveContact(values, actions);
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            <div>
              <SelectConection/>
              <Field
                as={TextField}
                label="Modelo"
                type="model"
                multiline
                minRows={10}
                fullWidth
                name="model"
                variant="outlined"
                margin="dense"
              />

              <Field
                as={TextField}
                label="Dados"
                type="csv"
                multiline
                minRows={5}
                fullWidth
                name="csv"
                variant="outlined"
                margin="dense"
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                disabled={isSubmitting}
                onClick={() => handlePreview(values)}
                className={classes.btnWrapper}
              >
                Mostrar preview
              </Button>

              <Button
                type="submit"
                color="primary"
                disabled={isSubmitting}
                variant="contained"
                className={classes.btnWrapper}
              >
                Enviar Mensagem
                {isSubmitting && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const Contacts = () => {
  const classes = useStyles();

  const handleSaveContact = async (values, actions) => {
    // Logika penyimpanan kontak Anda
  };

  const handlePreview = async (values) => {
    // Logika pratinjau Anda
  };

  return (
    <MainContainer className={classes.mainContainer}>
      <MainHeader>
        <Title>Envio de Mensagem</Title>
      </MainHeader>
      <Paper className={classes.mainPaper} variant="outlined">
        <RenderForm
          classes={classes}
          handleSaveContact={handleSaveContact}
          handlePreview={handlePreview}
        />
      </Paper>
    </MainContainer>
  );
};

export default Contacts;
