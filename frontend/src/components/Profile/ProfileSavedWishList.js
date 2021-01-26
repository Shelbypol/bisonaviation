import React, {useEffect, useState} from "react";
import {Form, Button, Row, Col, Table, ListGroup, Image, Tab, Nav, Card} from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import {Link} from "react-router-dom";
import {addToEmail, removeFromEmail} from "../../actions/emailActions";
import {deleteWishListItem, listMyWishLists} from "../../actions/wishListActions";
import {addToCart, removeFromCart} from "../../actions/cartActions";

const ProfileSavedWishList = ({match, history}) => {

    const [activeEmail, setActiveEmail] = useState(false);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {product} = productDetails;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const wishListDelete = useSelector(state => state.wishListDelete);
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = wishListDelete;

    useEffect(() => {

        dispatch(listMyWishLists())

    }, [dispatch, history, successDelete]);

    const addToEmailList = () => {
        setActiveEmail(!activeEmail);
        dispatch(addToCart(product._id, 1));
        // history.push(`/cart/${id}?qty=1`);
    };

    const removeFromEmailList = () => {
        setActiveEmail(!activeEmail);
        dispatch(removeFromCart(product._id))
        // history.push(`/cart/${id}?qty=1`);
    };

    const deleteHandler = (id) => {
        dispatch(deleteWishListItem(id));
    };

    return (
        <>
            <h2>Saved Wishlist</h2>
            {loadingOrders
                ? <Loader/>
                : errorOrders
                    ? <Message variant='danger'>{errorOrders}</Message>
                    : (
                        <Row xs={12}>
                            <Col xs={10}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        {wishList.map(wishes => (
                                            wishes.wishListItems.map(item => (
                                                item.length === 0 ? <Message>Wishlist is empty</Message> :
                                                    // <ListGroup.Item key={item._id}
                                                    //                 className='border-0 global_bisonDarkFadedBgColorHover global_cursor'>
                                                    //     <Row xs={12}>
                                                    //         <Col xs={2}>
                                                    //             <Link to={`/product/${item.product}`}>
                                                    //                 <Image src={item.image} alt={item.name} fluid
                                                    //                        rounded/>
                                                    //             </Link>
                                                    //         </Col>
                                                    //         <Col xs={4} className='d-flex align-items-center'>
                                                    //             <Link to={`/product/${item.product}`}>
                                                    //                 {item.name}
                                                    //             </Link>
                                                    //         </Col>
                                                    //         <Col xs={4} className='d-flex justify-content-center align-items-center'>
                                                    //             <Link to={`/product/${item.product}`}>
                                                    //                 <strong>${item.price}</strong>
                                                    //             </Link>
                                                    //         </Col>
                                                    //         <Col md={2} onClick={() => deleteHandler(wishes._id)} className='global_bisonDarkFadedBgColorHover d-flex justify-content-center align-items-center'>
                                                    //             {/*<Button type='button' variant='light'*/}
                                                    //             {/*        onClick={() => deleteHandler(wishes._id)}>*/}
                                                    //                 <i className='fas fa-trash'> </i>
                                                    //             {/*</Button>*/}
                                                    //         </Col>
                                                    //         <Col>
                                                    //             {activeEmail ? (
                                                    //                 <p onClick={removeFromEmail} className='global_cursor global_bisonRedTxt'>added</p>
                                                    //             ) : (
                                                    //                 <p onClick={addToEmail} className='global_cursor global_bisonRedTxt'>inquire</p>
                                                    //             )}
                                                    //         </Col>
                                                    //
                                                    //     </Row>
                                                    // </ListGroup.Item>
                                            ))
                                        ))}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                        </Row>

                    )}
        </>
    )
};
export default ProfileSavedWishList
