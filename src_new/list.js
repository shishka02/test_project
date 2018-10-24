import React, { Component } from 'react';

import {
	DragSource,
	DropTarget,
	ConnectDropTarget,
	ConnectDragSource,
	DropTargetMonitor,
	DropTargetConnector,
	DragSourceConnector,
	DragSourceMonitor,
} from 'react-dnd'

import { XYCoord } from 'dnd-core'





const itemSource={
    beginDrag(props){
      return props.item;
    },
    endDrag(props,monitor,component){
     
      return props.handleDrop(props.item.id);
    }
  }
  
  function collect(connect, monitor){
    return{
      connectDragSource:connect.dragSource(),
      connectDragPreview:connect.dragPreview(),
      isDragging:monitor.isDragging(),
    }
  }

class List extends Component {
    render() {
      const{isDragging, connectDragSource, item}=this.props;
  
      return connectDragSource(
        <div className="Knight">
        <span>{item.name}</span>
        </div>
      )
      // return (
      //   <div className="Knight">
      //   {this.props.item.name}
      //   </div>
      // );
    }
  }
  
  export default DragSource('item', itemSource, collect)(List);