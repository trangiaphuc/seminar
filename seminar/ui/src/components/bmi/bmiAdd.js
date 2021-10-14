import React, { } from "react";
//import {useHistory} from "react-router-dom";
import axios from "axios";
import NumInput from "../specializedComponent/NumInput"

export default class BMIAdd extends React.Component{
    
    constructor(){
        super();

        this.state = {
            weight : 0,
            height : 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleChange set state 
    handleChange = (e, naturalValue) =>{
        const { name, value: textValue } = e.target;
        const value = naturalValue === undefined ? textValue : naturalValue;
        this.setState({[name] : value});
        // console.log({bmidata: this.state})
        // console.log(typeof(e.target.value));
    }

    //post api bmi data vua nhap vao
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
        const {weight, height} = this.state;
        return(
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className = "d-flex justify-content-start">
                    <div className="form-floating">
                        <NumInput 
                        name = "height"
                        value = {height}
                        onChange={this.handleChange}
                        className="form-control w-100" 
                        id="height" 
                        placeholder ="Enter your height here!"/>
                        <label htmlFor="height">Your Height</label>
                    </div>
                    <div> <p>  &nbsp;&nbsp;&nbsp; </p></div>
                    <div className="form-floating">
                        <NumInput 
                        name = "weight"
                        value = {weight}
                        onChange= {this.handleChange}
                        className="form-control w-100" 
                        id="weight" 
                        placeholder="Enter your weight here!"/>
                        <label htmlFor="weight">Your Weight</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-2 mt-3">Confirm your Weight and Height Now!</button>
            </form>
        )
    }
}