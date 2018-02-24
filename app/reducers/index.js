// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import * as header from './header';
import * as schedule from './schedule';
import * as settings from './settings';

const rootReducer = combineReducers({
  headerIsOpen: header.headerIsOpen,
  scheduleItems: schedule.scheduleItems,
  settingsItems: settings.settingsItems,
  router,
});

export default rootReducer;
