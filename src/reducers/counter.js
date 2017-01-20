export default function reducer(state={
    currentCount: 10
}, action){
    switch(action.type){
        case 'INCREMENT_COUNTER': {
            return {...state, currentCount: action.payload.currentCount}
        }
        case 'DECREMENT_COUNTER': {
            return {...state, currentCount: action.payload.currentCount}
        }
        default: {
            return {...state}
        }
    }
}