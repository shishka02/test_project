import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import React, { Component } from "react";
import "./App.css";
import List from "./list.js";


class App extends Component {
    state = {
      items: [
        { id: 1, name: "first item" },
        { id: 2, name: "second item" },
        { id: 3, name: "third item" },
        { id: 4, name: "fourth Item" }
      ]
    };

sortList=(id)=>{
console.log("hi "+id);
}

    render() {
        return (
            <div>
            {this.state.items.map((item,index)=>(
                <List  item={item} key={item.id} handleDrop={(id)=>
                    this.sortList(id)}/>
            ))}
                </div>
        
        );
    
    }

}




export default DragDropContext(HTML5Backend)(App);