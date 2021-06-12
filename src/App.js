import React from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Signup from "./home/Signup";
import Login from "./home/Login";
import OnboardingStep1 from "./onboarding/OnboardingStep1";
import OnboardingStep2 from "./onboarding/OnboardingStep2";
import OnboardingStep3 from "./onboarding/OnboardingStep3";
import OnboardingStep4 from "./onboarding/OnboardingStep4";
import OnboardingStep5 from "./onboarding/OnboardingStep5";
import OnboardingStep6 from "./onboarding/OnboardingStep6";
import OnboardingStep7 from "./onboarding/OnboardingStep7";
import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import { AnimatePresence } from "framer-motion";
import EmailService from "./service/EmailService";

const AuthRoute = ({
  component: Component,
  isAuthenticated: isAuthenticated,
}) => {
  console.log("user in AuthRoute-" + isAuthenticated);
  return (
    <Route
      render={() =>
        isAuthenticated ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )
      }
    ></Route>
  );
};

function App() {
  const user = useSelector((state) => state.user.userDetails);

  console.log(user);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="content"></div>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            {/* <Route path="/" component={Login} exact></Route> */}
            {/* <AuthRoute
                exact
                path="/"
                component={Dashboard}
                isAuthenticated={user.isAuthenticated}
              ></AuthRoute> */}
            <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Dashboard}></Route>
            <Route path="/email" component={EmailService}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route
              path="/onboarding-step-1"
              component={OnboardingStep1}
            ></Route>
            <Route
              path="/onboarding-step-2"
              component={OnboardingStep2}
            ></Route>
            <Route
              path="/onboarding-step-3"
              component={OnboardingStep3}
            ></Route>
            <Route
              path="/onboarding-step-4"
              component={OnboardingStep4}
            ></Route>
            <Route
              path="/onboarding-step-5"
              component={OnboardingStep5}
            ></Route>
            <Route
              path="/onboarding-step-6"
              component={OnboardingStep6}
            ></Route>
            <Route
              path="/onboarding-step-7"
              component={OnboardingStep7}
            ></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
