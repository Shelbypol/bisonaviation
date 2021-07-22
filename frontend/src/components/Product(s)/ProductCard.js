import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {Row, Col, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../actions/cartActions";
import {listMyWishLists} from "../../actions/wishListActions";
import Message from "../Message";


const ProductCard = ({product, history, match}) => {

    const [activeHeart, setActiveHeart] = useState(false);

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listMyWishLists());
            userAlreadySaved();
        }
        // checkCart();
    }, [dispatch, activeHeart, match, history, cartItems, wishList]);


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

    // const checkCart = () => {
    //     cartItems.length >= 0 && (
    //         cartItems.map(item => (
    //             item.product === product._id && (
    //                 setActiveHeart(true)
    //             )
    //         ))
    //     )
    // };

// console.log(wishList);
    const userAlreadySaved = () => {
        let wishProductIdArr = [];

        wishList.map(wish => (
                wish.wishListItems.map(item => (
                       wishProductIdArr.push(item.product)
                    )
                )
            )
        );

        console.log('arr')
        console.log(wishProductIdArr);

        wishProductIdArr.map(userSavedProductId => (
            // console.log(userSavedProductId.product)
            userSavedProductId === product._id && (
                setActiveHeart(true)
            )
        ))

        // wishProductIdArr.map(wishId => (
        //     wishId === product._id && ( setActiveHeart(true))
        // ))
    };


    const MAX_LENGTH = 75;

    return (
        <>
            <Col sm={10} className='my-5'>

                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} alt={product.name}/>
                </Link>

                <Row className='py-3'>
                    <Col xs={6} className='d-flex justify-content-start'>
                        <>
                            {activeHeart ? (
                                <>
                                <span onClick={unlike}
                                      className='global_cursor global_blue'
                                      style={{fontSize: '1.3em'}}>
                                    <i className="mt-auto fas fa-thumbs-up"> </i>
                                    {/*<i className="mt-auto fas fa-heart"> </i>*/}
                                </span>
                                </>
                            ) : (

                                <span onClick={like}
                                      className='global_cursor'
                                      style={{fontSize: '1.3em'}}>
                                    <i className="mt-auto fas fa-thumbs-up"> </i>
                                    {/*<i className="mt-auto fas fa-heart "> </i>*/}
                                    </span>
                            )}

                        </>
                    </Col>
                    <Col xs={6} className='font-weight-bold d-flex justify-content-end'>
                        ${product.price}
                    </Col>
                </Row>


                <Link to={`/product/${product._id}`} className='pt-3'>
                    <Card.Title
                        className=' font-weight-bolder global_blood-red'>{product.name}</Card.Title>
                </Link>

                <Card.Subtitle>
                    {product.brand}
                </Card.Subtitle>

                <Row>
                    <Col xs={12} className='p-3'>
                        {product.description.length > MAX_LENGTH ?
                            (
                                <Card.Text>
                                    {`${product.description.substring(0, MAX_LENGTH)}`}<Link
                                    to={`/product/${product._id}`} className='global_blood-red'><br/>...Read
                                    more</Link>
                                </Card.Text>
                            ) :
                            <Card.Text>
                                <p>{product.description}</p>
                            </Card.Text>
                        }
                    </Col>
                </Row>

            </Col>

        </>
    )
};

export default ProductCard
