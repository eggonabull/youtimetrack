// @flow
import type { scheduleStateType } from '../reducers/schedule';

type actionType = {
  +type: string
};

export const ADD_SCHEDULE_ITEM = 'ADD_SCHEDULE_ITEM';
export const RESIZE_SCHEDULE_ITEM = 'RESIZE_SCHEDULE_ITEM';
export const RESORT_SCHEDULE_ITEM = 'RESORT_SCHEDULE_ITEM';

export function addScheduleItem() {
  return {
    type: ADD_SCHEDULE_ITEM
  };
}

export function resizeScheduleItem(id, mouseEvent, {node, size}) {
  return {
    type: RESIZE_SCHEDULE_ITEM,
    id,
    size
  }
}

export function resortScheduleItem({collection, oldIndex, newIndex}, mouseEvent) {
	return {
		type: RESORT_SCHEDULE_ITEM,
		oldIndex: oldIndex,
		newIndex: newIndex
	}
}
