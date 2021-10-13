import React, { } from "react";
//import {useHistory} from "react-router-dom";
import axios from "axios";


export default class BMIAdd extends React.Component{
    
    constructor(){
        super();

        this.state = {
            weight : 0,
            height : 0,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e =>{
        if(e.target.value <0 ){
            alert("Please Enter a Positive Value!");
            e.target.value = 0;
        }

        this.setState({[e.target.name] : e.target.value});
        console.log({bmidata: this.state})
    }


    handleSubmit = e => {

        e.preventDefault();
        let data = {
            weight: this.state.weight,
            height: this.state.height,
        };

        console.log({Data_BMI: data});

        axios.post('http://localhost:9000/bmi/addbmi', data)
            .then(response => {
                if(response.data.added === true) {
                    alert('Success');
                }
                else {
                    alert('Error');
                }
            })

        // const response = fetch('http://localhost:9000/bmi/addbmi', {
        // method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        // headers: {
        // 'Content-Type': 'application/json'
        // // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
        // });
        // // parses JSON response into native JavaScript objects
        // console.log(response);

    };

    render() {
        return(
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className = "d-flex justify-content-start">
                    <div className="form-group">
                        <input 
                        name = "height"
                        value = {this.state.height}
                        onChange={this.handleChange}
                        type="number" 
                        className="form-control w-100" 
                        id="height" 
                        placeholder ="Enter your height here!"/>
                    </div>
                    <div className="form-group mx-sm-3 d-flex justify-content-start">
                        <input 
                        name = "weight"
                        value = {this.state.weight}
                        onChange= {this.handleChange}
                        type="number" 
                        className="form-control w-100" 
                        id="weight" 
                        placeholder="Enter your weight here!"/>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block mb-2 mt-3">Confirm your Weight and Height Now!</button>
            </form>
        )
    }
}