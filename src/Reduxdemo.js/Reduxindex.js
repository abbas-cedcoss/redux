import React from 'react'
import ReduxCounter from './Reduxdemo.js/ReduxCounter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const initialState = { count: 0 }
function reducer(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state
    }
}
const store = createStore(reducer)
// store.dispatch({ type: 'INCREMENT', amount: 5 })
// store.dispatch({ type: 'DECREMENT', amount: 5 })


function Reduxindex() {
    return (
        <Provider store={store}>
            <ReduxCounter />
        </Provider>
    )
}

export default Reduxindex
