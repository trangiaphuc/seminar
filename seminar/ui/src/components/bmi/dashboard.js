import React from "react";
import URLSearchParams from 'url-search-params';
import axios from "axios";
import BMITable from "./bmiTable";
import BMIAdd from "./bmiAdd";
import BMIFilter from "./bmiFilter";

export default class DashboardBMI extends React.Component {
    constructor() {
        super();
        this.state = { bmiRecords: [] };
      }

    //load data sau khi render
    componentDidMount() {
        this.loadData();
    }

    //load lai data sau khi update
    componentDidUpdate(){
        this.loadData();
    }

    //load data call api
    async loadData() {

        //lay param push tu bmiFilter len thanh url
        const { location: { search } } = this.props;
        const params = new URLSearchParams(search);
        const vars = {};
        
        //typed data de query
        const weightMin = parseInt(params.get('weightMin'), 10);
        if (!Number.isNaN(weightMin)) vars.weightMin = weightMin;
        const weightMax = parseInt(params.get('weightMax'), 10);
        if (!Number.isNaN(weightMax)) vars.weightMax = weightMax;

        // console.log({var: vars});

        axios.get('http://localhost:9000/bmi/bmirecords', 
        {params: {weightMin: vars.weightMin, weightMax: vars.weightMax}})
        .then((response) => {
            this.setState({bmiRecords : response.data.bmiRecords});
            // console.log(response.data.bmiRecords);
            // console.log({state: this.state.bmiRecords});
        });
        
    }
    

    render() {
        const { bmiRecords } = this.state;
        return (
            <div className = "">
                <h1>
                    REACT FORM
                </h1>
                <BMIAdd/>
                <BMIFilter/>
                <BMITable bmirecords = {bmiRecords}/>
            </div>
        )
    }
}