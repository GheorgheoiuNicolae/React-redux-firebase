import React, {Component} from 'react';
import './App.less';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className={`rendered-view`}>
          { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>
    )
  }
}
