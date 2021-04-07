import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Tab, Tabs, Button} from 'react-bootstrap'
import {CART_RESET} from "../../constants/cartConstants";
import WishListSave from "./WishListSave";
import WishListEmail from "./WishListEmail";
import {EMAIL_RESET} from "../../constants/emailConstants";
import {createWishList, listMyWishLists} from "../../actions/wishListActions";
import {Link} from "react-router-dom";


// match == id, location == get a query string '?qty', history == used to redirect
const WishListTabInfo = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const wishListCreate = useSelector(state => state.wishListCreate);
    const {wishList, success, error} = wishListCreate;


    useEffect(() => {
        dispatch(listMyWishLists());

    }, [dispatch, success, userInfo]);

    // const addToWishListHandler = () => {
    //
    //     cart.cartItems.map(item => {
    //         dispatch(createWishList({
    //             wishListItems: item
    //         }));
    //     });
    //     dispatch({type: CART_RESET});
    // };

    const clearWishList = () => {
        dispatch({type: CART_RESET});
        dispatch({type: EMAIL_RESET})
    };

    const addToWishListHandler = () => {
        cart.cartItems.map(item => {
            dispatch(createWishList({
                wishListItems: item
            }));
        });
        dispatch({type: CART_RESET});
    };

    return (
        <>
            <Row className='mt-n5 pt-5 d-flex justify-content-between bg-white' style={{zIndex: 1, top: '0'}}>
                <Col xs={6} className='mb-5 mt-0'>
                    {(!userInfo) ? (
                        <>
                        <h6>
                            <i style={{color: 'rgba(0,0,0, .5)'}} className='bg-white'>sign in to save</i>
                        </h6>
                            <Link to='/wishlist'>
                                <h6 className='global_cursor-underline global_blue py-2 my-0 border-top'>email wishlist</h6>
                            </Link>
                        </>
                    ) : (
                        <>
                            <h6 className='global_cursor-underline global_bisonRedTxt py-0 bg-white'
                                onClick={addToWishListHandler}><span className='rounded'>save wishlist</span></h6>

                            <Link to='/wishlist'>
                                <h6 className='global_cursor-underline global_blue py-2 my-0 border-top'>email wishlist</h6>
                            </Link>
                        </>
                    )}
                </Col>

                <Col xs={6} className='mb-5 mt-0 d-flex justify-content-end'>
                    <>
                        <h6 onClick={clearWishList}
                            className='global_cursor stick bg-white pt-3 pl-0 pb-0 my-0'>
                            clear</h6>
                    </>
                </Col>

            </Row>
            <Row xs={12} className=' global_bisonRedTxt mt-n5 pt-0'>
                <Col xs={12}>
                    <WishListSave cartItems={cartItems} cart={cart} success={success}/>
                </Col>
            </Row>


        </>
    )
};

export default WishListTabInfo