import React from 'react';
import './App.css';
import BumpChart from './components/bumpchart'; // Importing the BumpChart component
import TimeRangeChart from './components/TimeRangeChart'; 
import { TimeRange } from '@nivo/calendar';

function App() {
  return (
    <div>
        <center>

      <div className="row1">
            <br />
        <h1>Comparision of users over 2 hours of Contest</h1>
        <p>
            The chart below shows the relative ranking of different users
            over a span of 2 hours during the contest. Data points are shown every 15 minutes. 
        </p>
        <div className="chart-container">
            <BumpChart /> 
        </div>
      </div>
      <br /><br /><br />
      <div className="row1">
            <br />
        <h1>Submission History of a User over a Year (2023)</h1>
        <p>
            The chart below shows the submission history of a user(prietukani) over a year. 
            The color intensity of a cell represents the number of submissions made on that day.
        </p>
        <div className="chart-container">
            <TimeRangeChart /> 
        </div>
      </div>
     
        </center>
    </div>
  );
}

export default App;
