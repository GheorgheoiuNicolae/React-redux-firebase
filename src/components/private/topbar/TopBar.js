import React, { Component } from 'react';
import * as action from '../../../actions/user';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    store: store.counter
  }
})
export default class TopBar extends Component {  
  logoutUser(){
      this.props.dispatch(action.logout());
  }
  
  render () {
      console.log(action);
    const { store } = this.props;
    return (
      <div className='TopBar'>
        <span>Topbar</span>
        <button onClick={this.logoutUser.bind(this)}> Logout </button>
      </div>
    )
  }
}