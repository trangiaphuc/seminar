import React from 'react';
import URLSearchParams from 'url-search-params';
import { withRouter } from 'react-router-dom';

class BMIFilter extends React.Component {
    constructor({ location: { search } }) {
        super();
        const params = new URLSearchParams(search);
        this.state = {
            weightMin: params.get('weightMin') || '',
            weightMax: params.get('weightMax') || '',
            changed: false,
        };
        this.applyFilter = this.applyFilter.bind(this);
    }


    //handleChange
    handleChange = e =>{
        this.setState({[e.target.name] : e.target.value});
        // console.log({bmidata: this.state})
    }

    //xac nhan props search co thay doi
    componentDidUpdate(prevProps) {
        const { location: { search: prevSearch } } = prevProps;
        const { location: { search } } = this.props;
        if (prevSearch !== search) {
            this.showOriginalFilter();
        }
    }


    
    showOriginalFilter() {
        const { location: { search } } = this.props;
        const params = new URLSearchParams(search);
        this.setState({
            weightMin: params.get('weightMin')|| '',
            weightMax: params.get('weightMax') || '',
            changed: false,
        });
    }

    //applyFilter
    applyFilter() {
        const weightMin = this.state.weightMin;
        const weightMax = this.state.weightMax;

        //dung history cua URLSearchParams
        const { history } = this.props;
        const params = new URLSearchParams();
        
        //set param vao thanh url
        if (weightMin) params.set('weightMin', weightMin);
        if (weightMax) params.set('weightMax', weightMax);
    
        //typed data
        const search = params.toString() ? `?${params.toString() }` : '';
        // console.log(search);
        //push param vao thanah url
        history.push({ pathname: '/', search });
    }

    render() {
        const {weightMin, weightMax} = this.state;
        return (
            <div>
                <div className = "d-flex justify-content-start">
                    
                    <div className="form-floating">
                        <input 
                        name = "weightMin"
                        value = {weightMin}
                        onChange={this.handleChange}
                        type="number" 
                        className="form-control w-100" 
                        id="height" 
                        placeholder ="Enter your height here!"/>
                        <label htmlFor="height">Min Weight</label>
                    </div>
                    
                    <div> <p>  &nbsp;&nbsp;&nbsp; </p></div>
                    
                    <div className="form-floating">
                        <input 
                        name = "weightMax"
                        value = {weightMax}
                        onChange= {this.handleChange}
                        type="number" 
                        className="form-control w-100" 
                        id="weight" 
                        placeholder="Enter your weight here!"/>
                        <label htmlFor="weight">Max Weight</label>
                    </div>
                    
                    <div> <p>  &nbsp;&nbsp;&nbsp; </p></div>

                    <button 
                        type="button" 
                        className="btn btn-primary btn-block mb-2 mt-3"
                        onClick = {this.applyFilter}>
                        Filter with Weight!
                    </button>

                </div>                
            </div>
        )
    }

}

export default withRouter(BMIFilter);