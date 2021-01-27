import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import WishListEmail from "../Wishlist/WishListEmail";

const ProfileEmailState = () => {

    const email = useSelector(state => state.email);
    const {emailItems} = email;

    console.log(emailItems);

    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch, emailItems]);

    return (
        <>
            {emailItems.map(item => (
                <Col key={item._id} xs={12}>{item.name}</Col>
            ))}
        </>
    )

};

export default ProfileEmailState