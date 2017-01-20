// increment counter
export function increment(newVal){
    return {
        type: "INCREMENT_COUNTER",
        payload: {
            currentCount: newVal
        }
    }
}
// decrement counter
export function decrement(newVal){
    return {
        type: "DECREMENT_COUNTER",
        payload: {
            currentCount: newVal
        }
    }
}