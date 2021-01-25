import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {Card, Button, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../actions/cartActions";
import {listProductDetails} from "../../actions/productActions";
import {createOrder} from "../../actions/orderActions";
import {listMyWishLists} from "../../actions/wishListActions";


const Product = ({product, history, match}) => {

    const [activeHeart, setActiveHeart] = useState(false);

    const dispatch = useDispatch();

    // const productDetails = useSelector(state => state.productDetails);
    // const{ product } = productDetails;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const orderCreate = useSelector(state => state.orderCreate);
    const {order, success, error} = orderCreate;

    useEffect(() => {
        // if(userInfo){
        //    listMyWishLists();
        //    alreadySaved()
        // }

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


    // const sentenceCapitalization = (mySentence) => {
    //     const words = mySentence.split(" ");
    //     for (let i = 0; i < words.length; i++) {
    //         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    //     }
    //     return words.join(" ");
    // };

    return (
        <Card className='my-3 mx-0 rounded border-0'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' className='img-fluid d-flex justify-content-center'/>
            </Link>
            <Card.Body>
                <Card.Text as='div'>

                    {activeHeart ? (
                        <p onClick={unlike} className='global_cursor global_bisonRedTxt'>saved</p>
                    ) : (
                        <p onClick={like} className='global_cursor global_bisonRedTxt'>&#60;3</p>
                    )}

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
                        {/*<strong>*/}
                        {/*    {sentenceCapitalization(product.name)}*/}
                        {product.name}
                        {/*</strong>*/}
                    </Card.Text>
                </Link>

                <Card.Text as='h5' className='d-flex justify-content-center'>
                    ${product.price}
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