import {
  Button,
  Container,
  Divider,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
    width: "100%",
    height: "1px",
    margin: theme.spacing(3),
  },
}));

export default function OnboardingStep7() {
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
          Setup complete
        </Typography>
        <Typography variant="subtitle1" className={classes.text} align="center">
          Add an invoice however you like and scheduele for payment
        </Typography>
        <Grid container spacing={4}>
          <Grid item>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              className={classes.button}
              onClick={() => {
                dispatch(setUser({ type: "Business" }));
                history.push("/home");
              }}
            >
              <Typography variant="h4">Add a invoice</Typography>
            </Button>
          </Grid>
          <Grid item xs="12">
            <Divider className={classes.divider}></Divider>
          </Grid>
        </Grid>
        <Grid item>
          <Link href="/home" variant="subtitle1">
            No thanks, later!
          </Link>
        </Grid>
        <Divider className={classes.divider}></Divider>
      </Container>
    </motion.div>
  );
}
