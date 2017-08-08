import React, { Component } from 'react';
import './App.css';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Stardos+Stencil" rel="stylesheet"/>
        <div className="App-header">
          <text className="Name-text">
            Joe Dallacqua
          </text>
        </div>
        <div className="App-intro">
          <div className="Img-container">
            <img src="https://cdn.greatnonprofits.org/images/logos/BlackWhiteLogoSmall1.png" alt="PawsAndStripes logo" className="Logo"/>
          </div>
          <div className="Text-container">
            <text className="Header-text">
              Volunteer Information
            </text>
          </div>
          <div className="Hours-text-container">
            <text className="Hours-numbers">
              415
            </text>
            <text className="Hours-text">
              current total hours
            </text>
          </div>
          <div className="Volunteer-text-container">
            <text className="Volunteer-numbers">
              15
            </text>
            <text className="Volunteer-text">
              current total volunteers
            </text>
          </div>
        </div>
        <div className="Content">
          <div className="Search-criteria">
            <form>
              <div style={{float: "left", marginRight: "15px"}}>
                <label className="Labels">
                  search filter
                </label>
                <br />
                <input type="text" name="filter" />
              </div>
              <div style={{float: "left", marginRight: "15px"}}>
                <label>
                  start date
                </label>
                <br />
                <input type="date" name="start-date" />
              </div>
              <div style={{float: "left", marginRight: "15px"}}>
                <label className="Labels">
                  end date
                </label>
                <br />
                <input type="date" name="end-date" />
              </div>
            </form>
          </div>
          <div>
            <Results />            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
