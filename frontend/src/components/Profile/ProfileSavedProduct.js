import React, {useEffect, useState} from "react";
import {Col, Image,  Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {addToEmail} from "../../actions/emailActions";
import {useDispatch} from "react-redux";
import {deleteWishListItem} from "../../actions/wishListActions";

const ProfileSavedProduct = ({wishes, item, userInfo}) => {

    const [activeHeart, setActiveHeart] = useState(false);
    const [activeEmail, setActiveEmail] = useState(false);


    const [userProducts, setUserProducts] = useState([]
    );

    console.log(userProducts);

    const dispatch = useDispatch();

    // const email = useSelector(state => state.email);
    // const {emailItems} = email;

    useEffect(() => {
        checkRepeatId();
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

    const removeFromEmailListHandler = () => {
        setActiveEmail(!activeEmail);
        // dispatch(removeFromEmail(item.product))
    };

    const checkRepeatId = () => {

        item._id !== item._id  && setUserProducts.push(item)
    };

    const deleteHandler = (id) => {
        dispatch(deleteWishListItem(id));
    };

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