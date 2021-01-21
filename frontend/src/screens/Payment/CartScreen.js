import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../../components/Message'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import {LinkContainer} from "react-router-bootstrap";
import {createOrder} from "../../actions/orderActions";
import {CART_RESET} from "../../constants/cartConstants";

// match == id, location == get a query string '?qty', history == used to redirect
const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;

    // location.search is the query params will log ' ?qty=1 '
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    //dispatch because it's an action
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    // use Selector hook to get items from state
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        // if(userInfo){
        //     placeOrderHandler()
        // }
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);

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

    // HANDLER
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    //history redirect to shipping if logged in in
    const wishlistHandler = () => {
        if(!userInfo){
            history.push('/login')
        // history.push('/login?redirect=shipping')
        } else {
            placeOrderHandler();

        }
    };


    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0
                    ? (<Message>Your cart is empty <Link to={'/'}>Go Back</Link></Message>)
                    : ( <>
                            <LinkContainer to={`/`}>
                                <Button variant='dark' className='btn-sm'>
                                    Continue Shopping
                                </Button>
                            </LinkContainer>
                            <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    <ListGroup.Item key={item.product}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded/>
                                            </Col>
                                            <Col md={3}>
                                                <Link to={`product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={2}>${item.price}</Col>
                                            <Col md={2}>
                                                <Form.Control
                                                    as='select'
                                                    value={item.qty}
                                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                >
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                            <Col md={2}>
                                                <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
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

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            {/* acc = accumulator and item*/}
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                        <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={wishlistHandler}>
                            Save wishlist
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>

        </Row>
    )
};

export default CartScreen