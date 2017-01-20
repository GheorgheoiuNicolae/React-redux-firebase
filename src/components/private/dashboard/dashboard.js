import React, { Component } from 'react';

import * as action from '../../../actions/user';
import { connect } from 'react-redux';

import { firebaseAuth } from '../../../config/constants';
import { checkAuthState } from '../../../actions/user';

import TopBar from '../topbar/TopBar';
import Counter from '../counter/counter';

@connect((store) => {
  return {
    store: store.counter
  }
})
export default class Dashboard extends Component {

  componentWillMount(){
    let observer = (user) => {
      this.props.dispatch(checkAuthState(user));
      unsubscribe();
    }
    var unsubscribe = firebaseAuth().onAuthStateChanged(observer);
  }

  render () {
    return (
      <div className='dashboard'>
        <TopBar />
        <h3>dashboard</h3>
        <Counter />
      </div>
    )
  }
}