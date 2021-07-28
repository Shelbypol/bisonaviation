import React, {useEffect} from "react";
import {Row, Col, ListGroup} from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listMyWishLists} from "../../actions/wishListActions";
import ProfileSavedProduct from "./ProfileSavedProduct";
import ProfileEmailState from "./ProfileEmailState";

const ProfileSavedWishList = ({match, history, userInfo}) => {

    // const [activeEmail, setActiveEmail] = useState(false);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {product} = productDetails;

    // const cart = useSelector(state => state.cart);
    // const {cartItems} = cart;

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const wishListDelete = useSelector(state => state.wishListDelete);
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = wishListDelete;

    const email = useSelector(state => state.email);
    const {emailItems} = email;

    useEffect(() => {

        dispatch(listMyWishLists())

    }, [dispatch, history, successDelete]);

    // const wishListRepeatsCheck = () => {
    //     {
    //         wishList.map(wishes => (
    //             wishes.wishListItems.map(item => (
    //
    //             ))
    //         ))
    //     }
    // };

    // console.log(wishList);

    return (
        <>
            <h2>Saved Items</h2>
            <Row>
                <Col xs={12}>
                    {loadingOrders
                        ? <Loader/>
                        : errorOrders
                            ? <Message variant='danger'>{errorOrders}</Message>
                            : (
                                <ListGroup variant='flush'>
                                    {wishList.map(wishes => (
                                        wishes.wishListItems.map(item => (
                                            item.length === 0 ? <Message>Wishlist is empty</Message> :
                                                <>
                                                    <ListGroup.Item key={wishes._id}
                                                                    className='border-0 global global_cursor'>
                                                        <ProfileSavedProduct
                                                            wishList={wishList} wishes={wishes} product={product}
                                                            item={item} userInfo={userInfo}/>
                                                    </ListGroup.Item>
                                                </>
                                        ))
                                    ))}
                                </ListGroup>
                            )}
                </Col>
            </Row>
        </>
    )
};
export default ProfileSavedWishList
