import {Button, Col, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {createWishList, listMyWishLists} from "../../actions/wishListActions";
import {CART_RESET} from "../../constants/cartConstants";
import {removeFromCart} from "../../actions/cartActions";
import {useDispatch} from "react-redux";

const WishListSave = ({success, cartItems, cart, userInfo}) => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listMyWishLists())

    }, [ dispatch, success]);

    const removeFromWishListHandler = (id) => {
        dispatch(removeFromCart(id))
    };


    return (

        <>
            <Row xs={12} className='mt-2'>
                <Col md={12}>
                    {/*<h1>Shopping Cart</h1>*/}
                    {cartItems.length === 0
                        ? (<p className='mt-5 text-center'>Your wishlist is empty</p>)
                        : (<>
                                {/*<LinkContainer to={`/`}>*/}
                                {/*    <Button variant='dark' className='btn-sm'>*/}
                                {/*        Continue Shopping*/}
                                {/*    </Button>*/}
                                {/*</LinkContainer>*/}

                                <ListGroup variant='flush'>
                                    {cartItems.map(item => (
                                        // <ListGroup.Item key={item.product} className='global_bisonDarkFadedBgColorHover'>
                                        <ListGroup.Item key={item.product}>
                                            <Row xs={12}>
                                                <Col className='my-auto' md={6}>
                                                    <Image src={item.image} alt={item.name} fluid
                                                           className='rounded-circle h-50 w-50'/>
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
