import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Tab, Tabs, Container} from 'react-bootstrap'
import {CART_RESET} from "../../constants/cartConstants";
import WishListSave from "../../components/Wishlist/WishListSave";
import WishListEmail from "../../components/Wishlist/WishListEmail";
import {EMAIL_RESET} from "../../constants/emailConstants";
import '../../style/wishListScreen/WishListScreen.css';
import {Link} from "react-router-dom";
import {createWishList} from "../../actions/wishListActions";
import WishListHero from "../../components/Wishlist/WishListHero";

const WishListScreen = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const wishListCreate = useSelector(state => state.wishListCreate);
    const {wishList, success, error} = wishListCreate;

    useEffect(() => {
    }, [dispatch, success, userInfo]);

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
            <WishListHero/>

            <Container className='bg-white py-4 px-3 mt-n5' fluid>
                <Row className='m-0 p-0 d-flex justify-content-between' style={{zIndex: 100}}>
                    <Col xs={1} className='d-flex justify-content-start'>
                        <Link to='/'>
                            <h6 className=' global_cursor stick p-3 m-auto'>
                                x
                            </h6>
                        </Link>
                    </Col>
                    <Col xs={1} className='global_cursor global_hover-border d-flex justify-content-center align-items-center px-4' onClick={clearWishList}>
                        {/*<h6 onClick={clearWishList}*/}
                        {/*    className='global_cursor stick m-0 '>*/}
                            clear
                        {/*</h6>*/}
                    </Col>
                </Row>
                <Row xs={12} className='global_bisonRedTxt pt-3'>
                    <Col xs={12}>
                        <h3 className='d-flex justify-content-center global_blood-red bold'>WishList</h3>
                    </Col>
                    <Col xs={12}>

                        {userInfo ? (
                            <h6 className='global_cursor-underline global_bisonRedTxt mb-3 py-3 px-2'
                                onClick={addToWishListHandler}>Save wishlist to profile</h6>
                        ) : (
                            <Link to='/login'>
                                {cartItems.length !== 0 && (
                                    <h6 className='py-3'>
                                        <strong className='global_bisonRedTxt global_cursor'>sign in</strong> to save
                                    </h6>
                                )}
                            </Link>
                        )}
                        {cartItems.length === 0
                            ? (
                                <p className='mt-5 text-center'>Your wishlist is empty <p style={{fontSize: '12px'}}>
                                    <Link
                                        to={'/products'} className='global_bisonRedTxt'>Browse items</Link></p></p>)
                            : (
                                <>
                                    < WishListEmail userInfo={userInfo} cartItems={cartItems} cart={cart}
                                                    success={success}/>
                                </>
                            )}
                    </Col>
                </Row>

            </Container>
        </>
    )

};
export default WishListScreen;