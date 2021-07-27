import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import {login} from '../../actions/userActions'
import FormContainer from "../FormContainer";


const SignInMobileScreen = ({location, history}) => {
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
            <Row className='my-5 pt-5 mx-3 d-flex justify-content-center min-vh-100'>
                <Col xs={12} md={6}>

                    {error && (
                        <>
                            <div className='text-center mt-3 mb-4
                            '>
                                <h6 className='global_goldenrod'>ERROR</h6>
                                <h6 className='global_white text-lowercase'>username and password do not match</h6>
                            </div>
                        </>
                    )}
                    <Form onSubmit={submitHandler} className='mx-2'  style={{zIndex: '10000'}}>
                        <h4>
                            <i className="fas fa-user-alt global_goldenrod d-inline"> </i>
                            <h4 className='global_white d-inline'>&nbsp;Sign In</h4>
                        </h4>
                        <Form.Group controlId='email'>
                            {/*<Form.Label>Email Address</Form.Label>*/}
                            <Form.Control type='email'
                                          placeholder='Email'
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='Password'>
                            {/*<Form.Label>Password</Form.Label>*/}
                            <Form.Control type='Password'
                                          placeholder='Password'
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Button className='d-inline py-2 px-3 global_goldenrodtxtborder-btn rounded'
                                type='submit' variant='primary'><i className="far fa-lock"> </i>&nbsp;Sign In</Button>
                    </Form>


                        <h6 className='text-muted mx-2 mt-5'>if not a user</h6>
                        <Link to='/Register'>
                            <Button className='py-2 px-3 mx-2 global_blood-red-bg global_cultured rounded'>
                                Register
                            </Button>
                        </Link>
                </Col>
            </Row>
        </>
    )
};

export default SignInMobileScreen