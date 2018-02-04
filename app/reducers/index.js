// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import * as header from './header';

const rootReducer = combineReducers({
  headerIsOpen: header.headerIsOpen,
  router,
});

export default rootReducer;
