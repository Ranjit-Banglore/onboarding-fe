import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setUser } from "../redux/reducer/userSlice";
import { pageVariantsX, pageTransition } from "../home/transitionStyle";
import { motion } from "framer-motion";

const useStyle = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(15),
  },
  text: {
    marginTop: theme.spacing(4),
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
    marginTop: theme.spacing(5),
    width: theme.spacing(20),
    height: theme.spacing(15),
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#FFF",
    },
  },
}));

export default function OnboardingStep5() {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="out"
      variants={pageVariantsX}
      transition={pageTransition}
    >
      <Container maxWidth="xs">
        <Typography variant="h4" className={classes.heading} align="center">
          What is {user.companyName}
          {"'s"} monthly expected bill payment volume
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              className={classes.button}
              onClick={() => {
                dispatch(setUser({ paymentVolume: "Up to 10K Euro" }));
                history.push("/onboarding-step-6");
              }}
            >
              <Typography variant="h6">Up to 10K Euro</Typography>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              className={classes.button}
              onClick={() => {
                dispatch(setUser({ paymentVolume: "10K-50K Euro" }));
                history.push("/onboarding-step-6");
              }}
            >
              <Typography variant="h6">10K-50K Euro</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              className={classes.button}
              onClick={() => {
                dispatch(setUser({ paymentVolume: "50K-150K Euro" }));
                history.push("/onboarding-step-6");
              }}
            >
              <Typography variant="h6">50K-150K Euro</Typography>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              className={classes.button}
              onClick={() => {
                dispatch(setUser({ paymentVolume: "150K+ Euro" }));
                history.push("/onboarding-step-6");
              }}
            >
              <Typography variant="h6">150K+ Euro</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
