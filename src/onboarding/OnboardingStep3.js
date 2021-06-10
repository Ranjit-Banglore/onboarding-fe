import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  makeStyles,
  Link,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import TextInput from "../onboarding/TextInput";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducer/userSlice";
import Copyright from "../home/Copyright";
import { pageVariantsX, pageTransition } from "../home/transitionStyle";
import { motion } from "framer-motion";

const formSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  mobile: Yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "100%",
  },
  divider: {
    width: "100%",
    height: "1px",
    margin: theme.spacing(3, 0, 1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    width: "100%",
  },
}));

const OnboardingStep3 = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <motion.div
    exit="out"
    animate="in"
    initial="out"
    variants={pageVariantsX}
    transition={pageTransition}
  >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          mobile: "",
        }}
        validationSchema={formSchema}
        onSubmit={(data) => {
          dispatch(setUser(data));
          history.push("/onboarding-step-4");
        }}
      >
        {({ handleSubmit }) => {
          return (
            <Container component="main" maxWidth="xs" spacing={3}>
              <CssBaseline />
              
              <div className={classes.paper}>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        First, tell us about yourself
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextInput
                        name={"firstName"}
                        label={"First name"}
                        variant="standard"
                      ></TextInput>
                    </Grid>
                    <Grid item xs={6}>
                      <TextInput
                        name={"lastName"}
                        label={"Last name "}
                      ></TextInput>
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput name={"mobile"} label={"Mobile "}></TextInput>
                    </Grid>
                  </Grid>
                  <Button
                    className={classes.submit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="medium"
                  >
                    continue
                  </Button>
                </form>
              </div>
            </Container>
          );
        }}
      </Formik>
      </motion.div>
  );
};

export default OnboardingStep3;
