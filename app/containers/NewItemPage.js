// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import NewItem from '../components/NewItem';

type Props = {};

export default class NewItemPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="page">
        <NewItem />
      </div>
    );
  }
}
