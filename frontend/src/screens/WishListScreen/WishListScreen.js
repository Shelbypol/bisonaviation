import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Tab, Tabs, Container} from 'react-bootstrap'
import {CART_RESET} from "../../constants/cartConstants";
import WishListSave from "../../components/Wishlist/WishListSave";
import WishListEmail from "../../components/Wishlist/WishListEmail";
import {EMAIL_RESET} from "../../constants/emailConstants";
import '../../style/wishListScreen/WishListScreen.css';

const WishListScreen = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const wishListCreate = useSelector(state => state.wishListCreate);
    const {wishList, success, error} = wishListCreate;

    const breakpoint = 1000;

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [dispatch, success, userInfo, width]);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        if (width < breakpoint) {
            if (sideBar) {
                setSideBar(!sideBar);
            }
        }
    };

    const clearWishList = () => {
        dispatch({type: CART_RESET});
        dispatch({type: EMAIL_RESET})
    };

    return (
        <>
            <Container className='bg-white p-5' fluid>
                <Row className=' p-0 d-flex justify-content-end' style={{zIndex: 100}}>
                    <Col xs={2}>
                        <h6 onClick={clearWishList}
                            className='global_cursor stick global_bisonFadedRedHover p-3 m-auto d-flex justify-content-center'>
                            clear</h6>
                    </Col>
                </Row>
                <Row xs={12} className='global_bisonRedTxt'>
                    <Col xs={12}>
                        <Tabs defaultActiveKey="wishlist" id="uncontrolled-tab-example"
                              ClassName='d-flex justify-content-center'>
                            <Tab tabClassName=' global_cursor global_bisonFadedRedHover p-auto
                        text-center d-flex align-items-center justify-content-center' eventKey="wishlist"
                                 title='Wishlist'>
                                <WishListSave cartItems={cartItems} cart={cart} success={success}/>
                            </Tab>
                            <Tab eventKey="profile" title="Purchase Inquiry"
                                 tabClassName='animations_img-hover-zoom-n-out global_cursor global_bisonFadedRedHover p-auto d-flex align-items-center justify-content-center'>
                                <WishListEmail userInfo={userInfo} cartItems={cartItems} cart={cart} success={success}/>
                            </Tab>

                        </Tabs>
                    </Col>
                </Row>

            </Container>
        </>
    )

};
export default WishListScreen;