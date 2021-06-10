import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../actions/userActions'


const SignInForm = ({history, showSidebar, loginTitle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;


    useEffect(() => {
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    };

    return (
        <>
            {error && (
                <>
                    <div className='text-center border-bottom mb-2 mt-n4'>
                        <h6 className='global_goldenrod'>ERROR</h6>
                        <h6 className='global_white'>username and password do not match</h6>
                    </div>
                </>
            )}
            <Form onSubmit={submitHandler} className='mx-2'>
                <h4>
                    <i className="fas fa-user-alt global_goldenrod d-inline"> </i>
                    <h4 className='global_white d-inline'>&nbsp;{loginTitle}</h4>
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
                        type='submit' variant='primary'
                        onClick={showSidebar}><i className="far fa-lock"> </i>&nbsp;Sign In</Button>
            </Form>

        </>

    )
};

export default SignInForm