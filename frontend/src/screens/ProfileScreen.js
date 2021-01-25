import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Table, ListGroup, Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// deals with our redux state
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {getUserDetails, updateUserProfile} from '../actions/userActions'
import {listMyWishLists, deleteWishListItem} from "../actions/wishListActions";
import {USER_UPDATE_PROFILE_RESET} from "../constants/userConstants";
import {Link} from "react-router-dom";


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

    const productDetails = useSelector(state => state.productDetails);
    const {product} = productDetails;

    // const orderListMy = useSelector(state => state.orderListMy);
    // const {loading: loadingOrders, error: errorOrders, orders} = orderListMy;

    // const wishListDetails = useSelector((state) => state.wishListDetails);
    // const {wishDetails, success: wishDetailsSuccess} = wishListDetails;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const wishListDelete = useSelector(state => state.wishListDelete);
    const {success: successDelete} = wishListDelete;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name || !user || success) {
                dispatch({type: USER_UPDATE_PROFILE_RESET});
                dispatch(getUserDetails('profile'));
                // dispatch(listMyOrders())
                dispatch(listMyWishLists())
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [dispatch, history, userInfo, user, success, wishList, successDelete]);


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

    const deleteHandler = (id) => {
        dispatch(deleteWishListItem(id))
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
                <h2>Wishlist</h2>
                {loadingOrders
                    ? <Loader/>
                    : errorOrders
                        ? <Message variant='danger'>{errorOrders}</Message>
                        : (
                            <Row xs={12}>
                                <Col xs={10}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        {wishList.map(wishes => (
                                            wishes.wishListItems.map(item => (
                                                item.length === 0 ? <Message>Wishlist is empty</Message> :
                                                    <ListGroup.Item key={item._id}
                                                                    className='border-0 global_bisonDarkFadedBgColorHover global_cursor'>
                                                        <Row xs={12}>
                                                            <Col xs={4}>
                                                                <Link to={`/product/${item.product}`}>
                                                                    <Image src={item.image} alt={item.name} fluid
                                                                           rounded/>
                                                                </Link>
                                                            </Col>
                                                            <Col xs={4}>
                                                                <Link to={`/product/${item.product}`}>
                                                                    {item.name}
                                                                </Link>
                                                            </Col>
                                                            <Col xs={4}>
                                                                <Link to={`/product/${item.product}`}>
                                                                    <strong>${item.price}</strong>
                                                                </Link>
                                                            </Col>
                                                            {/*<Col md={2}>*/}
                                                            {/*    <Button type='button' variant='light'*/}
                                                            {/*            onClick={() => deleteHandler(item._id)}>*/}
                                                            {/*        <i className='fas fa-trash'> </i>*/}
                                                            {/*    </Button>*/}
                                                            {/*</Col>*/}

                                                        </Row>
                                                    </ListGroup.Item>
                                            ))
                                        ))}
                                    </ListGroup.Item>
                                </ListGroup>
                                </Col>

                                <Col xs={2}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            {wishList.map(wishes => (
                                                // wishes.wishListItems.map(item => (
                                                //     item.length === 0 ? <Message>Wishlist is empty</Message> :
                                                        <ListGroup.Item key={wishes._id}
                                                                        className='border-0 global_bisonDarkFadedBgColorHover global_cursor'>
                                                            <Row xs={12}>
                                                                <Col xs={12}>
                                                                    <Button type='button' variant='light'
                                                                            onClick={() => deleteHandler(wishes._id)}>
                                                                        <i className='fas fa-trash'> </i>
                                                                    </Button>
                                                                </Col>

                                                            </Row>
                                                        </ListGroup.Item>
                                            ))}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>

                            </Row>
                        )}
            </Col>
        </Row>

    )
};

export default ProfileScreen