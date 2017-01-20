import { firebaseAuth } from '../config/constants';
import { browserHistory } from 'react-router';

export function login(user, pass){
    return dispatch => {
        firebaseAuth().signInWithEmailAndPassword(user, pass).then(function(res){
            browserHistory.push('/dashboard')
           dispatch( {
                type: "LOGIN",
                payload: res
           })
        });
    };
}

export function logout(data){
    return dispatch => {
        firebaseAuth().signOut().then((res) => {
            browserHistory.push('/login')
            dispatch({
                type: "LOGOUT",
                payload: res
            });
        });
    };
}

// runs on firebaseAuth.onAuthStateChange
export function checkAuthState(data){
    if (data) {
        browserHistory.push('/dashboard')
    } else {
        browserHistory.push('/login')
    }
    return {
        type: 'UPDATE_AUTH_STATE',
        payload: data
    }
}


