import React, { Component } from 'react';
import './App.css';
import Results from './Results';
import { MdPerson, MdSchedule, MdSearch } from 'react-icons/lib/md';

import axios from 'axios';

import manualData from './manual-fetch-date.json';
import manualData2 from './manual-fetch-data2.json';

// import 'react-datepicker/dist/react-datepicker.css';

class Data extends Component {

  constructor(props){
    super(props);
    this.state = {
      startDate: new Date().toISOString().substr(0,10), 
      endDate: new Date().toISOString().substr(0,10),
      maxDate: new Date().toISOString().substr(0,10),
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
      userCount2: 0,
      data1: [],
      data2: []
    }
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.activateButton1 = this.activateButton1.bind(this);
    this.activateButton2 = this.activateButton2.bind(this);
    this.toggle = this.toggle.bind(this);
    this.togglePersonTT = this.togglePersonTT.bind(this);
    this.toggleSceduleTT = this.toggleSceduleTT.bind(this);
    this.setTotalHours = this.setTotalHours.bind(this);
    // this.setFetch1 = this.setFetch1.bind(this);
    // this.setFetch2 = this.setFetch2.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  handleStartDateChange(date){
    this.setState({
      startDate: date.target.value
    });
  }

  handleEndDateChange(date){
    if(date.target.value >= this.state.startDate){
      this.setState({
        endDate: date.target.value
      })
    } else {
      alert("End date must be after start date.")
    }
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

  fetchData(){
    console.log("Fetching");
    let data1_f, data2_f;
      axios.get("http://academicstudysolutions.com/pawsstripes/get.php?action=hourswithdate&sdate=" + this.props.startDate + "&edate=" + this.props.endDate)
        .then(function(response) {
          data1_f =  response.data;
        }).catch(function(ex){
          console.log(ex);
        });

      axios.get("http://academicstudysolutions.com/pawsstripes/get.php?action=fullreportwithdate&sdate=" + this.props.startDate + "&edate=" + this.props.endDate)
        .then(function(response){
          data2_f = response.data
        }).catch(function(ex){
          console.log(ex);
        });

      this.setState({
        data1: data1_f,
        data2: data2_f
      });
  }

  // setFetch1(data) {
  //   this.setState({
  //     data1: data
  //   })
  // }
  // setFetch2(data) {
  //   this.setState({
  //     data2: data
  //   })
  // }

  render() {
   let tipString = 'Filter the table by typing in the text boxes below the column headers. The hours columns can filter less than (<10), greater than (>3) or equal to (6).';
   let menuOpen = this.state.isMenuOpen;
   let totalHoursDisplay = this.state.totalHours;
   let userCountDisplay =this.state.userCount;
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
                  query start date
                </label>
                <br />
                <input 
                  type="date" 
                  name="start-date" 
                  className="Input-box-date" 
                  value={this.state.startDate} 
                  onChange={this.handleStartDateChange}
                  min="2010-01-01"
                  max={this.state.maxDate}
                />
                
              </div>
              <div style={{float: "left", marginRight: "15px"}}>
                <label className="Labels">
                  query end date
                </label>
                <br />
                <input 
                  type="date" 
                  name="end-date" 
                  className="Input-box-date" 
                  value={this.state.endDate} 
                  onChange={this.handleEndDateChange}
                  min="2010-01-01"
                  max={this.state.maxDate}
                />
              </div>
              <div style={{float:"left", marginRight: "15px"}}>
                <br />
                <MdSearch
                  style={{
                    border: 'solid', 
                    borderWidth:'1px', 
                    borderRadius: '48px',
                    position:'relative',  
                    textAlign:'right', 
                    marginLeft: '5px',
                    padding: '5px',
                    cursor: 'pointer',
                    backgroundColor: 'black'
                  }}
                  size={36}
                  tabIndex={0}
                  onClick={this.fetchData}
                />
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
              data1={this.state.data1} 
              data2={this.state.data2} 
              displayScreen={this.state.button1Selected}
              setTotalHours={this.setTotalHours}
            />            
          </div>
          <text className='Filter-tip'>
            {tipString}
          </text>
        </div>
      </div>
    );
  }
}

export default Data;
