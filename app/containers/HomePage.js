// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import NewItemPage from '../containers/NewItemPage';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
          <div className="page">
            <Home />
          </div>
          <NewItemPage />
      </div>
    );
  }
}