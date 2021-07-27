import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import FormContainer from "../FormContainer";
import {register} from '../../actions/userActions'
import './registerScreen.css'

import {Jumbotron} from "reactstrap";
import {LinkContainer} from "react-router-bootstrap";

const RegisterScreen = ({location, history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const {loading, error, userInfo} = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        //prevent page refresh
        e.preventDefault();

        //    DISPATCH REGISTER

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }

    };
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <Container className='w-100'>
                <Row className='mt-5'>

                    <Col xs={12} md={6} className='mt-3 text-center d-flex justify-content-center align-items-center'>
                        <Row>
                            <Col xs={12} className='text-white d-none d-md-block'>
                                <h3 className='global_blue'>BISON AVIATION WELCOMES YOU!</h3>
                            </Col>

                            <Col md={12} className='text-white d-none d-md-block'>
                                <p>Bison Aviation is an FAA certificated Part 145 Repair Station serving the general
                                    aviation community. Founded by an avid general aviation pilot and fellow aircraft
                                    owner, we hold ourselves to the highest standards of quality and safety so that we
                                    can deliver the very highest quality of service to our customers. We pride ourselves
                                    in going the extra mile to ensure that the goods and services we deliver are the
                                    best fit for our customer's aircraft and their specific mission profile. We know
                                    that our customers rely on us to provide them with an honest and frank assessment of
                                    the condition of their aircraft, and we are honored to accept that charge.</p>
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={11} md={5} className='mx-3 mb-3 pb-3 text-dark global_light-grey-bg'>

                        {message && <Message variant='danger'>{message}</Message>}

                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader/>}
                        <Form onSubmit={submitHandler}>
                            <h1 className='global_goldenrod'>Register</h1>
                            <Form.Group controlId='name'>
                                <Form.Label className='global_goldenrod'>Name</Form.Label>
                                <Form.Control type='name'
                                              placeholder='Enter name'
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label className='global_goldenrod'>Email Address</Form.Label>
                                <Form.Control type='email'
                                              placeholder='Enter email'
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='Password'>
                                <Form.Label className='global_goldenrod'>Password</Form.Label>
                                <Form.Control type='password'
                                              placeholder='Enter Password'
                                              value={password}
                                              onChange={(e) => setPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='confirmPassword'>
                                <Form.Label className='global_goldenrod'>Confirm Password</Form.Label>
                                <Form.Control type='password'
                                              placeholder='Confirm Password'
                                              value={confirmPassword}
                                              onChange={(e) => setConfirmPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Button className='global_blood-red-bg' type='submit' variant='primary'>Register</Button>
                        </Form>
                        <Row className='my-3'>
                            <Col xs={12}>
                                <span className='global_cursor Register_hover-terms'>
                                Have an account?
                                    <Link
                                        to={redirect ? `/login?redirect=${redirect}` : '/login'}><span
                                        className='global_blood-red Register_hover-terms'>&nbsp; Login</span>
                                    </Link>
                                    </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <LinkContainer to='/terms'>
                            <span className='global_blue global_cursor Register_hover-terms'>
                              general terms & conditions
                            </span>
                                </LinkContainer>
                                <br/>
                                <LinkContainer to='/flir-terms'>
                            <span className='global_blue global_cursor Register_hover-terms'>
                              flir terms & conditions
                            </span>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Col>

                    <Row>

                        <Col md={12} className='text-white d-sm-block d-md-none text-center'>
                            <p>Bison Aviation is an FAA certificated Part 145 Repair Station serving the general
                                aviation community. Founded by an avid general aviation pilot and fellow aircraft
                                owner, we hold ourselves to the highest standards of quality and safety so that we
                                can deliver the very highest quality of service to our customers. We pride ourselves
                                in going the extra mile to ensure that the goods and services we deliver are the
                                best fit for our customer's aircraft and their specific mission profile. We know
                                that our customers rely on us to provide them with an honest and frank assessment of
                                the condition of their aircraft, and we are honored to accept that charge.</p>
                        </Col>
                    </Row>

                </Row>
            </Container>
        </>
    )
};

export default RegisterScreen