import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import user from './user';


const rootReducer = combineReducers( {counter, user, routing: routerReducer} );

export default rootReducer;