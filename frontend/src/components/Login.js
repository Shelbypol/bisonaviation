import React, { useState ,useEffect } from 'react'
import { Link} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
// deals with our redux state
import { useDispatch, useSelector } from 'react-redux'
import Message from "./Message";
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from "../components/FormContainer";

// whenever you bring something in from the state it's useSelector
// if you want to call an action it's useDispatch

const Login = ({ history,  showSidebar}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;

    // const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        // if(userInfo){
        //     history.push(redirect)
        // }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        //prevent page refresh
        e.preventDefault();
        //    DISPATCH LOGIN
        dispatch(login(email, password))
    };

    return (

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
                <Button type='submit' variant='primary' onClick={showSidebar}>Sign In</Button>
            </Form>

    )
};

export default Login