import React, { Component } from 'react';
import * as action from '../../../actions/counter';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    store: store.counter
  }
})
export default class Counter extends Component {  
  componentWillMount(){
  }
  decrement(){
    this.props.dispatch(action.decrement(this.props.store.currentCount - 1));
  }
  increment(){
    this.props.dispatch(action.increment(this.props.store.currentCount + 1));
  }

  render () {
    const { store } = this.props;
    return (
      <div className='dashboard'>
        <h3> { store.currentCount } </h3>
        <button onClick={ this.decrement.bind(this) }>-</button>
        <button onClick={ this.increment.bind(this) }>+</button>
      </div>
    )
  }
}