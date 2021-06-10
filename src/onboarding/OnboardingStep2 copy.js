import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
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
    width: theme.spacing(50),
    height: theme.spacing(10),
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#FFF",
    },
  },
  divider: {
    margin: theme.spacing(5, 40, 5, 40),
  },
}));

export default function OnboardingStep2() {
  const classes = useStyle();
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
      <Container>
        <Typography variant="h4" className={classes.heading} align="center">
          What type of company are you with?
        </Typography>
        <Typography variant="subtitle1" className={classes.text} align="center">
          Help us tailer-fit the relevant feature for you
        </Typography>
        <div>
          <Button
            size="large"
            color="primary"
            variant="outlined"
            className={classes.button}
            onClick={() => {
              dispatch(setUser({ type: "Business" }));
              history.push("/onboarding-step-3");
            }}
          >
            <Typography variant="h4">Business</Typography>
          </Button>
        </div>
        <div>
          <Button
            size="large"
            color="primary"
            variant="outlined"
            className={classes.button}
            onClick={() => {
              dispatch(setUser({ type: "Accounting" }));
              history.push("/onboarding-step-3");
            }}
          >
            <Typography variant="h4"> Accounting firm</Typography>
          </Button>
        </div>
      </Container>
    </motion.div>
  );
}
