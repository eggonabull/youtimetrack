// @flow
import { TOGGLE_HEADER } from '../actions/header';

export type headerStateType = {
  +isOpen: boolean
};

type actionType = {
  +type: string
};

export function headerIsOpen(state: boolean = false, action: actionType) {
  switch (action.type) {
  	case TOGGLE_HEADER:
  		return !state;
  	default:
  		return state;
  }
}
