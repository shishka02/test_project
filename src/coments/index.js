import React, { Component } from 'react';
import {connect} from 'react-redux';





class Coments extends Component {

  constructor(props) {
      super(props);
      this.state = {
        text:'',
      }
    }

comentSubmit=(event)=>{
  event.preventDefault();
this.props.onAddCom(this.state.text,this.matching_with_Article());
    this.setState({text: ''})

}

comentChange=(event)=>{
  this.setState({text:event.target.value})

}

matching_with_Article=()=>{
let Article;
let buff=Object.values(this.props.testStore.Articles[0]);
buff.forEach(function(item){
if (item.Article===this.props.match.params.id){
  Article=item.Article

}
},this);
  return Article
}

rendering_of_coments=()=>{
  let text_buff=[];
  let buff=Object.values(this.props.testStore.Coments);
  buff.forEach(function(item){
  if (item.Article===this.props.match.params.id){

    text_buff.push(item.text);
  }
},this);
  return text_buff
}


  render() {
    var coments='';
    if (this.props.testStore.Coments!==undefined){


 coments=this.rendering_of_coments().map((names,index)=>   <li key={index}>{names.toString()}</li>);

}

    return (
      <div>
      <form className="comntform"
       onSubmit={this.comentSubmit}>
  <input
  type="text"
  placeholder="put coment here"
  value={this.state.text}
  onChange={this.comentChange}
  />

  <input className="test" type="submit" value="OK" />

  </form>
  <div>
  {coments}
  </div>
  </div>
    );
  }
}

export default connect(
      state=>({
        testStore:state
      }),
      dispatch=>({
        onAddCom:(text,Article)=>{
          const payload={
          Article,
          text
        }

          dispatch({type: 'ADD_Coment', payload})
        }

      })
    )(Coments);
