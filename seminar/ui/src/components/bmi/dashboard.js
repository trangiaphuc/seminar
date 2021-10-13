import React from "react";
import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
import axios from "axios";
import BMITable from "./bmiTable";
import BMIAdd from "./bmiAdd";

export default class DashboardBMI extends React.Component {
    constructor() {
        super();
        this.state = { bmiRecords: [] };
       // this.createIssue = this.createBMIRecord.bind(this);
        // this.closeIssue = this.closeIssue.bind(this);
        // this.deleteIssue = this.deleteIssue.bind(this);
      }
    componentWillMount() {
        this.loadData();
    }

    componentDidMount(){
        this.loadData();
    }

    async loadData() {
        axios.get('http://localhost:9000/bmi/bmirecords')
        .then((response) => {
            this.setState({bmiRecords : response.data.bmiRecords});
            console.log(response.data.bmiRecords);
            console.log({state: this.state.bmiRecords});
        });
        
    }
    

    render() {
        return (
        // <React.Fragment >
            <div className = "">
                <h1>
                    BMI Dashboard
                </h1>
                <BMIAdd/>
                <BMITable bmirecords = {this.state.bmiRecords}/>
            </div>
        // </React.Fragment>
        )
    }
}