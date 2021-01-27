import React, {useEffect, useState} from 'react'
import FormContainer from "../FormContainer";
import Message from "../Message";
import Loader from "../Loader";
import {Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../actions/userActions";


const WishListEmail = ({userInfo, cart, cartItems}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [prouctTitle, setProductTitle] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();


    useEffect(() => {
        if (userInfo) {
            // history.push(redirect)
        }
    }, [userInfo]);

    const title = () => {
        cartItems.map(item =>
            item.name
        )
    };

    const submitHandler = (e) => {
        e.preventDefault();


    };


    return (
        <Row xs={12} className='mt-2'>
            <Col xs={12}>
                <Form onSubmit={submitHandler}>
                    <Row xs={12}>
                        <Col xs={8}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='name'
                                              placeholder='Enter name'
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type='email'
                                              placeholder='Enter email'
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Inquire</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                            </Form.Group>
                            <Button type='submit' variant='primary'>Email Inquiry</Button>
                        </Col>
                        <Col xs={4} className='m-0 p-0'>

                            <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    // <ListGroup.Item key={item.product} className='global_bisonDarkFadedBgColorHover'>
                                    <ListGroup.Item key={item.product}>
                                        <Row xs={12}>
                                            <Col className='my-auto' md={4}>
                                                <Image src={item.image} alt={item.name} fluid
                                                       className='rounded h-100 w-100'/>
                                            </Col>
                                            <Col className='my-auto' md={6}>
                                                {item.name}
                                            </Col>
                                            <Col className='my-auto' md={2}>
                                                {/*<Button type='button' variant='light'*/}
                                                {/*        // onClick={() => removeFromWishListHandler(item.product)}*/}
                                                {/*>*/}
                                                {/*    <i className='fas fa-trash'> </i>*/}
                                                {/*</Button>*/}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

                        </Col>
                        {/*<Button type='submit' variant='primary'>Email Inquiry</Button>*/}
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