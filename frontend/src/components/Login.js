import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
// deals with our redux state
import {useDispatch, useSelector} from 'react-redux'
import Message from "./Message";
import Loader from '../components/Loader'
import {login} from '../actions/userActions'
import FormContainer from "../components/FormContainer";

const Login = ({history, showSidebar, loginTitle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;


    useEffect(() => {
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        //    DISPATCH LOGIN
        dispatch(login(email, password))
    };

    return (
            <Form onSubmit={submitHandler} className='mx-2'>
                <h4 className='global_white'><i
                    className="fas fa-user-alt"> </i>&nbsp;{loginTitle}</h4>
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
                <Button className='d-inline py-2 px-3 global_whiteFontRedHoverWhiteBg global_blue-bg rounded' type='submit' variant='primary'
                        onClick={showSidebar}><i className="far fa-lock"> </i>&nbsp;Sign In</Button>


            </Form>

    )
};

export default Login