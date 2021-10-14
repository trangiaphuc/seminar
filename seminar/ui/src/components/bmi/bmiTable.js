import React from 'react';
import { 
    // Link, 
    // NavLink, 
    withRouter } from 'react-router-dom';

const BMIRow = withRouter(({
    bmirecord
    // , 
    // location: { search }
    // , closeIssue, deleteIssue, index,
  }) => {

    return (
        <tr>
        <td>{bmirecord.recordId}</td>
        <td>{bmirecord.weight}</td>
        <td>{bmirecord.height}</td>
        <td>{new Date(bmirecord.createAt).toDateString()}</td>
      </tr>
    );
  });

  
export default function bmiTable(props) {
    var bmirecords= props.bmirecords;
    // let currentDate = new Date();
    const bmiRows = bmirecords.map(bmirecord =>(
        <BMIRow
            key={bmirecord.recordId}
            bmirecord={bmirecord}
        />
    ));
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Weight</th>
            <th scope="col">Height</th>
            <th scope="col">Recorded Date</th>
          </tr>
        </thead>
        <tbody>
          {bmiRows}
        </tbody>
      </table>
    );
  }
  