import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {Card, Button, ListGroup, Nav, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../actions/cartActions";
import {LinkContainer} from "react-router-bootstrap";


const Product = ({product, history, match}) => {

    const [activeHeart, setActiveHeart] = useState(false);

    const dispatch = useDispatch();


    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;


    useEffect(() => {


    }, [dispatch, activeHeart, match, wishList]);

    // const alreadySaved = (id) => {
    //     let savedArr = [];
    //     wishList.map(wishes => (
    //         wishes.wishListItems.map(item => (
    //             console.log(item.id)
    //             // savedArr.push(item.id)
    //         ))));
    //     // return(savedArr.includes(id))
    // };

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

    return (
        <>
            <Row xs={12} className='my-2 border-bottom'>
                    <Col xs={4}>

                        {/*PROMO*/}
                        {product.isPromo && (
                            <p className='flag red global_accentFont mt-n1 mb-0 mx-0'>{product.isPromoType}</p>
                        )}

                        {/* IMAGE */}
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image} alt={product.name}
                                      className='img-fluid d-flex justify-content-center'/>
                        </Link>

                        <h5 className='d-flex justify-content-start'>
                            {activeHeart ? (
                                <>
                                            <span onClick={unlike}
                                                  style={{color: 'rgba(200, 0, 0, 1)', fontSize: '1.3em'}}>
                                                <i className="mt-auto fas fa-heart "> </i>
                                            </span>
                                </>
                            ) : (
                                <>
                                            <span onClick={like} style={{fontSize: '1.3em'}}>
                                                <i className="mt-auto fas fa-heart"> </i>
                                            </span>
                                </>
                            )}
                        </h5>
                    </Col>

                    <Col xs={8}>
                            <Link to={`/product/${product._id}`}>
                                    {product.name}
                            </Link>

                        {/*AVAILABLE*/}
                        {!product.isAvailable && (
                            <i>not available </i>
                        )}

                            <h5 className='d-flex justify-content-end'>
                                <p>${product.price}</p>
                            </h5>
                    </Col>
            </Row>
        </>
    )
};

export default Product