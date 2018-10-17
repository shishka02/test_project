import React, { Component } from 'react';
import Articles from './Articles.js';
import Child from './child.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class ListOfArticles extends Component {
  constructor(props) {
      super(props);

  }



  render() {
    return <div>

  

      <Route path="/" component={Articles} />
    <Route path="/b/:id" component={Child} />


    </div>
  }
}

export default ListOfArticles;