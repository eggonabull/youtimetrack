// @flow
import type { headerStateType } from '../reducers/header';

type actionType = {
  +type: string
};

export const SETTINGS_SET_SERVER_DOMAIN = 'SETTINGS_SET_SERVER_DOMAIN';
export const SETTINGS_SET_DEFAULT_PROJECT = 'SETTINGS_SET_DEFAULT_PROJECT';
export const SETTINGS_SET_USERNAME = 'SETTINGS_SET_USERNAME';
export const SETTINGS_SET_PASSWORD = 'SETTINGS_SET_PASSWORD';
export const SETTINGS_TEST_CREDENTIALS = 'SETTIGNS_TEST_CREDENTIALS';


export function settingsSetDomain(e) {
  console.log("settingsSetDomain", e.target.value, e);
  return {
    type: SETTINGS_SET_SERVER_DOMAIN,
    value: e.target.value
  };
}

export function settingsSetUser(e) {
  console.log(e);
  return {
    type: SETTINGS_SET_USERNAME,
    value: e.target.value
  }
}

export function settingsSetDefaultProject(e) {
  console.log(e);
  return {
    type: SETTINGS_SET_DEFAULT_PROJECT,
    value: e.target.value
  }
}

export function settingsSetPassword(e) {
  console.log(e);
  return {
    type: SETTINGS_SET_PASSWORD,
    value: e.target.value
  }
}

export function settingsTestCredentials(e) {
  console.log(e);
  return {
    type: SETTINGS_TEST_CREDENTIALS,
    value: e.target.value
  }
}
