// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../containers/Header.js';


type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <Header />
        <div data-tid="container">
          <h2>New Item</h2>
          <Link to="/">Home</Link><br />
          Youtrack Item Identifier<br />
          <input type="text" /><br />

          Start Time<br />
          <input type="text" /><br />

          Duration<br />
          <input type="text" /><br />

          <input type="submit" name="Add" />
        </div>
      </div>
    );
  }
}
