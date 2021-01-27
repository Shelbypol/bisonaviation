import React, {useEffect, useState} from "react";
import {Form, Button, Row, Col, Table, ListGroup, Image, Tab, Nav, Card} from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import {Link} from "react-router-dom";
import {addToEmail, removeFromEmail} from "../../actions/emailActions";
import {deleteWishListItem, listMyWishLists} from "../../actions/wishListActions";
import ProfileSavedProduct from "./ProfileSavedProduct";

const ProfileSavedWishList = ({match, history, userInfo}) => {

    // const [activeEmail, setActiveEmail] = useState(false);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {product} = productDetails;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const wishListDelete = useSelector(state => state.wishListDelete);
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = wishListDelete;

    useEffect(() => {

        dispatch(listMyWishLists())

    }, [dispatch, history, successDelete]);

    return (
        <>
            <h2>Wishlist</h2>
            {loadingOrders
                ? <Loader/>
                : errorOrders
                    ? <Message variant='danger'>{errorOrders}</Message>
                    : (
                        <Row xs={12}>
                            <Col xs={10}>
                                <ListGroup variant='flush'>
                                    {wishList.map(wishes => (
                                        wishes.wishListItems.map(item => (
                                            item.length === 0 ? <Message>Wishlist is empty</Message> :
                                                <ListGroup.Item key={wishes._id}
                                                                className='border-0 global_bisonDarkFadedBgColorHover global_cursor'>
                                                    <ProfileSavedProduct
                                                        wishList={wishList} product={product} item={item}/>
                                                </ListGroup.Item>

                                        ))
                                    ))}
                                </ListGroup>
                            </Col>

                        </Row>

                    )}
        </>
    )
};
export default ProfileSavedWishList
