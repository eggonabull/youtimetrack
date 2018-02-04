// @flow
import type { scheduleStateType } from '../reducers/schedule';

type actionType = {
  +type: string
};

export const ADD_SCHEDULE_ITEM = 'ADD_SCHEDULE_ITEM';

export function addScheduleItem() {
  return {
    type: ADD_SCHEDULE_ITEM
  };
}
