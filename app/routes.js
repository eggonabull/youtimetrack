/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import NewItemPage from './containers/NewItemPage';

export default () => (
  <App>
    <Switch>
      <Route path="/new-item" component={NewItemPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
