import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export default function SignUp() {

        let history = useHistory();



        return (
            <form>
                <h3>Sign Up</h3>

                <div className="mt-1 form-group">
                    <label>First name</label>
                    <input type="text" className="mt-1 form-control" placeholder="First name" />
                </div>

                <div className="mt-1 form-group">
                    <label>Last name</label>
                    <input type="text" className="mt-1 form-control" placeholder="Last name" />
                </div>

                <div className="mt-1 form-group">
                    <label>Email address</label>
                    <input type="email" className="mt-1 form-control" placeholder="Enter email" />
                </div>

                <div className="mt-1 form-group">
                    <label>Password</label>
                    <input type="password" className="mt-1 form-control" placeholder="Enter password" />
                </div>
                <br/>

                <div class="d-grid gap-2">
                    <button 
                        type="submit" 
                        className="mt-1 btn btn-primary btn-block"
                        >
                            {" "}
                            Sign Up</button>
                </div>
                <p className="mt-1 forgot-password text-right">
                    Already registered <a href="#"
                    onClick= {()=>{
                        history.push('/sign-in');
                    }}
                    >
                        Sign in Now?</a>
                </p>
            </form>
        );
}