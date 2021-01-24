import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Table} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// deals with our redux state
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import {getOrderDetails, listMyOrders} from "../actions/orderActions";
import { listMyWishLists, getWishListDetails } from "../actions/wishListActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

// whenever you bring something in from the state it's useSelector
// if you want to call an action it's useDispatch

const ProfileScreen = ({location, history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    // const orderListMy = useSelector(state => state.orderListMy);
    // const {loading: loadingOrders, error: errorOrders, orders} = orderListMy;

    const wishListDetails = useSelector((state) => state.wishListDetails);
    const {wishDetails, success: wishDetailsSuccess} = wishListDetails;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name || !user || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(getUserDetails('profile'));
                // dispatch(listMyOrders())
                dispatch(listMyWishLists())
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [dispatch, history, userInfo, user, success, wishList]);


    const submitHandler = (e) => {
        //prevent page refresh
        e.preventDefault();
        //    DISPATCH REGISTER
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            //   DISPATCH UPDATE PROFILE
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }

    };


    return (

        <Row className='py-3'>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {success && <Message variant='success'>Profile updated</Message>}
                {loading && <Loader/>}
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

                    <Form.Group controlId='Password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password'
                                      placeholder='Enter Password'
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password'
                                      placeholder='Confirm Password'
                                      value={confirmPassword}
                                      onChange={(e) => setConfirmPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>Update</Button>
                </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
                { loadingOrders
                    ? <Loader />
                    : errorOrders
                        ? <Message variant='danger'>{errorOrders}</Message>
                        : (
                            <Table striped bordered hover responsive className='table-sm' >
                                <thead>
                                <tr>
                                    {/*<th>ID</th>*/}
                                    <th>IMAGE</th>
                                    <th>NAME </th>
                                    <th>PRICE</th>
                                    <th>QTY</th>
                                    <th>EMAILED</th>
                                </tr>
                                </thead>
                                <tbody>
                                {wishList.map(wishes => (
                                    wishes.wishListItems.map(wish => (
                                    <tr key={wish._id}>
                                        {/*<td>{wish._id}</td>*/}
                                        <td><img src={wish.image} alt={wish.name} className='h-25 w-25 rounded'/></td>
                                        <td>{wish.name}</td>
                                        <td>{wish.price}</td>
                                        <td>{wish.qty}</td>
                                        <td>{wish.isEmailed ? (
                                            <i className='fas fa-check' style={{color: 'green'}}> </i>
                                        ):(
                                            <i className='fas fa-times' style={{color: 'red'}}> </i>
                                        )}</td>

                                    </tr>
                                    ))
                                ))}

                                </tbody>
                            </Table>

                        ) }
            </Col>
        </Row>

    )
};

export default ProfileScreen