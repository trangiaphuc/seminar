import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3 className = "text-primary">Sign In</h3>

                <div className="form-group mb-1">
                    <label className = "mt-1">Email address</label>
                    <input type="email" className="form-control mt-1" placeholder="Enter email" />
                </div>

                <div className="form-group mt-1">
                    <label className = "mt-1">Password</label>
                    <input type="password" className="form-control mt-1" placeholder="Enter password" />
                </div>

                <div className="form-group mt-1">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div class="d-grid gap-2 mt-1">
                    <button class="btn btn-primary" type="submit">LogIn Now!</button>
                </div>
                <p className="forgot-password text-center">
                    <a>  <Link className="nav-link text-center" hrefto={"/sign-up"}>Register for Free Now!</Link></a>
                </p>
            </form>
        );
    }
}