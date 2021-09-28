import { createStore } from 'redux'
const reducer = (state = {
    data: {}
}, action) => {
    switch(action.type) {
        case 'InitState':
            state.data = action.value
            return state
        case 'changeState':
            state.data = action.value
            return state
        default: 
            return state
    }
}
const store = createStore(reducer)
store.subscribe(() =>
    console.log(store.getState())
);

export default store