import React, { Component } from 'react';
import Header from './Header/index.js';
import ListOfArticles from './Articles/index.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';

class App extends Component {

  render() {

    return (
      <div>
      
    <div className="header"><Header/></div>
    <div className="ListOfArticles"><ListOfArticles/></div>
    </div>
    );
  }
}

export default App;
