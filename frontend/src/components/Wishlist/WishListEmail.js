import React, {useEffect, useState} from 'react'
import FormContainer from "../FormContainer";
import Message from "../Message";
import Loader from "../Loader";
import {Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import '../../style/WishListTab.css'
import {register} from "../../actions/userActions";
import {removeFromCart} from "../../actions/cartActions";
import {listMyWishLists} from "../../actions/wishListActions";
import {addToEmail, removeFromEmail} from "../../actions/emailActions";
import {EMAIL_RESET} from "../../constants/emailConstants";


const WishListEmail = ({userInfo, cart, cartItems, success}) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userText, setUserText] = useState('');
    const [userProducts, setUserProducts] = useState(cartItems.map(item => {
        return item
    }));
    const [isEmailed, setIsEmailed] = useState(false);

    const dispatch = useDispatch();

    const email = useSelector(state => state.email);
    const {emailItems} = email;

    const Email = () => {
        setIsEmailed(!isEmailed)
    };


    const submitHandler = (e) => {
        setIsEmailed(true);
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



    useEffect(() => {
        dispatch(listMyWishLists());
        console.log(emailItems)

    }, [userInfo, success, emailItems, userText, userEmail, userName, isEmailed]);


    const removeFromWishListHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    return (
        <Row xs={12} className='mt-2'>
            <Col xs={12}>
                {isEmailed ? (
                    <p style={{color: 'green'}}>Email sent!</p>

                ):(
                    <p>Ask the experts!</p>
                )}
                <Form onSubmit={submitHandler}>
                    <Row xs={12}>
                        <Col xs={8}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='name'
                                              placeholder='Enter name'
                                              value={userName}
                                              onChange={(e) => setUserName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type='email'
                                              placeholder='Enter email'
                                              value={userEmail}
                                              onChange={(e) => setUserEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Inquire</Form.Label>
                                <Form.Control as="textarea"
                                              value={userText}
                                              placeholder='Items on the right will be included in the email '
                                              onChange={(e) => setUserText(e.target.value)}
                                              rows={3}
                                />
                            </Form.Group>

                            {userName === '' || userEmail === '' ?
                                (   <Button type='submit'
                                            disabled
                                            variant='primary'
                                            onClick={() => {setIsEmailed(true)}}
                                >Email Inquiry</Button>
                                ):(
                                    <Button type='submit'
                                            variant='primary'
                                            onClick={() => {setIsEmailed(true)}}
                                    >Email Inquiry</Button>
                                )
                            }


                        </Col>
                        <Col xs={4} className='m-0 p-0'>

                            <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    // <ListGroup.Item key={item.product} className='global_bisonDarkFadedBgColorHover'>
                                    // <Link to={`products/${item.product}`}>
                                        <ListGroup.Item key={item._id}
                                                        className='global_bisonDarkFadedBgColorHover stick-margins'>
                                            <Row xs={12}>
                                                <Col className='my-auto' md={4}>
                                                    <Image src={item.image} alt={item.name} fluid
                                                           className='rounded h-100 w-100'/>
                                                </Col>
                                                <Col className='my-auto' md={8}>
                                                    {item.name}
                                                </Col>
                                                {/*<Col className='my-auto' md={2}>*/}
                                                {/*    /!*<Button type='button' variant='light'*!/*/}
                                                {/*    /!*        // onClick={() => removeFromWishListHandler(item.product)}*!/*/}
                                                {/*    /!*>*!/*/}
                                                {/*    /!*    <i onClick={() => removeFromWishListHandler(item.product)} className='fas fa-trash global_cursor'> </i>*!/*/}
                                                {/*    /!*</Button>*!/*/}
                                                {/*</Col>*/}
                                            </Row>
                                        </ListGroup.Item>
                                    // </Link>
                                ))}
                            </ListGroup>

                        </Col>
                        {/*<Button onClick={() => {submitHandler()}} type='submit' variant='primary'>Email Inquiry</Button>*/}
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