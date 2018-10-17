import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
class Users extends Component {
  constructor(props) {
      super(props);
      this.state = {
        Daniel:<div>Daniel is a cool dota player</div>,
        Batman:<div>Batman is a cool detective</div>,
        noName:<div>he is just no name noone likes him</div>
      }
    }


user_info=()=>{
  let state_keys=Object.keys(this.state)
  let state_arr=Object.values(this.props.testStore.Articles[0])
  

  let state=this.state
let buff;

  state_arr.forEach(function(item){

    if (item.Article===this.props.match.params.id){
    state_keys.forEach(function(k_item){
   if (item.user===k_item){
     buff=this.state[item.user];

   }
 },this);
}
},this);
return buff
  }




render() {

        return(
  <div> user info:
{this.user_info()}
  </div>
    );
      }
    }


export default connect(
      state=>({
        testStore:state
      }),
      dispatch=>({})
    )(Users);
