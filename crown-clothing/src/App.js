import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/HomePage/hompage";
import ShopPage from "./pages/Shop/shop";
import Header from "./components/Header/header";
import SignInAndSignUp from "./pages/SignIn-SignUp/signin-signup";
import { auth } from "./firebase/firebase";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
