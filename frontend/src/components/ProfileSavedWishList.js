import React, {useEffect, useState} from "react";
import {Form, Button, Row, Col, Table, ListGroup, Image, Tab, Nav} from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import {Link} from "react-router-dom";
import {USER_UPDATE_PROFILE_RESET} from "../constants/userConstants";
import {getUserDetails, updateUserProfile} from "../actions/userActions";
import {deleteWishListItem, listMyWishLists} from "../actions/wishListActions";

const ProfileSavedWishList = ({match, history}) => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [message, setMessage] = useState(null);
    // const [deleteWish, setDeleteWish] = useState(false);

    const dispatch = useDispatch();

    // const userDetails = useSelector(state => state.userDetails);
    // const {loading, error, user} = userDetails;
    //
    // const userLogin = useSelector(state => state.userLogin);
    // const {userInfo} = userLogin;
    //
    // const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    // const {success} = userUpdateProfile;

    const productDetails = useSelector(state => state.productDetails);
    const {product} = productDetails;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const wishListDelete = useSelector(state => state.wishListDelete);
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = wishListDelete;

    useEffect(() => {
        // if (!userInfo) {
        //     history.push('/login')
        // } else {
        //     if (!user.name || !user || success) {
        //         dispatch({type: USER_UPDATE_PROFILE_RESET});
        //         dispatch(getUserDetails('profile'));
        //
        //     }
        // }
        dispatch(listMyWishLists())

    }, [dispatch, history, successDelete]);


    // const submitHandler = (e) => {
    //     //prevent page refresh
    //     e.preventDefault();
    //     //    DISPATCH REGISTER
    //     if (password !== confirmPassword) {
    //         setMessage('Passwords do not match')
    //     } else {
    //         //   DISPATCH UPDATE PROFILE
    //         dispatch(updateUserProfile({id: user._id, name, email, password}))
    //     }
    // };

    const deleteHandler = (id) => {
        dispatch(deleteWishListItem(id));
    };

    return (
        <>
            <h2>Saved Wishlist</h2>
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
                                                            <Col xs={2}>
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
                                                            <Col md={2}>
                                                                <Button type='button' variant='light'
                                                                        onClick={() => deleteHandler(wishes._id)}>
                                                                    <i className='fas fa-trash'> </i>
                                                                </Button>
                                                            </Col>

                                                        </Row>
                                                    </ListGroup.Item>
                                            ))
                                        ))}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                        </Row>

                    )}
        </>
    )
};
export default ProfileSavedWishList
