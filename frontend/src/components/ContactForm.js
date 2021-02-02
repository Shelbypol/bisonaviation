import React, {useState, Component} from 'react'
import * as emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
// import Layout from '../components/layout'
import {Button, FormFeedback, Form, FormGroup, Label, Input} from 'reactstrap'

init(process.env.REACT_APP_USER_ID)

class ContactForm extends Component {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');

    // const { REACT_APP_TEMPLATE_ID } = process.env

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {name, email, subject, message} = this.state

        let templateParams = {
            from_name: email,
            //The CEOs email address should go here:
            to_name: 'andrewbrought@gmail.com',
            subject: subject,
            message: message,
        }


        emailjs.send(
            'default_service',
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID,
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({[param]: e.target.value})
    }

    render() {
        return (
            <>
                <h1 className="p-heading1">Get in Touch</h1>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formBasicEmail">
                        <Label className="text-muted">Email address</Label>
                        <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'email')}
                            placeholder="Enter email"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                        <Label className="text-muted">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'name')}
                            placeholder="Name"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicSubject">
                        <Label className="text-muted">Subject</Label>
                        <Input
                            type="text"
                            name="subject"
                            className="text-primary"
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this, 'subject')}
                            placeholder="Subject"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicMessage">
                        <Label className="text-muted">Message</Label>
                        <Input
                            type="textarea"
                            name="message"
                            className="text-primary"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}
                        />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </>
        );
    }
}

export default ContactForm;
