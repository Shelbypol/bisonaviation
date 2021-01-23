import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Table, ListGroup, Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// deals with our redux state
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {getUserDetails, updateUserProfile} from '../actions/userActions'
// import { listMyOrders } from "../actions/orderActions";
import {listMyWishLists, getWishListDetails} from "../actions/wishListActions";
import {USER_UPDATE_PROFILE_RESET} from "../constants/userConstants";
import {Link} from "react-router-dom";
import {getOrderDetails} from "../actions/orderActions";
// import {addWishListItems} from "../../../backend/controllers/wishListController";

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
    const {userInfo} = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {success} = userUpdateProfile;

    // const orderListMy = useSelector(state => state.orderListMy);
    // const {loading: loadingOrders, error: errorOrders, orders} = orderListMy;


    // const wishListDetails = useSelector((state) => state.wishListDetails);
    // const {wishDetails, loading: loadingWishListDetails, error: errorWishListDetails} = wishListDetails;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingWishList, error: errorWishList, wishListItems} = wishListMy;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name || !user || success) {
                dispatch({type: USER_UPDATE_PROFILE_RESET});
                dispatch(getUserDetails('profile'));
                dispatch(listMyWishLists())
                // dispatch(getWishListDetails(wishDetails._id))
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }

    }, [dispatch, history, userInfo, user, success, wishListItems]);


    const submitHandler = (e) => {
        //prevent page refresh
        e.preventDefault();
        //    DISPATCH REGISTER
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            //   DISPATCH UPDATE PROFILE
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }
    };

    // const getItems = () => {
    //     //    wishDetails.wishListItems.map((item, index) => (
    //     //          console.log(item.isEmailed)
    //     //     ))
    //     // };
    //     //
    //     // getItems();

    // const wishItems = (id) => {
    //     dispatch(getWishListDetails(id))
    // };


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
                <h2>My WishLists</h2>
                { loadingWishList
                    ? <Loader />
                    : errorWishList
                        ? <Message variant='danger'>{errorWishList}</Message>
                        : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                    </tr>
                    </thead>
                    <tbody>
                    {wishListItems.map((item, index) => (
                        <tr key={index}>
                            {console.log(item)}
                            <td>
                                <Image src={item.image} alt={item.name} fluid rounded/>
                            </td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                ) }
            </Col>
        </Row>

    )
};

export default ProfileScreen