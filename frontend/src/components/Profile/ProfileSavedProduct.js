import React, {useState} from "react";
import {Col, Image,  Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {addToEmail} from "../../actions/emailActions";
import {useDispatch} from "react-redux";

import { deleteWishListItem} from "../../actions/wishListActions";



const ProfileSavedProduct = ({wishList, wishes, item, product, userInfo}) => {
    const [activeEmail, setActiveEmail] = useState(false);
    const [userProducts, setUserProducts] = useState(
        wishList.map(wishes => (
            wishes.wishListItems.map(item => (
                item
            )))));


    // const email = useSelector(state => state.email);
    // const {emailItems} = email;

    const dispatch = useDispatch();

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

    return (
        <>
            <Row xs={12}>
                <Col xs={4}>
                    {/*<Link to={`/product/${item.product}`}>*/}
                    <Image src={item.image} alt={item.name} fluid
                           rounded/>
                    {/*</Link>*/}
                </Col>
                <Col xs={4} className='d-flex align-items-center'>
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
                {/*{activeEmail ? (*/}
                {/*    // <Col xs={2} onClick={() => removeFromEmailListHandler}*/}
                {/*    <Col xs={2} onClick={removeFromEmailListHandler}*/}
                {/*         className='global_cursor d-flex justify-content-center align-items-center'*/}
                {/*         style={{backgroundColor: 'green'}}>*/}
                {/*        <i className='fas fa-envelope'> </i>*/}
                {/*    </Col>*/}
                {/*) : (*/}
                {/*    <Col xs={2} onClick={addToEmailListHandler}*/}
                {/*         className='global_cursor d-flex justify-content-center align-items-center'>*/}
                {/*        <i className='fas fa-envelope'> </i>*/}
                {/*    </Col>*/}


                {/*)*/}
                {/*}*/}


            </Row>

            {/*        )))}*/}
            {/*    /!*))}*!/*/}
            {/*</Row>*/}
            {/*<Row xs={2}>*/}
            {/*    <ProfileEmailState emailItems={emailItems} />*/}
            {/*</Row>*/}

        </>
    )
};
export default ProfileSavedProduct