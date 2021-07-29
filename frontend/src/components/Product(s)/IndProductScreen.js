import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {PRODUCT_CREATE_REVIEW_RESET} from "../../constants/productConstants";
import {Row, Col, ListGroup, Tabs, Tab, Jumbotron, Container} from 'react-bootstrap'
import {addToCart, removeFromCart} from "../../actions/cartActions";
import {listProductDetails} from '../../actions/productActions'
import Message from '../Message'
import Loader from '../Loader'
import Meta from "../Meta";

const IndProductScreen = ({history, match}) => {
    const [width, setWidth] = useState(window.innerWidth);

    const [activeHeart, setActiveHeart] = useState(false);

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;

    const productReviewCreate = useSelector(state => state.productReviewCreate);
    const {success: successProductReview, error: errorProductReview} = productReviewCreate;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        if (successProductReview) {
            alert('Review Submitted!');
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
        }
        checkCart();
        dispatch(listProductDetails(match.params.id));
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);

    }, [dispatch, match, successProductReview, activeHeart, match, wishList, width, cartItems]);

    const like = () => {
        setActiveHeart(!activeHeart);
        dispatch(addToCart(product._id, 1));
        // history.push(`/cart/${id}?qty=1`);
    };

    const unlike = () => {
        setActiveHeart(!activeHeart);
        dispatch(removeFromCart(product._id))
        // history.push(`/cart/${id}?qty=1`);
    };

    const checkCart = () => {
        cartItems.length >= 0 ? (
            cartItems.map(item => (
                item.product === product._id && (
                    setActiveHeart(true)
                )
            ))
        ) : (
            setActiveHeart(false)
        )
    };

    function ControlledTabs() {
        const [key, setKey] = useState('Description');

        return (
            <Tabs
                id="productTab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className='mt-3 mb-3'
            >
                <Tab eventKey="Description" title="DESCRIPTION" tabClassName='bg-dark text-white'>
                    <p className=''>{product.description}</p>
                </Tab>
            </Tabs>
        );
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };





    return (
        <>
            {/*<Jumbotron className='bg-white px-0 mt-n3 pb-5 '>*/}
            {/*    <Container className='mb-0 px-0 pt-3 pb-0'>*/}

            <Row className='global_white-bg display-flex justify-content-center' style={{minHeight: '75vh'}}>
                <Col xs={10}>

                    <Link className='global_blood-red global_cursor bg-transparent btn btn-light mb-3 mt-4 pb-1 px-1'
                          to='/products'>
                        back
                    </Link>
                    {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                        <>
                            <Meta title={product.name}/>

                            <Row className='bg-transparent'>
                                <Col className='bg-white d-flex justify-content-center mx-lg-3 mx-sm-0'
                                     style={{height: '50%'}}
                                     md={6}
                                     xs={12}>
                                    <img src={product.image} alt={product.name} className='h-50 w-50'/>

                                </Col>
                                <Col className='bg-transparent global_cursor' md={5} xs={12}>

                                    {/*AVAILABLE*/}
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item className=' border-0 py-0 bg-transparent'>
                                            {!product.isAvailable && (
                                                <i className='mt-5'>not available </i>
                                            )}
                                        </ListGroup.Item>

                                        {/* NAME */}
                                        <ListGroup.Item
                                            className='border-0 bg-transparent global_blood-red ProductScreen_img'>
                                            {product.isPromo && (
                                                <p className='flag red global_accentFont mb-0 mt-lg-n2 mt-2'
                                                   style={{marginLeft: '-6vw'}}>{product.isPromoType}</p>
                                            )}

                                            <h1 className='mt-4'>{product.name}</h1>
                                        </ListGroup.Item>

                                        {/* PART # */}
                                        <ListGroup.Item className='border-0 mb-3 bg-transparent'>
                                            <h5>
                                        <span className='global_black font-weight-bolder'>
                                        Part #:
                                        </span>
                                                &nbsp; {product.partNumber}
                                            </h5>
                                        </ListGroup.Item>

                                        <Row xs={12} className='ml-1'>
                                            <Col xs={2}>
                                                <ListGroup.Item
                                                    className='border-0 d-flex justify-content-center bg-transparent'>
                                                    {/* LIKE BTN */}
                                                    {activeHeart ? (
                                                        <>
                                                        <span onClick={unlike}
                                                              className='global_cursor global_blue'
                                                              style={{ fontSize: '1.5em'}}>
                                                            <i className="mt-auto fas fa-thumbs-up bg-transparent"> </i>
                                                        </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                        <span className='global_cursor' onClick={like}
                                                              style={{fontSize: '1.5em'}}>
                                                            <i className="mt-auto fas fa-thumbs-up bg-transparent"> </i>
                                                        </span>
                                                        </>
                                                    )}
                                                </ListGroup.Item>
                                            </Col>
                                            <Col xs={10}>
                                                {/* PRICE */}
                                                <ListGroup.Item className='mt-1 border-0 bg-transparent'>
                                                    <h4>
                                                        ${product.price}
                                                    </h4>
                                                </ListGroup.Item>
                                            </Col>

                                        </Row>

                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row className='mb-5'>
                                <Col xs={12}>
                                    <ControlledTabs/>
                                </Col>
                            </Row>
                        </>
                    )}
                </Col>
            </Row>

            {/*    </Container>*/}
            {/*</Jumbotron>*/}
        </>
    )
};

export default IndProductScreen