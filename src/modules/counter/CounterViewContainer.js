/* @flow */
import {connect} from 'react-redux';
import CounterView from './CounterView';

export default connect(
  (state: Object) => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(CounterView);
