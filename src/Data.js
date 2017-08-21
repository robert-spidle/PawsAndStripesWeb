import React, { Component } from 'react';
import './App.css';
import Results from './Results';
import { MdPerson, MdSchedule } from 'react-icons/lib/md';

class Data extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchParams: "", 
      startDate: new Date().toISOString().substr(0,10), 
      endDate: new Date().toISOString().substr(0,10),
      button1Color: '#9c8158',
      button2Color: '#000',
      button1Selected: true,
      button2Selected: false,
      isMenuOpen: false,
      showPersonTT: false,
      showScheduleTT: false,
      totalHours: 0,
      userCount: 0,
      totalHours2: 0,
      userCount2: 0
    }
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.activateButton1 = this.activateButton1.bind(this);
    this.activateButton2 = this.activateButton2.bind(this);
    this.toggle = this.toggle.bind(this);
    this.togglePersonTT = this.togglePersonTT.bind(this);
    this.toggleSceduleTT = this.toggleSceduleTT.bind(this);
    this.setTotalHours = this.setTotalHours.bind(this);
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

  toggle() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  togglePersonTT() {
    this.setState({
      showPersonTT: !this.state.showPersonTT
    })
  }

  toggleSceduleTT() {
    this.setState({
      showScheduleTT: !this.state.showScheduleTT
    })
  }

  setTotalHours(hoursSum, userCount, hoursSum2, userCount2){
    this.setState({
      totalHours: hoursSum,
      userCount: userCount,
      totalHours2: hoursSum2,
      userCount2: userCount2
    })
  }

  render() {
   let menuOpen = this.state.isMenuOpen;
   let totalHoursDisplay = this.state.button1Selected ? this.state.totalHours : this.state.totalHours2;
   let userCountDisplay = this.state.button1Selected ? this.state.userCount : this.state.userCount2;
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Stardos+Stencil" rel="stylesheet"/>
        <div className="App-header">
          {/* Username Display */}

          {menuOpen ? (
            <div className="Logout-menu-open" onClick={this.toggle} onKeyPress={this.toggle} onMouseLeave={this.toggle} tabIndex={0}>
              <text className='Name-text' onClick={this.toggle} onKeyPress={this.toggle}  tabIndex={0}>
                {this.props.userName}
              </text>
              <text onClick={this.props.logout} onKeyPress={this.props.logout} tabIndex={0} className='Name-text'>
                Logout
              </text>
            </div> 
            ) : (
            <div className='Logout-menu-closed'>
              <text onClick={this.toggle} onKeyPress={this.toggle} onMouseEnter={this.toggle} className='Name-text' tabIndex={0}>
                {this.props.userName}
              </text>
            </div>
          )} 
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
                {totalHoursDisplay}
              </text>
              <text className="Hours-text">
                current total hours
              </text>
            </div>
            {/* Total number of volunteers */}
            <div className="Volunteer-text-container">
              <text className="Volunteer-numbers">
                {userCountDisplay}
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
              {this.state.showPersonTT ? (
                <div> 
                  <text>Hours by Volunteer </text> 
                </div>
               ) : (
                 this.state.showScheduleTT ? (
                   <div>
                     <text> Hours by Day </text>
                    </div>
                 ): null )}
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
                  onMouseEnter={this.togglePersonTT}
                  onMouseLeave={this.togglePersonTT}
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
                onMouseEnter={this.toggleSceduleTT}
                onMouseLeave={this.toggleSceduleTT}
              />
            </div>
          </div>
          <div className='Results-table'>
            {/* Instance of Results class to display search results */}
            <Results 
              searchParams={this.state.searchParams} 
              startDate={this.state.startDate} 
              endDate={this.state.endDate} 
              displayScreen={this.state.button1Selected}
              filterString={this.state.searchParams}
              setTotalHours={this.setTotalHours}
            />            
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
