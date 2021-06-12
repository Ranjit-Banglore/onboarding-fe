import {
  Button,
  Container,
  CssBaseline,
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
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
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
      <Container component="main" maxWidth="xs" spacing={3}>
        <CssBaseline />
        <Typography variant="h3" className={classes.heading} align="center">
          Setup complete
        </Typography>
        <Typography variant="subtitle2" className={classes.text} align="center">
          Add an invoice however you like and scheduele for payment
        </Typography>
        <div>
          <Button
            size="large"
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => {
              history.push("/home");
            }}
          >
            <Typography variant="h4">Add a invoice</Typography>
          </Button>
        </div>
        <Divider className={classes.divider}></Divider>
        <Grid>
          <Grid item>
            <Button
              size="medium"
              color="primary"
              variant="outlined"
              onClick={() => {
                history.push("/home");
              }}
            >
              <Typography variant="h6"> No thanks, later!</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
