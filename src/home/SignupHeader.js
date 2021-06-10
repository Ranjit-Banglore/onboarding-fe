import { Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class SignupHeader extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4" spacing={4}>
          Welcome to Denario
        </Typography>
        <Typography variant="subtitle1">
          Sign up to manage all your buisness payments
        </Typography>
        <Typography variant="subtitle1"> in one place</Typography>
      </div>
    );
  }
}
