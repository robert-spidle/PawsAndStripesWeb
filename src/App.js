import React, { Component } from 'react';
import './App.css';
import Results from './Results';
import { MdPerson, MdSchedule } from 'react-icons/lib/md'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchParams: "Search", 
      startDate: new Date().toISOString().substr(0,10), 
      endDate: new Date().toISOString().substr(0,10),
      button1Color: '#9c8158',
      button2Color: '#000',
      button1Selected: true,
      button2Selected: false,
    }
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.activateButton1 = this.activateButton1.bind(this);
    this.activateButton2 = this.activateButton2.bind(this);
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

  activateButton1(e){
    if(this.state.button1Color==='#000' && !this.state.button1Selected){
      this.setState({
        button1Color: '#9c8158',
        button1Selected: true,
        button2Color: '#000',
        button2Selected: false
      })
    }
  }

  activateButton2(e){
    if(this.state.button2Color==='#000' && !this.state.button2Selected){
      this.setState({
        button1Color: '#000',
        button1Selected: false,
        button2Color: '#9c8158',
        button2Selected: true
      })
    }
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
          <div className="Aggregate-container">
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
            <div className='Button-container'>
                <MdPerson 
                  style={{
                    border: 'solid', 
                    borderWidth:'1px', 
                    borderRadius: '48px',
                    backgroundColor: this.state.button1Color, 
                    position:'relative',  
                    textAlign:'right', 
                    marginLeft: '5px',
                    padding: '5px',
                    cursor: 'pointer'
                  }}
                  size={36}
                  tabIndex={0}
                  onClick={this.activateButton1}
                />
              <MdSchedule 
                style={{
                  border: 'solid', 
                  borderWidth:'1px',
                  borderRadius: '48px', 
                  backgroundColor: this.state.button2Color, 
                  position:'relative',  
                  textAlign:'right', 
                  marginLeft: '5px',
                  padding: '5px',
                  cursor: 'pointer',
                }}
                size={36}
                tabIndex={0}
                onClick={this.activateButton2}
              />
            </div>
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
