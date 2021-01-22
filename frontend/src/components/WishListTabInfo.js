import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart, removeFromCart} from '../actions/cartActions'
import {createOrder} from "../actions/orderActions";
import {CART_RESET} from "../constants/cartConstants";


// match == id, location == get a query string '?qty', history == used to redirect
const WishListTabInfo = ({dropdownItemProp}) => {
    // const productId = match.params.id;

    // location.search is the query params will log ' ?qty=1 '
    // const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    //dispatch because it's an action
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    // use Selector hook to get items from state
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    useEffect(() => {
        // if(userInfo){
        //     placeOrderHandler()
        // }
        // if(productId){
        //     dispatch(addToCart(productId))
        // }
    }, [dispatch]);

    const placeOrderHandler = () => {

        dispatch(createOrder({
            orderItems: cart.cartItems,
            // shippingAddress: cart.shippingAddress,
            // paymentMethod: cart.paymentMethod,
            // itemsPrice: cart.itemsPrice,
            // shippingPrice: cart.shippingPrice,
            // taxPrice: cart.taxPrice,
            // totalPrice: cart.totalPrice
        }))
    };

    const removeFromWishListHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    const clearWishList = () => {
        dispatch({type: CART_RESET});
    };

    //history redirect to shipping if logged in in
    // const wishlistHandler = () => {
    //     if(!userInfo){
    //         history.push('/login')
    //         // history.push('/login?redirect=shipping')
    //     } else {
    //         placeOrderHandler();
    //
    //     }
    // };


    return (
        <>
            <Row xs={12} className='border-bottom stick-margins'>
                    <Col xs={4} className='border-right stick global_cursor global_bisonFadedRedHover p-auto
                    text-center d-flex align-items-center justify-content-center'>

                    {userInfo ? (
                        <h6>Save wishlist to profile</h6>
                        ) : (

                        <Link to='/login'>
                            <h6>
                                <strong className='global_bisonRedTxt global_cursor'>sign in</strong> to save
                            </h6>
                        </Link>
                )}
                    </Col>
                <Col xs={4}
                     className='border-right stick global_cursor global_bisonFadedRedHover p-auto d-flex align-items-center justify-content-center'>
                    <h6>Inquire</h6>
                </Col>
                <Col xs={4} onClick={clearWishList}
                     className='global_cursor stick global_bisonFadedRedHover p-auto text-center d-flex align-items-center justify-content-center'>
                    <h6>clear list</h6>
                </Col>
            </Row>

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
                                        <ListGroup.Item key={item.product}>
                                            <Row xs={12}>
                                                <Col className='my-auto' md={6}>
                                                    <Image src={item.image} alt={item.name} fluid
                                                           className='rounded-circle h-75 w-75'/>
                                                </Col>
                                                <Col className='my-auto' md={4}>
                                                    <Link to={`product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                {/*<Col md={2}>${item.price}</Col>*/}
                                                {/*<Col md={2}>*/}
                                                {/*    <Form.Control*/}
                                                {/*        as='select'*/}
                                                {/*        value={item.qty}*/}
                                                {/*        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}*/}
                                                {/*    >*/}
                                                {/*        {[...Array(item.countInStock).keys()].map((x) => (*/}
                                                {/*            <option key={x + 1} value={x + 1}>{x + 1}</option>*/}
                                                {/*        ))}*/}
                                                {/*    </Form.Control>*/}
                                                {/*</Col>*/}
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

export default WishListTabInfo