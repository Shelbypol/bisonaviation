import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {Card, Button, ListGroup, Nav} from 'react-bootstrap'
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
        <Card className='my-3 mx-0 rounded border-0'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'
                          className='img-fluid d-flex justify-content-center mt-auto'/>
            </Link>
            <Card.Body className='d-flex flex-column'>
                <Card.Text as='div' className='m-0 p-0'>

                    {/*<Card.Text as='div'>*/}
                    {/*<Rating value={product.rating} text={`${product.numReviews} reviews`}>*/}
                    {/*    {product.rating} from {product.numReviews} reviews}*/}
                    {/*</Rating>*/}
                    {/*<strong>*/}
                    {/*    /!*{sentenceCapitalization(product.brand)}*!/*/}
                    {/*    {product.brand}*/}
                    {/*</strong>*/}

                </Card.Text>

                <Link to={`/product/${product._id}`}>
                    <Card.Text as='div' className='p-0 m-0'>
                        {product.name}
                    </Card.Text>
                </Link>
                <Card.Text as='h5' className='d-flex mt-auto'>
                    {/*<Card.Text as='h5' className='justify-content-start'>*/}
                    {/*    {activeHeart ? (*/}
                    {/*        <p onClick={unlike}*/}
                    {/*           className='global_cursor global_bisonRedTxt'>saved</p>*/}
                    {/*    ) : (*/}
                    {/*        <p onClick={like}*/}
                    {/*           className='global_cursor global_bisonRedTxt'>&#60;3</p>*/}
                    {/*    )}*/}

                    <Card.Text as='h5' className='d-flex justify-content-start'>
                        {activeHeart ? (
                            <>
                            <span onClick={unlike} style={{color: 'rgba(90, 00, 09, 1', fontSize: '1.3em'}}>
                                <i className="m-auto fas fa-heart "> </i>
                            </span>
                            </>
                        ) : (
                            <>
                            <span onClick={like} style={{fontSize: '1.3em'}}>
                                <i className="m-auto fas fa-heart"> </i>
                            </span>
                            </>
                        )}



                    </Card.Text>
                    <Card.Text as='h5' className='d-flex justify-content-end'>
                        <p>${product.price}</p>
                    </Card.Text>
                </Card.Text>
                {/*<Card.Text>*/}
                {/*    */}
                {/*    <Button*/}
                {/*        onClick={addToCartHandler}*/}
                {/*        className='btn btn-block p-1 global_RedFontWhiteBgBtn'*/}
                {/*        type='button'*/}
                {/*        // disabled={product.countInStock === 0 }*/}
                {/*    >*/}
                {/*        <i className='fal fa-heart global_bisonRedFontWhiteBg animations_icon-font-size animations_icon-spin'> </i>*/}
                {/*        /!*ADD TO WISHLIST*!/*/}
                {/*        /!*<i className="fal fa-star global_RedFontWhiteBg"> </i>*!/*/}
                {/*    </Button>*/}
                {/*</Card.Text>*/}
            </Card.Body>
        </Card>
    )
};

export default Product