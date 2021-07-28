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
    // const [itemArr, setItemArr] = useState([]);

    const [userProducts, setUserProducts] = useState(
        wishList.map(wishes => (
            wishes.wishListItems.map(item => (
                item
            )))));

    const dispatch = useDispatch();

    // const cart = useSelector(state => state.cart);
    // const {cartItems} = cart;

    // const email = useSelector(state => state.email);
    // const {emailItems} = email;

    useEffect(() => {
        // wishListRepeatsCheck()
    }, [dispatch, activeHeart]);


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

    // console.log(itemArr);

    const removeFromEmailListHandler = () => {
        setActiveEmail(!activeEmail);
        // dispatch(removeFromEmail(item.product))
    };

    const deleteHandler = (id) => {
        dispatch(deleteWishListItem(id));
    };

    //passing item mapped in saved wishlist to check against new wishlist mapped item
    // const wishListRepeatsCheck = () => {
    //     {
    //         wishList.map(wishes => (
    //             wishes.wishListItems.map(nestedItem => (
    //                 nestedItem._id !== item._id && setItemArr.push(nestedItem)
    //             ))
    //         ))
    //     }
    // };

    return (
        <>
            <Row xs={12}>
                <Col md={3}  xs={6}>
                    <Link to={`/product/${item.product}`}>
                        <Image src={item.image} alt={item.name} fluid
                               rounded/>
                    </Link>
                </Col>
                <Col md={5} xs={6} className='d-flex align-items-center'>
                    <Link to={`/product/${item.product}`}>
                        {item.name}
                    </Link>
                </Col>

                <Col md={2} xs={6} onClick={() => deleteHandler(wishes._id)}
                     className='pt-2 global_blood-red d-flex justify-content-end align-items-center'>
                    <i className='fas fa-trash'> </i>
                </Col>


            </Row>
            <hr className='d-sm-block d-md-none border-bottom'/>


            {/*<Row xs={12}>*/}
            {/*    <Col md={3}  xs={6}>*/}
            {/*        <Link to={`/product/${item.product}`}>*/}
            {/*        <Image src={item.image} alt={item.name} fluid*/}
            {/*               rounded/>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*    <Col md={5} xs={6} className='d-flex align-items-center'>*/}
            {/*        <Link to={`/product/${item.product}`}>*/}
            {/*            {item.name}*/}
            {/*        </Link>*/}
            {/*    </Col>*/}

            {/*    <Col md={2} xs={6} onClick={() => deleteHandler(wishes._id)}*/}
            {/*         className='pt-2 global_blood-red d-flex justify-content-end align-items-center'>*/}
            {/*        <i className='fas fa-trash'> </i>*/}
            {/*    </Col>*/}


            {/*</Row>*/}
            {/*    <hr className='d-sm-block d-md-none border-bottom'/>*/}


        </>
    )
};
export default ProfileSavedProduct