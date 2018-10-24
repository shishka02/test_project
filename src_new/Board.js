import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './square';
import Knight from './Knight';
import { DropTarget } from 'react-dnd';

function collect(connect,monitor){
  return{
    connectDropTarget:connect.dropTarget(),
    hovered:monitor.isOver(),
    item:monitor.getItem(),
  }

}

 class Board extends Component {

  render() {
    const {connectDropTarget,hovered,item}=this.props;
    const backgroundColor=hovered?'lightgreen':'white';
    return connectDropTarget(
      <div className="target" style={{background:backgroundColor}}>
      Target
      </div>
    )

    // return (
    //   <div className="target">
    //       Target
    //     </div>
    // );
  }
}

export default DropTarget('item', {}, collect)(Board);
