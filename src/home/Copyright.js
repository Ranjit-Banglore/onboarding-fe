import { makeStyles, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  footer: {
    marginBottom: theme.spacing(0),
  },
}));

export default function Copyright() {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Denario
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
