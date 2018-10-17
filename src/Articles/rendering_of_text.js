import React, { Component } from 'react';
import {connect} from 'react-redux';



class RenderingOfText extends Component {
  constructor(props) {
      super(props);

    }

    renderingoftext=()=>{

        if (this.props.testStore.Articles[0]!==undefined){
    let text_buff;
    let buff=Object.values(this.props.testStore.Articles[0]);
    buff.forEach(function(item){
    if (item.Article===this.props.match.params.id){

      text_buff=item.text;
    }

  },this);

    return text_buff
    }
    }

    render() {
      return (
        <div>
    {this.renderingoftext()}
      </div>
      );
    }

  }


    export default connect(
          state=>({
            testStore:state
          }),
          dispatch=>({})
        )(RenderingOfText);
