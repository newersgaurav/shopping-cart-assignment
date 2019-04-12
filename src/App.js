import React, { Component } from 'react';
import './App.css';
import Header from "./component/header/header";
import Listing from './component/listing/listing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Listing/>
      </div>
    );
  }
}

export default App;
