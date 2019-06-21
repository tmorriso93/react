import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';
import WebPage from './WebPage';

class App extends Component {
  render() {
  return (
    <div className="App">
        <div className="App-Component">
          <div className="App-Component">
          <header>
          <WebPage primary={true} />
          </header>
          <br/> <br/>
          <AutoCompleteText items={countries} />
          <p className="text01"> Start typing out a Country name and the text box will recommend Countries based on what you enter.</p>
          <br />
          <p>on first click if no recommendations appear "Double Click" the text box again before typing.</p>
          </div>
        </div>
    </div>
  );
}
}

export default App;
