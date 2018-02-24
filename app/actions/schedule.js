// @flow
import type { scheduleStateType } from '../reducers/schedule';

type actionType = {
  +type: string
};

export const SCHEDULE_ITEM_ADD = 'SCHEDULE_ITEM_ADD';
export const SCHEDULE_ITEM_RESIZE = 'SCHEDULE_ITEM_RESIZE';
export const SCHEDULE_ITEM_RESORT = 'SCHEDULE_ITEM_RESORT';

export function addScheduleItem() {
  return {
    type: SCHEDULE_ITEM_ADD
  };
}

export function resizeScheduleItem(id, mouseEvent, {node, size}) {
  return {
    type: SCHEDULE_ITEM_RESIZE,
    id,
    size
  }
}

export function resortScheduleItem({collection, oldIndex, newIndex}, mouseEvent) {
	return {
		type: SCHEDULE_ITEM_RESORT,
		oldIndex: oldIndex,
		newIndex: newIndex
	}
}
