import React, {useEffect, useLayoutEffect, useState} from 'react'
import {Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import '../../style/WishListTab.css'
import {removeFromCart} from "../../actions/cartActions";
import {listMyWishLists} from "../../actions/wishListActions";
import {addToEmail} from "../../actions/emailActions";
import {CART_RESET} from "../../constants/cartConstants";
import {EMAIL_RESET} from "../../constants/emailConstants";


const WishListEmail = ({userInfo, cart, cartItems, success}) => {
    const [userName, setUserName] = useState('');
    const [loggedUserName, setLoggedUserName] = useState('');
    const [loggedUserEmail, setLoggedUserEmail] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userText, setUserText] = useState('');
    const [userProducts, setUserProducts] = useState(cartItems.map(item => {
        return item
    }));
    const [isEmailed, setIsEmailed] = useState(false);

    const dispatch = useDispatch();

    const email = useSelector(state => state.email);
    const {emailItems} = email;

    useEffect(() => {
        dispatch(listMyWishLists());

        console.log(emailItems)

    }, [userInfo, success, emailItems, userText, userEmail, userName, isEmailed]);


    const Email = () => {
        setIsEmailed(!isEmailed)
    };


    const submitHandler = (e) => {
        setIsEmailed(true);

        // if(userInfo) {
        //     dispatch(addToEmail(
        //         loggedUserName,
        //         loggedUserEmail,
        //         userText,
        //         isEmailed,
        //         userProducts,
        //     ))
        // } else {
        dispatch(addToEmail(
            userName,
            userEmail,
            userText,
            isEmailed,
            userProducts,
        ));
        e.preventDefault();
        setUserEmail('');
        setTimeout(Email, 5000);
        setUserName('');
        setUserText('');

        window.scrollTo(0, 0);

    };


        // useLayoutEffect(() => {
        //     window.scrollTo(0, 0)
        // });


    // const clearWishList = () => {
    //     dispatch({type: CART_RESET});
    //     dispatch({type: EMAIL_RESET})
    // };

    const removeFromWishListHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    return (
        <Row xs={12} className='mt-2'>
            <Col xs={12}>
                {isEmailed ? (
                    <p style={{color: 'green'}}>Email sent!</p>

                ) : (
                    cartItems.length === 0 ? (
                        <>
                            <p>Ask the experts!</p>
                            <p style={{fontSize: '12px'}}><Link to={'/products'} className='global_bisonRedTxt'>Browse
                                items</Link></p>
                        </>
                    ) : (
                        <p className='global_blue'>Ask the experts!</p>
                    )

                )}
                <Form onSubmit={submitHandler} md={7} xs={12} className='m-3 p-2'>
                    <Row>
                        <Col
                             className='global_blood-red p-3 border global_light-grey-bg'>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='name'
                                              placeholder='Enter name'
                                              value={userName}
                                              onChange={
                                                  (e) => setUserName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type='email'
                                              placeholder='Enter email'
                                              value={userEmail}
                                              onChange={
                                                  (e) => setUserEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Inquire</Form.Label>
                                <Form.Control as="textarea"
                                              value={userText}
                                              placeholder='Selected items will be included in the email '
                                              onChange={(e) => setUserText(e.target.value)}
                                              rows={3}
                                />
                            </Form.Group>

                            {userName === '' || userEmail === '' ?
                                (<Button type='submit'
                                         disabled
                                         variant='primary'
                                         className='global_blue-bg'
                                         onClick={() => {
                                             setIsEmailed(true)
                                         }}
                                    >Email Inquiry</Button>
                                ) : (
                                    <Button type='submit'
                                            variant='primary'
                                            className='global_blue-bg'
                                            onClick={() => {
                                                setIsEmailed(true)                                            }}
                                    >Email Inquiry</Button>
                                )
                            }

                        </Col>

                        <Col md={5} xs={12} className='m-0 px-0'>
                                {cartItems.map(item => (
                            <ListGroup variant='flush'>
                                    <ListGroup.Item key={item._id}
                                                    className='border-0'>
                                        <Row xs={12}>
                                            <Col className='my-auto px-0' xs={2}>
                                                <Button type='button' variant='light'
                                                        onClick={() => removeFromWishListHandler(item.product)}>
                                                    <i className='fas fa-trash'> </i>
                                                </Button>
                                            </Col>
                                            <Col className='' >
                                                <Link to={`product/${item.product}`}>
                                                    <Image src={item.image} alt={item.name}
                                                           className='pt-2 justify-content-center rounded h-100 w-100'/>
                                                </Link>
                                            </Col>
                                            <Col className='my-auto px-0'>
                                                {item.name}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                            </ListGroup>
                                ))}

                        </Col>
                    </Row>
                </Form>
            </Col>
            {/*<Row className='py-3'>*/}
            {/*    <Col>*/}
            {/*        Have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

        </Row>
    )

};

export default WishListEmail