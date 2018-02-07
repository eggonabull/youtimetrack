// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScheduleItem from './ScheduleItem.js';
import * as Styles from './Schedule.css';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

type Props = {
  resizeScheduleItem: () => void,
  resortScheduleItem: () => void,
  scheduleItems: any
};

const SortableItem = SortableElement(({value}) => 
	<li>{value}</li>
);

const ScheduleContainer = SortableContainer(({items}) => (
	<ul>
		{items.map((value, index) => (
			<SortableItem key={`time-${index}`} index={index} value={value} />
		))}
	</ul>
));

export default class Schedule extends Component<Props> {
  props: Props;

  constructor(props) {
  	super(props)
    this.shouldCancelStart = this.shouldCancelStart.bind(this);
  }

  shouldCancelStart(e) {
    if (['input', 'textarea', 'select', 'option'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
      return true; // Return true to cancel sorting
    }
    if (e.target.className.split(" ").includes("react-resizable-handle")) {
      return true;
    }
  }

  render() {
    console.log("schedule state", this.props);
    let resize = this.props.resizeScheduleItem;
    let scheduleList = this.props.scheduleItems;
    let onSortEnd = this.props.resortScheduleItem;
    console.log("onSortEnd", onSortEnd);
    console.log("scheduleList", scheduleList)
    return <div className={`schedule ${Styles.schedule}`}>
    	<ScheduleContainer
    		reorderId="schedule"
    		onSortEnd={onSortEnd}
    		items={Object.entries(scheduleList).map(([id, {duration, content}]) => {
          return <ScheduleItem
            duration={duration}
            onResize={(...args) => resize(id, ...args)}>
              {content}
          </ScheduleItem>;
        })}
        shouldCancelStart={this.shouldCancelStart}/>
    </div>;
  }
}
