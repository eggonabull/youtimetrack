import * as scheduleActions from '../actions/schedule';
import { arrayMove } from 'react-sortable-hoc';

export type scheduleItem = {
	duration: number,
	content: string
}

export type scheduleStateType = {
  +items: scheduleItem[]
};

type actionType = {
  +type: string
};

export function scheduleItems(
  state: scheduleItem[] = [
      {"duration": 30, "content": "hello"},
      {"duration": 60, "content": "world"},
      {"duration": 90, "content": "foo"},
      {"duration": 30, "content": "bar"},
  ],
  action: actionType
) {
  console.log("reducers scheduleItems", state, action);
  switch (action.type) {
    case scheduleActions.ADD_SCHEDULE_ITEM:
      state.push({"duration": 15, "content": "asdf"})
      return state;
    case scheduleActions.RESIZE_SCHEDULE_ITEM:
      state[action.id].duration = action.size.height
      return state;
    case scheduleActions.RESORT_SCHEDULE_ITEM:
      return arrayMove(state, action.oldIndex, action.newIndex);
    default:
      return state;
  }
  return state
}

