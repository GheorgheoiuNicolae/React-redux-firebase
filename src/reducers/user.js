export default function reducer(state={
    isLoggedIn: false
}, action){
    switch(action.type){
        case 'UPDATE_AUTH_STATE': {
            if(action.payload){
                const user = {
                    email: action.payload.email,
                    emailVerified: action.payload.emailVerified,
                    uid: action.payload.uid,
                    displayName: action.payload.displayName,
                    photoURL: action.payload.photoURL,
                    isAnonymous: action.payload.isAnonymous
                }
                return {...state, isLoggedIn: true,  ...user}
            } else {
                return {...state, isLoggedIn: false, user: null}
            }
        }
        case 'LOGIN': {
            return {...state, isLoggedIn: true, user: action.payload}
        }
        case 'LOGOUT': {
            return {...state, isLoggedIn: false, user: null}
        }
        default: {
            return state
        }
    }
}