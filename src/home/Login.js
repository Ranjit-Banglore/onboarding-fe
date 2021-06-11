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
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/reducer/userSlice";
import Copyright from "./Copyright";
import { motion } from "framer-motion";
import { pageVariantsX, pageTransition } from "./transitionStyle";

const formSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});

// const validateUser = (data) => {
//   const user = useSelector((state) => state.user.userDetails);
//   if (user.email === data.email && user.password === data.password) {
//     return true;
//   } else {
//     return false;
//   }
// };

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

const Signup = () => {
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
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(data) => {
          console.log(data);
          if (true) {
            dispatch(setUser({ isAuthenticated: true }));
            history.push("/home");
          } else {
            history.push("/login");
          }
        }}
      >
        {({ handleSubmit }) => {
          return (
            <Container component="main" maxWidth="xs" spacing={3}>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant="h4" spacing={4}>
                  Login to Denario
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextInput name={"email"} label={"email"}></TextInput>
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput
                        name={"password"}
                        label={"password "}
                        type="password"
                      ></TextInput>
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
                    Login
                  </Button>

                  <Divider className={classes.divider}></Divider>
                </form>
                <Grid>
                  <Grid item>
                    <Link href="/signup" variant="subtitle1">
                      New to Denario? Signup here
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </div>
            </Container>
          );
        }}
      </Formik>
    </motion.div>
  );
};

export default Signup;
