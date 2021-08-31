import { Button, Modal } from 'bootstrap'
import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap'

export class UpdataModel extends Component {
    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Container>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>title</Form.Label>
                                <Form.Control type="text" placeholder="title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="toUSD">
                                <Form.Label>toUSD</Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>description</Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="image_url">
                                <Form.Label>image_url</Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" />
                            </Form.Group>
                        
                        </Form>
                    </Container>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdataModel
