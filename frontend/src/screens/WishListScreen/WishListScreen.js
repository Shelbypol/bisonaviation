import React, {useEffect, useLayoutEffect, useState} from 'react'
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
import MobileHeader from "../../components/Headers-Nav-Footer/MobileHeader";
import StickyHeader from "../../components/Headers-Nav-Footer/StickyHeader";
import {Jumbotron} from "reactstrap";
import HeroDivider from "../../components/HeroDivider";
import heroImg from '../../images/bg-graphics/jd-roel-flir-end.png'

const WishListScreen = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 1000;

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const wishListCreate = useSelector(state => state.wishListCreate);
    const {wishList, success, error} = wishListCreate;


    useEffect(() => {

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [dispatch, width, success, userInfo]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

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

            {width < breakpoint ? (
                <MobileHeader/>
            ) : (
                <>
                    <StickyHeader/>
                </>
            )}



            <Container className='bg-white py-0 min-vh-100 WishListScreen_container position-relative' fluid>

            <HeroDivider
                img={'WishListScreenImg'}
                showImg={true}
                title={'Ask the experts!'}
            />

                <Row className='d-flex justify-content-between w-100 px-5' style={{backgroundImage: 'url('}}>

                    <Col xs={1} className=' d-flex justify-content-start py-1 px-0'>
                        <Link to='/' className='text-decoration-none'>
                            <h6 className='WishListScreen_x-btn global_cursor'>
                                x
                            </h6>
                        </Link>
                    </Col>

                    <Col xs={1}
                         className='WishListScreen_clear-btn py-1 global_cursor global_hover-border d-flex justify-content-center align-items-center'
                         onClick={clearWishList}>
                        clear
                    </Col>
                </Row>

                <Row className='global_bisonRedTxt  position-sticky px-5'>
                    <Col xs={12} className=''>

                        {userInfo && cartItems.length > 0 ? (
                            <h6 className='WishListScreen_mobile-sign-in global_cursor-underline global_bisonRedTxt mb-3 pt-3 px-2'
                                onClick={addToWishListHandler}>Save wishlist to profile</h6>
                        ) : (
                            cartItems.length !== 0 && (
                                <h6 className=' pt-3 mb-0 pb-0'>
                                    <i style={{fontSize: '1vw', color: 'rgba(0,0,0, .5)'}}
                                       className='WishListScreen_mobile-sign-in bg-white'>sign
                                        in to save</i>
                                </h6>
                            )
                        )}


                        {cartItems.length === 0
                            ? (
                                <h2 className='mt-5 text-center global_blood-red'>Your wishlist is empty <p
                                    style={{fontSize: '12px'}}>
                                    <Link
                                        to={'/products'} className='global_eerie-black'>Browse items</Link></p></h2>)
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