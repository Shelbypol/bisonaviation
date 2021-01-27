import React, {useEffect, useState} from "react";
import {Col, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {addToEmail, removeFromEmail} from "../../actions/emailActions";
import {useDispatch, useSelector} from "react-redux";
import Message from "../Message";
import {createWishList, deleteWishListItem, emailWishList, listMyWishLists} from "../../actions/wishListActions";
import ProfileEmailState from "./ProfileEmailState";


const ProfileSavedProduct = ({wishList, wishes, item, product}) => {
    const [activeEmail, setActiveEmail] = useState(false);

    const email = useSelector(state => state.email);
    const {emailItems} = email;

    const dispatch = useDispatch();

    // useEffect(() => {

    // dispatch(emailItems)

    // }, [dispatch, email]);

    const addToEmailListHandler = (id) => {
        setActiveEmail(!activeEmail);
    };

    const removeFromEmailListHandler = (id) => {
        setActiveEmail(!activeEmail);
        dispatch(removeFromEmail(id))
    };

    const deleteHandler = (id) => {
        dispatch(deleteWishListItem(id));
    };

    return (
        <>
            <Row xs={10}>



                                    {/*<Row  xs={12}>*/}
                                        <Col xs={2}>
                                            {/*<Link to={`/product/${item.product}`}>*/}
                                                <Image src={item.image} alt={item.name} fluid
                                                       rounded/>
                                            {/*</Link>*/}
                                        </Col>
                                        <Col xs={2} className='d-flex align-items-center'>
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col xs={2} className='d-flex justify-content-center align-items-center'>
                                            <Link to={`/product/${item.product}`}>
                                                <strong>${item.price}</strong>
                                            </Link>
                                        </Col>
                                        <Col xs={2} onClick={() => deleteHandler(wishes._id)}
                                             className='global_bisonDarkFadedBgColorHover d-flex justify-content-center align-items-center'>
                                            <i className='fas fa-trash'> </i>
                                        </Col>
                                        {activeEmail ? (
                                            <Col xs={2} onClick={() => removeFromEmailListHandler(item._id)}
                                                 className='global_cursor d-flex justify-content-center align-items-center'
                                                 style={{backgroundColor: 'green'}}>
                                                <i className='fas fa-envelope'> </i>
                                            </Col>
                                        ) : (
                                            <Col xs={2} onClick={() => addToEmailListHandler(item._id)}
                                                 className='global_cursor d-flex justify-content-center align-items-center'>
                                                <i className='fas fa-envelope'> </i>
                                            </Col>

                                        )
                                        }


                                    </Row>

            {/*        )))}*/}
            {/*    /!*))}*!/*/}
            {/*</Row>*/}
            <Row xs={2}>
                <ProfileEmailState/>
            </Row>

        </>
    )
};
export default ProfileSavedProduct