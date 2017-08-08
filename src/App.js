import React, { Component } from 'react';
import './App.css';
import Results from './Results';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchParams: "Search", 
      startDate: new Date().toISOString().substr(0,10), 
      endDate: new Date().toISOString().substr(0,10),
    }
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleStartDateChange(e){
    this.setState({startDate: e.target.value});
  }

  handleEndDateChange(e){
    if(e.target.value >= this.state.startDate){
      this.setState({endDate: e.target.value});
    }
    else{
      alert("End date must be after start date.");
    }
  }

  handleSearchChange(e){
    this.setState({searchParams: e.target.value});
  }

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
                <input type="text" name="filter" className="Input-box-search" value={this.state.searchParams} onChange={this.handleSearchChange}/>
              </div>
              <div style={{float: "left", marginRight: "15px"}}>
                <label className="Labels">
                  start date
                </label>
                <br />
                <input type="date" name="start-date" className="Input-box-date" value={this.state.startDate} onChange={this.handleStartDateChange}/>
              </div>
              <div style={{float: "left", marginRight: "15px"}}>
                <label className="Labels">
                  end date
                </label>
                <br />
                <input type="date" name="end-date" className="Input-box-date" value={this.state.endDate} onChange={this.handleEndDateChange}/>
              </div>
            </form>
          </div>
          <div className="Results-table">
            {/* Instance of Results class to display search results */}
            <Results searchParams={this.state.searchParams} startDate={this.state.startDate} endDate={this.state.endDate}/>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
