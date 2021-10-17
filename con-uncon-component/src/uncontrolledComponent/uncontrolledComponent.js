import React from 'react';
export default class UncontrolledComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.myRef = React.createRef();
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.myRef.current.value);
      event.preventDefault();
    }
  
    // handleChange(e){
    //   alert('A name was changed' + this.myRef.current.value);
    // }

    // handleChange(e){
    //   alert('A name was changed: ' + e.target.value);
    // }


    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input 
                type="text" 
                ref={this.myRef} 
                // onChange = {this.handleChange}
                />
          </label>
          <input 
            type="submit" 
            value="Submit" />
        </form>
      );
    }
  }