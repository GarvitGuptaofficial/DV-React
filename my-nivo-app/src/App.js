import React from 'react';
import './App.css';
import BumpChart from './components/bumpchart'; // Importing the BumpChart component
import TimeRangeChart from './components/TimeRangeChart'; 
import Funnel from './components/Funnel'; 
import MyResponsiveRadialBar from './components/MyResponsiveRadialBar';
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
      <br /><br />
      <div className="row1">
            <br />
        <h1>Contest Submission Analysis</h1>
        <p>
            This chart shows the relative difficulty of different problems in a contest progressively. Number of Participants to number of people who submitted the solution for each problem is shown in the chart.
        </p>
        <div className="chart-container">
            <Funnel /> 
        </div>
      </div>
           <div className="row1">
            <br />
        <h1>Submission Language Analysis</h1>
        <br />
        <p>
            This chart shows the comparision of the most used 4 programming languages in the contests. Splitting of Submission based on verdict is also shown in the chart. 
                    </p>
        <p>

            This chart shows that most TLE's occur in Python language while C++ is the most used language in Competetive Programming. 
        </p>
        <div className="chart-container">
            <MyResponsiveRadialBar /> 
        </div>
      </div>
     
        </center>
    </div>
  );
}

export default App;
