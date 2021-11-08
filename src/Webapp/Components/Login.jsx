import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

export class Login extends Component {
    render() {
        // console.log(this.props.count)
        return <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick={() => {
                    this.props.dispatch({ type: 'change' })
                    // console.log(this.props.count)
                }}>
                    Submit
                </Button>
            </Form>
        </Container>
    }
}

const mapStateToProps = state => ({
    count: state
})
export default connect(mapStateToProps)(Login)
