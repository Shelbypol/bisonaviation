import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button, Form, Tabs, Tab} from 'react-bootstrap'
import Rating from '../../components/ProductDisplay/Rating'
import {listProductDetails, createProductReview} from '../../actions/productActions'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import {PRODUCT_CREATE_REVIEW_RESET} from "../../constants/productConstants";
import Meta from "../../components/Meta";
import ReactImageMagnify from "react-image-magnify";
import {addToCart, removeFromCart} from "../../actions/cartActions";

const ProductScreen = ({history, match}) => {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

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

    useEffect(() => {
        if (successProductReview) {
            alert('Review Submitted!');
            setRating(0);
            setComment('');
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
        }
        dispatch(listProductDetails(match.params.id))


    }, [dispatch, match, successProductReview, activeHeart, match, wishList]);

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

    function ControlledTabs() {
        const [key, setKey] = useState('Description');

        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className='mt-3 mb-3'
            >
                <Tab eventKey="Description" title="Description">
                    <p>{product.description}</p>
                </Tab>
                <Tab eventKey="In the Box" title="In the Box">
                    <p>{product.includedParts}</p>
                </Tab>
            </Tabs>
        );
    }


    return (
        <>
            <Link className='btn btn-light mt-1 mb-3 pt-0 pb-1 px-1' to='/products'>
                Go back
            </Link>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                <>

                    <Meta title={product.name}/>

                    <Row className='mt-n4'>
                        <Col className='product-page-section fluid d-flex justify-content-center' md={6}>
                            <div className="fluid__image-container ProductScreen_img-magAb">
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: product.name,
                                        isFluidWidth: true,
                                        src: product.image
                                    },
                                    largeImage: {
                                        src: product.image,
                                        width: 1200,
                                        height: 1800,
                                        enlargedImageContainerClassName: 'border-0',
                                    },
                                        enlargedImagePosition: 'over',
                                    isHintEnabled: true,
                                    shouldHideHintAfterFirstActivation: false,
                                }} />
                            </div>
                        </Col>
                        <Col className='product-page-section' md={6}>

                            {/*AVAILABLE*/}
                            <ListGroup variant='flush'>
                                <ListGroup.Item className='border-0 py-0'>
                                    {!product.isAvailable && (
                                        <i>not available </i>
                                    )}
                                </ListGroup.Item>

                                {/* NAME */}
                                <ListGroup.Item className='border-0'>
                                    {product.isPromo && (
                                        <p className='flag red global_accentFont mt-n1 mb-0 mx-0'>{product.isPromoType}</p>
                                    )}
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>

                                {/* PART # */}
                                <ListGroup.Item className='border-0 mt-n4 mb-3'>
                                   Part #:&nbsp; {product.partNumber}
                                </ListGroup.Item>


                                <Row xs={12} className='mt-n3 '>
                                    <Col xs={2}>
                                        <ListGroup.Item className='border-0 d-flex justify-content-start'>
                                            {/* LIKE BTN */}
                                            {activeHeart ? (
                                                <>
                                            <span onClick={unlike}
                                                 className='global_cursor'  style={{color: 'rgba(200, 0, 0, 1)', fontSize: '1.3em'}}>
                                                <i className="mt-auto fas fa-heart "> </i>
                                            </span>
                                                </>
                                            ) : (
                                                <>
                                            <span className='global_cursor' onClick={like} style={{fontSize: '1.3em'}}>
                                                <i className="mt-auto fas fa-heart"> </i>
                                            </span>
                                                </>
                                            )}
                                        </ListGroup.Item>
                                    </Col>
                                    <Col xs={10}>
                                        {/* PRICE */}
                                        <ListGroup.Item className='mt-1 border-0'>
                                            <h5>${product.price}</h5>
                                        </ListGroup.Item>
                                    </Col>
                                </Row>

                                <ControlledTabs/>

                            </ListGroup>
                        </Col>
                    </Row>

                </>
            )}

        </>
    )
};

export default ProductScreen