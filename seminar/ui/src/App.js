import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import Dashboard from "./components/bmi/dashboard";

function App() {
  return (<Router>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-200">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>REACT FORM</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>

        
    </div></Router>
  );
}

export default App;