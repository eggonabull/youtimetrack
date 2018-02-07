import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Schedule from '../components/Schedule';
import * as ScheduleActions from '../actions/schedule';

const mapStateToProps = (state, ownProps) => {
  console.log("container schedule", state, ownProps);
  return {
    scheduleItems: state.scheduleItems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(ScheduleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
