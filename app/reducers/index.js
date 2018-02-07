// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import * as header from './header';
import * as schedule from './schedule';

const rootReducer = combineReducers({
  headerIsOpen: header.headerIsOpen,
  scheduleItems: schedule.scheduleItems,
  router,
});

export default rootReducer;
