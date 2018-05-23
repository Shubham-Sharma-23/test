import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateRangeSlider from './DateSelectSlider';
import RheoStat from './TryRheoStat';
import TimeCustomization from './TimeCustomization'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div style={{"display": "block", "width": "70%", "padding-left": "15%"}}> 
        <DateRangeSlider />
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div style={{"display": "block", "width": "70%", "padding-left": "15%","padding-top": "30px"}}> 
        {/* <h2>RheoStat</h2>
        <RheoStat max={1440} values={[10, 240]} min={0} />
        <RheoStat max={1440} values={[110, 720]} min={0}/>
        <RheoStat max={1440} values={[410, 1140]} min={0}/> */}

        <TimeCustomization max={1440} values={[10, 240]} min={0} />
        <br/>
        <TimeCustomization max={1440} values={[110, 720]} min={0}/>
        <TimeCustomization max={1440} values={[410, 1140]} min={0}/>
        </div>
      </div>
      
    );
  }
}

export default App;
