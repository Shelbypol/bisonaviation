import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card, Tab, Tabs} from 'react-bootstrap'
import Message from '../Message'
import {addToCart, removeFromCart} from '../../actions/cartActions'
import {createOrder} from "../../actions/orderActions";
import {CART_RESET} from "../../constants/cartConstants";
import {createWishList, listMyWishLists} from "../../actions/wishListActions";
import WishListSave from "./WishListSave";
import WishListEmail from "./WishListEmail";
import {EMAIL_RESET} from "../../constants/emailConstants";


// match == id, location == get a query string '?qty', history == used to redirect
const WishListTabInfo = () => {
    const dispatch = useDispatch();


    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const wishListCreate = useSelector(state => state.wishListCreate);
    const {wishList, success, error} = wishListCreate;

    const addToWishListHandler = () => {

        cart.cartItems.map(item => {
            dispatch(createWishList({
                wishListItems: item
            }));
        });
        dispatch({type: CART_RESET});
    };


    const clearWishList = () => {
        dispatch({type: CART_RESET});
        dispatch({type: EMAIL_RESET})
    };

    return (
        <>
            <Row className='mt-n4 p-0 d-flex justify-content-end' style={{zIndex: 100}}>
                <Col xs={2}>
                    <h6 onClick={clearWishList}
                        className='global_cursor stick global_bisonFadedRedHover p-3 m-auto d-flex justify-content-center'>
                        clear</h6>
                </Col>
            </Row>
            <Row xs={12} className='mt-n3'>
                <Col xs={12}>
                    <Tabs defaultActiveKey="wishlist" id="uncontrolled-tab-example"
                          ClassName='d-flex justify-content-center'>
                        <Tab tabClassName=' global_cursor global_bisonFadedRedHover p-auto
                        text-center d-flex align-items-center justify-content-center' eventKey="wishlist"
                             title={userInfo ? (

                                 <h6 onClick={addToWishListHandler}>Save wishlist to profile</h6>
                             ) : (
                                 <Link to='/login'>
                                     <h6>
                                         <strong className='global_bisonRedTxt global_cursor'>sign in</strong> to save
                                     </h6>
                                 </Link>
                             )}>
                            <WishListSave userinfo={userInfo} cartItems={cartItems} cart={cart} success={success}/>
                        </Tab>
                        <Tab eventKey="profile" title="Inquire"
                             tabClassName='global_cursor global_bisonFadedRedHover p-auto d-flex align-items-center justify-content-center'>
                            <WishListEmail userInfo={userInfo} cartItems={cartItems} cart={cart} success={success}/>
                        </Tab>

                    </Tabs>
                </Col>
            </Row>


        </>
    )
};

export default WishListTabInfo