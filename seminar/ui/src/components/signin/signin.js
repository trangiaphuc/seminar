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
            });
        
            var request = new XMLHttpRequest();
            request.open('POST', 'http://localhost:9000/users/signin', true);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.send(data);

            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // };
            // fetch('http://localhost:9000/users/signin', requestOptions)
            //     .then(response => {console.log(response.json());});

            // console.log(data);

            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
            };

            axios.post(`http://localhost:9000/users/signin`, data, config)
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