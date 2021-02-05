import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ReduxCounter extends Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
        console.log(this.props.count)
    }
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button><br />
                    {this.props.count}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    count: state.count
})
export default connect(mapStateToProps)(ReduxCounter)
/**
 *connect() provieds dispatch() method as props
 */
