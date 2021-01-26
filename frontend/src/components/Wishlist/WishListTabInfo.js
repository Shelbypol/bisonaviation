import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../Message'
import {addToCart, removeFromCart} from '../../actions/cartActions'
import {createOrder} from "../../actions/orderActions";
import {CART_RESET} from "../../constants/cartConstants";
import {createWishList, listMyWishLists} from "../../actions/wishListActions";
import WishListSave from "./WishListSave";


// match == id, location == get a query string '?qty', history == used to redirect
const WishListTabInfo = () => {

    // const [ wishlist, setWishlist ] = useState(false);
    // const [ email, setEmail ] = useState(false);


    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const wishListCreate = useSelector(state => state.wishListCreate);
    const { wishList, success, error } = wishListCreate;


    return (



        <WishListSave userinfo={userInfo} cartItems={cartItems} cart={cart} success={success}  />

    )
};

export default WishListTabInfo