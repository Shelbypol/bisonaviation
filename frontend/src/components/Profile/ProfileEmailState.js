import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import WishListEmail from "../Wishlist/WishListEmail";

const ProfileEmailState = ({emailItems}) => {

    const dispatch = useDispatch();

    console.log(emailItems);
    useEffect(() => {

    }, [dispatch, emailItems]);

    return (
        <>
            {emailItems.map(item => (
                <p key={item._id} >{item.name}</p>
            ))}
        </>
    )

};

export default ProfileEmailState