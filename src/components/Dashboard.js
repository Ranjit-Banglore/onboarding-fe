import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const user = useSelector((state) => state.user.userDetails);

  return (
    // <div>{JSON.stringify(user)}</div>
    <div>
      <Typography variant="h2">
        {" "}
        User Dashboard is under development.{" "}
      </Typography>
      <Typography variant="h2">
        {" "}
        This is {user.firstName}'s Dashboard.{" "}
      </Typography>
      <Typography variant="h4"> This is {user.firstName}'s details </Typography>
      <Typography variant="subtitle1">Email: {user.email}</Typography>
      <Typography variant="subtitle1">User Type: {user.type}</Typography>
      <Typography variant="subtitle1">First Name: {user.firstName}</Typography>
      <Typography variant="subtitle1">Last Name: {user.lastName}</Typography>
      <Typography variant="subtitle1">Mobile: {user.mobile}</Typography>
      <Typography variant="subtitle1">
        Company Name: {user.companyName}
      </Typography>
      <Typography variant="subtitle1">
        Company Address: {user.companyAddress}
      </Typography>
      <Typography variant="subtitle1">
        Payment Volume: {user.paymentVolume}
      </Typography>
    </div>
  );
};

export default Dashboard;
