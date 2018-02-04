import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as HeaderActions from '../actions/header';

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.headerIsOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(HeaderActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
