import React, {useEffect, useState} from 'react'
import {Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import '../../style/WishListTab.css'
import {removeFromCart} from "../../actions/cartActions";
import {listMyWishLists} from "../../actions/wishListActions";
import {addToEmail} from "../../actions/emailActions";


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

        // if(userInfo){
        //     setUserName(userInfo.name);
        //     setUserEmail(userInfo.email);
        // }
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
    };


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
                        <p>Ask the experts!</p>
                    )

                )}
                <Form onSubmit={submitHandler}>
                    <Row xs={12}>


                        <Col lg={8} xs={12}>
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
                                         onClick={() => {
                                             setIsEmailed(true)
                                         }}
                                    >Email Inquiry</Button>
                                ) : (
                                    <Button type='submit'
                                            variant='primary'
                                            onClick={() => {
                                                setIsEmailed(true)
                                            }}
                                    >Email Inquiry</Button>
                                )
                            }


                        </Col>
                        <Col lg={4} xs={12} className='m-0 pt-5'>

                            <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    <ListGroup.Item key={item._id}
                                                    className='stick-margins border-0'>
                                        <Row xs={12}>
                                            <Col className='my-auto' md={4} xs={12}>
                                                <Link to={`product/${item.product}`}>
                                                    <Image src={item.image} alt={item.name}
                                                           className='pt-2 justify-content-center rounded h-100 w-100'/>
                                                </Link>
                                            </Col>
                                            <Col className='my-auto px-0' md={8} xs={10}>
                                                {item.name}
                                            </Col>
                                            <Col className='my-auto px-0' xs={2}>

                                                <Button type='button' variant='light'
                                                        onClick={() => removeFromWishListHandler(item.product)}>
                                                    <i className='fas fa-trash'> </i>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

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