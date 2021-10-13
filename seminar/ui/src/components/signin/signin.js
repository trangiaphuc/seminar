import React, { } from "react";
//import {useHistory} from "react-router-dom";
import axios from "axios";


export default class LogIn extends React.Component {
        state = {
            gmail : "",
            password : ""};

        handleChange = e =>{
            this.setState({[e.target.name] : e.target.value});
        }

        handleSubmit = e =>{
            e.preventDefault();
           
            let data = JSON.stringify({
                password: this.state.password,
                gmail: this.state.gmail
            })
        
            console.log(data);

            axios.post(`http://localhost:9000/users/signin`, data, {
                Headers: {
                    'Content-Type': 'application/json',
                }, 
            })
            .then(response =>{
                console.log(response);
            }).catch(err =>{console.log(err);});
    

        }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <h3>Sign In</h3>
                <div className="mt-1 form-group">
                    <label>Email address</label>
                    <input 
                        name = "gmail"
                        value = {this.state.gmail} 
                        onChange={ this.handleChange } 
                        type="email" 
                        className="mt-1 form-control" 
                        placeholder="Enter email" 
                       />
                </div>

                <div className="mt-1 form-group">
                    <label>Password</label>
                    <input 
                        name = "password"
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        type="password" 
                        className="mt-1 form-control" 
                        placeholder="Enter password"
                       />
                </div>
                <br/>
                <div className="d-grid gap-2">
                    <button 
                        type="submit" 
                        className="mt-1 btn btn-primary btn-block"
                        // disabled="true"
                        >
                            Submit
                    </button>
                </div>
                <p className="mt-1 forgot-password text-right">
                    Don't have Account?<a href="/sign-up" 
                    // onClick={()=>{
                    //     history.push('/sign-up');
                    // }}
                    >
                        {" "}
                        Register Now!</a>
                </p>
            </form>
        );
    }
}