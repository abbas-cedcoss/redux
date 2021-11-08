import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Login from './Login';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = { name: 'admin', password: '' }
function reducer(state = initialState, action) {
    if(action.type === 'change'){
        state = {name:'nfasfsfd','password':'fasfasfa'}
    }
    return state;
}
const store = createStore(reducer)

export class Panel extends Component {
    render() {
        return <Switch>
            <Provider store={store}>
                <Route exact path={'/'} render={() => {
                    return <Redirect to={'/auth/login'} />
                }} />
                <Route path={'/auth/login'} component={Login} />
            </Provider>
        </Switch>
    }
    
}

export default Panel
