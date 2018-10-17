import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Users from '../User/index.js';
import {connect} from 'react-redux';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

class Articles extends Component {
  constructor(props) {
      super(props);
      this.state = {

      firstArticle:{
          user:'Daniel',
          Article:'Daniels text',
          text:<div>daniels text</div>
        },
    secondArticle:{
          user:'Batman',
          Article:'Batmans text',
          text:<div>Batmans text</div>
        },
        thirdArticle:{
          user:'Daniel',
          Article:'Daniels second text',
          text:<div>Daniels second lorem ipsum</div>
        },
       }

  }
  componentWillMount(){
    this.props.onAddLis(this.state);
  }


  arr_of_Articles=()=>{
    if (this.props.testStore.Articles[0]!==undefined){

    let buff_arr=[];
      let state_arr=Object.values(this.props.testStore.Articles[0])

      state_arr.forEach(function(item){

        if(item.Article.includes(this.props.testStore.filterArticles)){
        buff_arr.push(item.Article);
      }
    },this);
      return buff_arr
  }
}







  render() {
  var linksFromArticle='';
      if (this.props.testStore.Articles[0]!==undefined){


   linksFromArticle=this.arr_of_Articles().map((names)=>  <div key={names}> <Link to={"/b/"+names}><h3>{names.toString()}</h3></Link></div>);

}
    return (
      <div>{linksFromArticle}

    </div>
  );


  }
}
//export default Articles;
export default withRouter(connect(
  state=>({
    testStore:state,

  }),
  dispatch=>({
    onAddLis:(name)=>{
      dispatch({type: 'ADD_TRACK', payload:name})
    }
  })
)(Articles));
