// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import {
  Button,
  Collapse,
  Dropdown,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { remote } from 'electron';
import { connect } from 'react-redux';
import HeaderButton from './HeaderButton.js'

type Props = {
  toggleHeader: () => void,
  isOpen: boolean
};

export default class Header extends Component<Props> {
  props: Props;

  exit() {
    let window = remote.getCurrentWindow();
    window.close();
  }

  render() {
    const { toggleHeader, isOpen } = this.props;
    return (
      <div className={styles.headerBar}>
        <Navbar className="navbar-dark bg-dark">
            <NavbarBrand href="#">YouTimeTrack</NavbarBrand>
            <div className={`${styles.noDrag}`}>
              {this.props.children}
              <HeaderButton onClick={toggleHeader}>
                <FontAwesome name="bars" />
              </HeaderButton>
              <HeaderButton onClick={this.exit}>
                <FontAwesome name="times" />
              </HeaderButton>
            </div>
            <Collapse className={`${styles.noDrag}`} navbar isOpen={isOpen}>
                  <Nav navbar>
                    <NavItem><NavLink href="#/">Timesheet</NavLink></NavItem>
                    <NavItem><NavLink href="#/new-item">New Item</NavLink></NavItem>
                    <NavItem><NavLink href="#/settings">Settings</NavLink></NavItem>
                  </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}

