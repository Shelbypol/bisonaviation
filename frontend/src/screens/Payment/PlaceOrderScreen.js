import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import {Button, Row, Col, ListGroup, Image, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../../components/Message";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import {createOrder} from "../../actions/orderActions";

const PlaceOrderScreen = ({ history }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // CALCULATE PRICES
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    };
    cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 10);
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
    cart.totalPrice = (
        Number(cart.itemsPrice)
        + Number(cart.shippingPrice)
        + Number(cart.taxPrice)
    ).toFixed(2);

    const orderCreate = useSelector(state => state.orderCreate);
    const { order, success, error } = orderCreate;

    useEffect(() => {
        if(success) {
            history.push(`/order/${order._id}`)
        }
        //     eslint-disable-next-line
    }, [history, success]);


    const placeOrderHandler = () => {

        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
    };

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <Col me={8}>
                    <ListGroup>
                        <ListGroup.Item variant='flush'>
                            <h2>Shipping</h2>
                            <div>
                                <strong>Address: </strong>
                                <br/>
                                <p style={{marginLeft: '1em'}}>
                                    {cart.shippingAddress.address},<br/>
                                    {cart.shippingAddress.city},<br/>
                                    {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                                </p>
                            </div>
                        </ListGroup.Item>


                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0
                                ? <Message>Your cart is empty</Message>
                                : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>
                                                            {item.name}
                                                        </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x $ {item.price} = $ {item.qty * item.price}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                {/* ORDER SUMMARY */}
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>$ {cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            {/* SHIPPING */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>$ {cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            {/* TAX */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>$ {cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            {/* TOTAL */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>$ {cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message> }
                            </ListGroup.Item>

                            {/* btn */}
                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrderHandler}
                                >Place Order</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default PlaceOrderScreen