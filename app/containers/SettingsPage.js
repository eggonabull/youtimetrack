import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from '../components/Settings';
import * as SettingsActions from '../actions/settings';

const mapStateToProps = (state, ownProps) => {
  console.log("settingsPage mapStateToProps", mapStateToProps)
  return {
  	settingsItems: state.settingsItems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
