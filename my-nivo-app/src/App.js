import React from 'react';
import './App.css';
import BumpChart from './components/bumpchart'; // Importing the BumpChart component

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
      </div>
        </center>
      <div className="chart-container">
        <BumpChart /> {/* Using the BumpChart component */}
      </div>
    </div>
  );
}

export default App;
