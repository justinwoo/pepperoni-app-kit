/* @flow */
import {connect} from 'react-redux';
import AppView from './AppView';

export default connect(
  (state: Object) => ({
    isReady: state.getIn(['session', 'isReady']),
    isLoggedIn: state.getIn(['auth', 'isLoggedIn'])
  })
)(AppView);
