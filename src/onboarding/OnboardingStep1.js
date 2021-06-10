import {
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { pageVariantsX, pageTransition } from "../home/transitionStyle";
import { motion } from "framer-motion";

const useStyle = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(15),
  },
  text: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  activation_form: {
    marginTop: theme.spacing(3),
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 100,
    },
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  divider: {
    width: "100%",
    height: "1px",
    margin: theme.spacing(3, 0, 3),
  },
}));

const OnboardingStep1 = () => {
  const [input, setInput] = useState("");
  const user = useSelector((state) => state.user.userDetails);
  const classes = useStyle();
  const history = useHistory();
  const rightCode = user.code;
  let isValid = input == rightCode;
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="out"
      variants={pageVariantsX}
      transition={pageTransition}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography variant="h4" className={classes.heading} align="center">
          Check your email
        </Typography>
        <Typography variant="subtitle1" className={classes.text} align="center">
          We sent a 4 digit code to your {user.email}
          <br></br>
        </Typography>
        <Typography variant="subtitle1" className={classes.text} align="center">
          Can't find it ? Check your spam folder.
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs="12">
            <TextField
              label="Enter activation code"
              inputProps={{ maxLength: 5 }}
              align="center"
              name="activationCode"
              size="large"
              variant="standard"
              value={input}
              onChange={(e) => {
                e.preventDefault();
                setInput(e.target.value);
              }}
              error={input.length == 4 && input != user.code}
              helperText={
                input.length == 4 && input != user.code ? "invalid code" : " "
              }
            />
          </Grid>
          <Grid item xs="12">
            <Button
              color="primary"
              variant="outlined"
              disabled={!isValid}
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                history.push("/onboarding-step-2");
              }}
            >
              Confirm and continue
            </Button>
          </Grid>
        </Grid>
        <Divider className={classes.divider}></Divider>

        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Link href="/signup" variant="subtitle1">
              Noticed a typo? Fix your email address.
            </Link>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              className={classes.button}
            >
              Resend the code
            </Button>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default OnboardingStep1;
