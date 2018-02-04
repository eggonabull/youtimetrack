// @flow
import type { headerStateType } from '../reducers/header';

type actionType = {
  +type: string
};

export const TOGGLE_HEADER = 'TOGGLE_HEADER';

export function toggleHeader() {
  return {
    type: TOGGLE_HEADER
  };
}
