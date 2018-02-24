// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../containers/Header.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

type Props = {
  settingsSetDomain: (Event) => void,
  settingsSetUser: (Event) => void,
  settingsSetDefaultProject: (Event) => void,
  settingsSetPassword: (Event) => void,
  settingsTestCredentials: (Event) => void,
  settingsItems: {
    serverDomain: string,
    defaultProject: string,
    username: string,
    password: string
  }
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    let settingsItems = this.props.settingsItems;
    return (
      <div>
        <Header />
        <div data-tid="container">
          <h2>Settings</h2>
          <Form>
            <FormGroup>
              <Label for="domainInput">Domain:</Label>
              <Input
                type="text"
                placeholder="youtrack domain"
                name="domainInput"
                defaultValue={settingsItems.serverDomain}
                onChange={this.props.settingsSetDomain} />
            </FormGroup>
            <FormGroup>
              <Label for="projectInput">Default Project:</Label>
              <Input
                type="text"
                placeholder="MYCOSW"
                name="projectInput"
                defaultValue={settingsItems.defaultProject}
                onChange={this.props.settingsSetDefaultProject} />
            </FormGroup>
            <FormGroup>
              <Label for="domainInput">Username:</Label>
              <Input
                type="text"
                placeholder="Username"
                name="domainInput"
                defaultValue={settingsItems.username}
                onChange={this.props.settingsSetUser} />
            </FormGroup>
            <FormGroup>
              <Label for="domainInput">Password:</Label>
              <Input
                type="password"
                placeholder="Password"
                name="domainInput"
                defaultValue={settingsItems.password}
                onChange={this.props.settingsSetPassword} />
            </FormGroup>
            <Button onClick={this.props.settingsTestCredentials} color="primary">
              Test Credentials
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
