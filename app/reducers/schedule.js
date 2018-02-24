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
  switch (action.type) {
    case scheduleActions.SCHEDULE_ITEM_ADD:
      state.push({"duration": 15, "content": "asdf"})
      return state;
    case scheduleActions.SCHEDULE_ITEM_RESIZE:
      state[action.id].duration = action.size.height
      return state;
    case scheduleActions.SCHEDULE_ITEM_RESORT:
      return arrayMove(state, action.oldIndex, action.newIndex);
    default:
      return state;
  }
  return state
}

