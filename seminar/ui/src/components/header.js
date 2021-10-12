import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './about';
import SignIn from './signin/signin';
export default function Home() {
    return (
    <Router>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">REACT FORM</a>
                <div className="d-flex">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    <Link className="btn btn-outline-success me-2" name = "signin" to="/signin">Sign In</Link>
                    <Link className="btn btn-success " name = "signup" to="/about">Sign Up for FREE</Link>
                </div>
            </div>
            <div> 
                <Switch>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                </Switch>
            </div>
        </nav>
    </Router>
)}
