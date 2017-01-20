import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './stores/store';

import Login from './components/public/login/Login';
import Register from './components/public/register/Register';
import Dashboard from './components/private/dashboard/dashboard';

import App from './App';
import './index.css';
const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Dashboard }></IndexRoute>
        <Route path="/login" component={ Login} ></Route>
        <Route path="/register" component={ Register } ></Route>
        <Route path="/dashboard" component={ Dashboard} ></Route>
      </Route>
    </Router>
  </Provider>
)


ReactDOM.render(
  router,
  document.getElementById('root')
);
