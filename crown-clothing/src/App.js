import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/HomePage/hompage";
import ShopPage from "./pages/Shop/shop";
import Header from "./components/Header/header";
import SignInAndSignUp from "./pages/SignIn-SignUp/signin-signup";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
