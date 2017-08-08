import React, { Component } from 'react';
import './App.css';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Stardos+Stencil" rel="stylesheet"/>
        <div className="App-header">
          {/* Username Display */}
          <text className="Name-text">  
            Joe Dallacqua
          </text>
        </div>
        {/* Paws and Stripes Flag icon */}
        <div className="App-intro">
          <div className="Img-container">
            <img src="https://cdn.greatnonprofits.org/images/logos/BlackWhiteLogoSmall1.png" alt="PawsAndStripes logo" className="Logo"/>
          </div>
          {/* Header Text */}
          <div className="Text-container">
            <text className="Header-text">
              Volunteer Information
            </text>
          </div>
          {/* Sum of volunteer hours */}
          <div className="Hours-text-container">
            <text className="Hours-numbers">
              415
            </text>
            <text className="Hours-text">
              current total hours
            </text>
          </div>
          {/* Total number of volunteers */}
          <div className="Volunteer-text-container">
            <text className="Volunteer-numbers">
              15
            </text>
            <text className="Volunteer-text">
              current total volunteers
            </text>
          </div>
        </div>
        {/* Search criteria */}
        <div className="Content">
          <div className="Search-criteria">
            <form>
              <div style={{float: "left", marginRight: "15px"}}>
                <label className="Labels">
                  search filter
                </label>
                <br />
                <input type="text" name="filter" className="Input-box-search"/>
              </div>
              <div style={{float: "left", marginRight: "15px"}}>
                <label className="Labels">
                  start date
                </label>
                <br />
                <input type="date" name="start-date" className="Input-box-date"/>
              </div>
              <div style={{float: "left", marginRight: "15px"}}>
                <label className="Labels">
                  end date
                </label>
                <br />
                <input type="date" name="end-date" className="Input-box-date"/>
              </div>
            </form>
          </div>
          <div className="Results-table">
            {/* Instance of Results class to display search results */}
            <Results />            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
