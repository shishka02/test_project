import React, { Component } from 'react';
import Articles from './Articles.js';
import Child from './child.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

class ListOfArticles extends Component {
  constructor(props) {
      super(props);

  }

  render() {
    return <div>
        <Articles/>

    </div>
  }
}

export default ListOfArticles;
