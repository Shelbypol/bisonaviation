import {Button, Col, Image, ListGroup, Row, Dropdown} from "react-bootstrap";
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

        // document.addEventListener("scroll", handleScroll);
        // return () => {
        //     document.removeEventListener("scroll", handleScroll);
        // };
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



                    {
                        cartItems.length === 0
                            ? (<p className='mt-5 text-center'>Your wishlist is empty <p style={{fontSize: '12px'}}>
                                <Link
                                    to={'/products'} className='global_bisonRedTxt'>Browse items</Link></p></p>)
                            : (<>
                                    {/*<Link to={`/`}>*/}
                                    {/*    <Button variant='dark' className='btn-sm'>*/}
                                    {/*        Continue Shopping*/}
                                    {/*    </Button>*/}
                                    {/*</Link>*/}


                                    {!userInfo && (


                                        <>

                                            <Row className='d-flex justify-content-end w-100'>
                                                <Col xs={6}>
                                                    <h4>wishlist</h4>
                                                </Col>
                                                <Col xs={6} className='d-flex justify-content-end'>
                                                    <Link to='/wishlist'>
                                                        {/*<h6 className='bg-transparent pt-2'>&nbsp;Your Product Questions Today!</h6>*/}
                                                        <Button className='global_blue-bg py-1 px-3'>email wishlist</Button>
                                                    </Link>
                                                </Col>
                                                <Col xs={12} className='mb-5 mt-0 pt-0 d-flex justify-content-start'>
                                                    <i style={{fontSize: '1vw', color: 'rgba(0,0,0, .5)'}}>sign in to save</i>
                                                </Col>
                                                {/*<Col xs={6} className='d-flex justify-content-end'>*/}
                                                {/*    <Link to='/wishlist'>*/}
                                                {/*        /!*<h6 className='bg-transparent pt-2'>&nbsp;Your Product Questions Today!</h6>*!/*/}
                                                {/*        <Button className='global_blue-bg py-1 px-3'>email us</Button>*/}
                                                {/*    </Link>*/}
                                                {/*</Col>*/}
                                            </Row>


                                            {/*<Link to='/register' className=''>*/}
                                            {/*    <h6 className='py-2 global_blue'>not a user?</h6>*/}
                                            {/*</Link>*/}
                                        </>
                                    )}
                                    {/*{login && (*/}
                                    {/*<Login loginTitle={''} showSideBar={showSidebar}/>*/}
                                    {/*)}*/}

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
