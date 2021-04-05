import {Button, Col, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {createWishList, listMyWishLists} from "../../actions/wishListActions";
import {CART_RESET} from "../../constants/cartConstants";
import {removeFromCart} from "../../actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import '../../style/SideBar.css'
import Login from "../Login";
import SideBarData from "../SideBar/SideBarData";

const WishListSave = ({success, cartItems, cart}) => {
    const [login, setLogin] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const node = useRef();
    useEffect(() => {
        dispatch(listMyWishLists());

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [dispatch, userInfo]);

    const showSidebar = () => {
        setSidebar(!sidebar);
        setLogin(!login)
    };

    const handleScroll = e => {
        if (node.current.contains(e.target) === false) {
            setSidebar(false)
        }
    };

    const addToWishListHandler = () => {

        cart.cartItems.map(item => {
            dispatch(createWishList({
                wishListItems: item
            }));
        });
        dispatch({type: CART_RESET});
    };


    const removeFromWishListHandler = (id) => {
        dispatch(removeFromCart(id))
    };


    return (

        <>
            <Row xs={12} className='mt-2'>
                <Col className='mt-3' md={12}>
                    {userInfo && (
                        <h6 className='global_cursor-underline global_bisonRedTxt mb-3 py-0 px-2 '
                            onClick={addToWishListHandler}>Save wishlist to profile</h6>
                    )}
                        {/*// : (*/}
                        {/*// <Link to={'/login'}>*/}
                    {/*    <>*/}
                    {/*    <h6>*/}
                    {/*        <strong onClick={showSidebar} className='global_bisonRedTxt global_cursor'>sign*/}
                    {/*            in</strong> to save*/}
                    {/*    </h6>*/}
                    {/*     <Link to='/register' className=''>*/}
                    {/*        <h6 className='py-2 global_blue'>not a user?</h6>*/}
                    {/*     </Link>*/}
                    {/*    /!*{sidebar && (*!/*/}
                    {/*    <Login loginTitle={''} showSideBar={showSidebar}/>*/}
                    {/*/!*)}*!/*/}
                    {/*    </>*/}
                    {/*)}*/}


                        {
                            cartItems.length === 0
                                ? (<p className='mt-5 text-center'>Your wishlist is empty <p style={{fontSize: '12px'}}>
                                    <Link
                                        to={'/products'} className='global_bisonRedTxt'>Browse items</Link></p></p>)
                                : (<>
                                        {/*<LinkContainer to={`/`}>*/}
                                        {/*    <Button variant='dark' className='btn-sm'>*/}
                                        {/*        Continue Shopping*/}
                                        {/*    </Button>*/}
                                        {/*</LinkContainer>*/}


                                        {!userInfo && (
                                            <>
                                                <h6>
                                                    <strong onClick={showSidebar} className='global_bisonRedTxt global_cursor'>sign
                                                        in</strong> to save
                                                </h6>
                                                <Link to='/register' className=''>
                                                    <h6 className='py-2 global_blue'>not a user?</h6>
                                                </Link>
                                            </>
                                        )}
                                                {login && (
                                                <Login loginTitle={''} showSideBar={showSidebar}/>
                                                )}

                                        <ListGroup variant='flush'>
                                            {cartItems.map(item => (
                                                // <ListGroup.Item key={item.product} className='global_bisonDarkFadedBgColorHover'>
                                                <ListGroup.Item key={item.product} className='global_cursor'>
                                                    <Row xs={12}>
                                                        <Col className='my-auto' md={6}>
                                                            <Image src={item.image} alt={item.name} fluid
                                                                   className='rounded h-50 w-50'/>
                                                        </Col>
                                                        <Col className='my-auto' md={4}>
                                                            <Link to={`product/${item.product}`}>{item.name}</Link>
                                                        </Col>
                                                        <Col className='my-auto' md={2}>
                                                            <Button type='button' variant='light'
                                                                    onClick={() => removeFromWishListHandler(item.product)}>
                                                                <i className='fas fa-trash'> </i>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </>
                                )

                    }

                </Col>

            </Row>
        </>

    )
};

export default WishListSave
