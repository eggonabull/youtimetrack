import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Schedule from '../components/Schedule';
import * as ScheduleActions from '../actions/schedule';

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.headerIsOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(ScheduleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
