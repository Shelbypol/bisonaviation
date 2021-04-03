import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import {login} from '../../actions/userActions'
import FormContainer from "../../components/FormContainer";


const LoginScreen = ({location, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        //prevent page refresh
        e.preventDefault();
        //    DISPATCH LOGIN
        dispatch(login(email, password))
    };

    return (
        <>
            <Row className='my-5 mx-1 text-dark border rounded global_light-grey-bg'>
                <Col xs={12}>
                    <FormContainer className='my-5'>
                        <h1 className='global_blood-red'>Sign in</h1>
                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader/>}
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type='email'
                                              placeholder='Enter email'
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='Password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='Password'
                                              placeholder='Enter Password'
                                              value={password}
                                              onChange={(e) => setPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary' className='global_blood-red-bg'>Sign In</Button>
                        </Form>
                        <Row className='py-3'>
                            <Col>
                                New Customer? <Link
                                to={redirect ? `/register?redirect=${redirect}` : '/register'}><span className='global_blue'>Register</span></Link>
                            </Col>
                        </Row>

                    </FormContainer>
                </Col>
            </Row>
        </>
    )
};

export default LoginScreen