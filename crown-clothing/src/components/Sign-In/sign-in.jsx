import React from "react";
import FormInput from "../Form-input/form-input";
import CustomeButton from "../Custome-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase";
import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.state({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an accound</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
                <div className="buttons">  
          <CustomeButton type="submit">Sign In</CustomeButton>
          <CustomeButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
