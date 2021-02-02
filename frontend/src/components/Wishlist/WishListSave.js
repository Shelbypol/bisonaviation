import {Button, Col, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {createWishList, listMyWishLists} from "../../actions/wishListActions";
import {CART_RESET} from "../../constants/cartConstants";
import {removeFromCart} from "../../actions/cartActions";
import {useDispatch, useSelector} from "react-redux";

const WishListSave = ({success, cartItems, cart}) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    useEffect(() => {

        dispatch(listMyWishLists())

    }, [ dispatch, userInfo]);

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
                    {userInfo ? (
                        <h6 className='global_cursor-underline global_bisonRedTxt mb-3 py-0 px-2' onClick={addToWishListHandler}>Save wishlist to profile</h6>
                    ) : (
                        <Link to='/login'>
                            <h6>
                                <strong className='global_bisonRedTxt global_cursor'>sign in</strong> to save
                            </h6>
                        </Link>
                    )}
                    {cartItems.length === 0
                        ? (<p className='mt-5 text-center'>Your wishlist is empty <p style={{fontSize: '12px'}}><Link to={'/products'} className='global_bisonRedTxt'>Browse items</Link></p></p>)
                        : (<>
                                {/*<LinkContainer to={`/`}>*/}
                                {/*    <Button variant='dark' className='btn-sm'>*/}
                                {/*        Continue Shopping*/}
                                {/*    </Button>*/}
                                {/*</LinkContainer>*/}

                                <ListGroup variant='flush'>
                                    {cartItems.map(item => (
                                        // <ListGroup.Item key={item.product} className='global_bisonDarkFadedBgColorHover'>
                                        <ListGroup.Item key={item.product} className='global_bisonDarkFadedBgColorHover global_cursor'>
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
