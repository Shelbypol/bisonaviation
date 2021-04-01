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

    const wishListMy = useSelector(state => state.wishListMy);
    const {loading: loadingOrders, error: errorOrders, wishList} = wishListMy;

    const wishListDelete = useSelector(state => state.wishListDelete);
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = wishListDelete;

    const email = useSelector(state => state.email);
    const {emailItems} = email;

    useEffect(() => {

        dispatch(listMyWishLists())

    }, [dispatch, history, successDelete]);

    return (
        <>
            <h2>Wishlist</h2>
            <Row xs={12}>
                <Col xs={9}>
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
                                                                    className='border-0 global_bisonDarkFadedBgColorHover global_cursor'>
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

                <Col xs={3}>
                    <ProfileEmailState userInfo={userInfo} emailItems={emailItems}/>
                    {/*<WishListEmail/>*/}
                </Col>
            </Row>
        </>
    )
};
export default ProfileSavedWishList
