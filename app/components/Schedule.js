// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScheduleItem from './ScheduleItem.js';
import * as Styles from './Schedule.css';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

type Props = {};

console.log("ScheduleItem", ScheduleItem)

export default class Schedule extends Component<Props> {
  props: Props;

  constructor(props) {
  	super(props)
  	this.onReorder = this.onReorder.bind(this);
  	this.state = {list: [
  		<li key="1"><ScheduleItem>ass</ScheduleItem></li>,
  		<li key="2"><ScheduleItem>butt</ScheduleItem></li>,
  		<li key="3"><ScheduleItem>fart</ScheduleItem></li>,
  		<li key="4"><ScheduleItem>blob</ScheduleItem></li>
  	]};
  }

  onReorder(event, previousIndex, nextIndex, fromId, toId) {
  	console.log("onReorder", previousIndex, nextIndex, fromId, toId);
  	this.setState({
  		list: reorder(this.state.list, previousIndex, nextIndex)
  	});
  }

  render() {
    return <div className={`schedule ${Styles.schedule}`}>
    	<SortableContainer
    		reorderId="schedule"
    		onReorder={this.onReorder}>
    		{this.state.list.map((item, index) => 
    			<SortableElement key={index}>{item}</SortableElement>
    		)}
	    </SortableContainer>
    </div>;
  }
}
