import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Square from "./square";
import Knight from "./Knight";
import Board from "./Board";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "first item" },
      { id: 2, name: "second item" },
      { id: 3, name: "third item" },
      { id: 4, name: "fourth Item" }
    ]
  };

  deleteItem = id => {
    console.log("deleting " + id);
    this.setState(prevState => {
      let items = prevState.items;
      const index = items.findIndex(item => item.id === id);
      items.splice(index, 1);
      return { items };
    });
  };

  render() {
    return (
      <div className="trashCan">
        <div className="items">
          {
            this.state.items.map((item,index)=>(
            <Knight key={item.id} item={item} handleDrop={(id)=>
            this.deleteItem(id)}/>
              ))
          }
        </div>
        <div>
          {
             <Board/>
          }
        </div>
        <div className="card-container">
      {/* {  this.state.items.map((item,i)=>(
          <card
          key={item.id}
          index={i}
          id={item.id}
          text={item.name}
          moveCard={this.moveCard}
          />
        ))} */}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
