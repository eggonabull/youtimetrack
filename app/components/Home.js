// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Header from '../containers/Header.js';
import HeaderButton from './HeaderButton.js';
import Schedule from '../containers/Schedule.js';
import FontAwesome from 'react-fontawesome';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <Header>
          <HeaderButton onClick={(e) => e.preventDefault()}>
            <Link to="/new-item"><FontAwesome name="plus-square" /></Link>
          </HeaderButton>
        </Header>
        <Schedule />
        <div className={styles.container} data-tid="container">
          
        </div>
      </div>
    );
  }
}
