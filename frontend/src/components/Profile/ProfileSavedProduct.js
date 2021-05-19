import React, {useEffect, useState} from "react";
import {Col, Image,  Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {addToEmail} from "../../actions/emailActions";
import {useDispatch, useSelector} from "react-redux";

import {deleteWishListItem, listMyWishLists} from "../../actions/wishListActions";
import {addToCart, removeFromCart} from "../../actions/cartActions";

const ProfileSavedProduct = ({wishList, wishes, item, product, userInfo}) => {
    const [activeHeart, setActiveHeart] = useState(false);

    const [activeEmail, setActiveEmail] = useState(false);
    const [userProducts, setUserProducts] = useState(
        wishList.map(wishes => (
            wishes.wishListItems.map(item => (
                item
            )))));

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    // const email = useSelector(state => state.email);
    // const {emailItems} = email;

    useEffect(() => {

    }, [dispatch, activeHeart, cartItems]);


    const addToEmailListHandler = () => {
        setActiveEmail(!activeEmail);
        if (userInfo) {
            dispatch(addToEmail(
                // userName,
                // userEmail,
                // userText,
                // isEmailed,
                userProducts,
            ));
        }

        // dispatch(addToEmail(item.product));
    };

    const removeFromEmailListHandler = () => {
        setActiveEmail(!activeEmail);
        // dispatch(removeFromEmail(item.product))
    };

    const deleteHandler = (id) => {
        dispatch(deleteWishListItem(id));
    };

    const like = () => {
        setActiveHeart(!activeHeart);
        dispatch(addToCart(wishes.wishListItems[0].product, 1));
        // history.push(`/cart/${id}?qty=1`);
    };

    const unlike = () => {
        setActiveHeart(!activeHeart);
        dispatch(removeFromCart(wishes.wishListItems[0].product))
        // history.push(`/cart/${id}?qty=1`);
    };


    return (
        <>
            <Row xs={12}>
                <Col md={3}  xs={6}>
                    {/*<Link to={`/product/${item.product}`}>*/}
                    <Image src={item.image} alt={item.name} fluid
                           rounded/>
                    {/*</Link>*/}
                </Col>
                <Col md={5} xs={6} className='d-flex align-items-center'>
                    <Link to={`/product/${item.product}`}>
                        {item.name}
                    </Link>
                </Col>

                <Col md={2} xs={6} onClick={() => like(item._id)}
                     className='pt-2 global_blue d-flex justify-content-center align-items-center'>

                    {activeHeart ? (
                        <>
                                            <span onClick={unlike}
                                                  className='global_cursor'
                                                  style={{fontSize: '1.3em'}}>
                                            <i className="mt-auto fas fa-envelope"> </i>
                                            </span>
                        </>
                    ) : (

                        <span className='global_cursor' onClick={like}
                              style={{fontSize: '1.3em'}}>
                                        <i className="mt-auto fas fa-envelope-open-text "> </i>
                                    </span>
                    )}

                </Col>

                <Col md={2} xs={6} onClick={() => deleteHandler(wishes._id)}
                     className='pt-2 global_blood-red d-flex justify-content-center align-items-center'>
                    <i className='fas fa-trash'> </i>
                </Col>


            </Row>
                <hr className='d-sm-block d-md-none border-bottom'/>


        </>
    )
};
export default ProfileSavedProduct