import * as settingsActions from '../actions/settings';

export type settingsStateType = {
  serverDomain: string,
  defaultProject: string,
  username: string,
  password: string
};

type actionType = {
  +type: string
};

export function settingsItems(
  state: settingsStateType = {
    serverDomain: "",
    defaultProject: "",
    username: "",
    password: ""
  },
  action: actionType
) {
  console.log("settingsItems", state, action);
  switch (action.type) {
    case settingsActions.SETTINGS_SET_SERVER_DOMAIN:
      state.serverDomain = action.value;
      break;
    case settingsActions.SETTINGS_SET_DEFAULT_PROJECT:
      state.defaultProject = action.value;
      break;
    case settingsActions.SETTINGS_SET_USERNAME:
      state.username = action.value;
      break;
    case settingsActions.SETTINGS_SET_PASSWORD:
      state.password = action.value;
      break;
    case settingsActions.SETTINGS_TEST_CREDENTIALS:
      console.log(state);
      break;
    default:
      return state;
  }
  return state
}

