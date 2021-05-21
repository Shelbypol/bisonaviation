import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import FormContainer from "../FormContainer";
import {getUserDetails, updateUser} from '../../actions/userActions'
import {USER_UPDATE_RESET} from "../../constants/userConstants";

const UserEditScreen = ({match, history}) => {
    const userId = match.params.id;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;

    const userUpdate = useSelector(state => state.userUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = userUpdate;


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        if (successUpdate) {
            dispatch({type: USER_UPDATE_RESET});
            history.push('/admin/userlist');
        } else {
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name);
                setEmail(user.email);
                setIsAdmin(user.isAdmin);
            }
        }
    }, [user, dispatch, userId, successUpdate, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({_id: userId, name, email, isAdmin}))
    };

    return (
        <>
            <Container className=' bg-transparent text-white  min-vh-100 min-vw-100'>
                <Row className='d-flex justify-content-center mt-5 pt-5'>

                    <Col lg={6} xs={12} className=''>

                        <Row className='pb-5 '>
                            <Col xs={6}>
                                <h4 className='text-white'>Edit {name}'s info</h4>
                            </Col>
                            <Col xs={6} className='d-flex justify-content-end'>
                                <Link to='/admin/userlist'
                                      className='btn global_goldenrodtxtborder-btn rounded py-1 px-2'>
                                    back
                                </Link>
                            </Col>
                        </Row>
                        {/*<FormContainer>*/}

                            {loadingUpdate && <Loader/>}
                            {loadingUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='name'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='name'
                                                      placeholder='Enter name'
                                                      value={name}
                                                      onChange={(e) => setName(e.target.value)}>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='email'>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type='email'
                                                      placeholder='Enter email'
                                                      value={email}
                                                      onChange={(e) => setEmail(e.target.value)}>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='isAdmin'>
                                        <Form.Check type='checkbox'
                                                    label='Is Admin'
                                                    checked={isAdmin}
                                                    onChange={(e) => setIsAdmin(e.target.checked)}>
                                        </Form.Check>
                                    </Form.Group>

                                    <Button type='submit' variant='primary global_blue-bg'>Update</Button>
                                </Form>
                            )}
                        {/*</FormContainer>*/}
                    </Col>
                </Row>
            </Container>
        </>

    )
};

export default UserEditScreen