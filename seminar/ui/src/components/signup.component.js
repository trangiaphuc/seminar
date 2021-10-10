import React, { Component } from "react";
import { BrowserRouter as  Link } from "react-router-dom";


export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
 
                <div className="form- mt-1">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form- mt-1">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form- mt-1">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form- mt-1">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div class="d-grid gap-2 mt-1">
                    <button class="btn btn-primary" type="submit">Sign Up For Free Now!</button>
                </div>

                <p className="forgot-password text-center">
                    <Link className="nav-link text-center" hrefto={"/sign-up"}>Have Account? Log In Now!</Link>
                </p>
            </form>
        );
    }
}