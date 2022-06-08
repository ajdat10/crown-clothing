import React from "react";
import SignUpForm from "../../components/signup-form/SignUp-form";
import SignInForm from "../../components/signin-form/SignIn-form";
import './Authentication.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
