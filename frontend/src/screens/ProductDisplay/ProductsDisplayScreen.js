import React, {useEffect} from 'react'
import {Row, Container} from 'react-bootstrap'
import Meta from "../../components/Meta";
import CategoryManufacturerDisplay from "../../components/ProductDisplay/CategoryManufacturerDisplay";
import {useDispatch, useSelector} from "react-redux";
import {listMyOrders} from "../../actions/orderActions";

const ProductsDisplayScreen = ({match, history}) => {

    // const dispatch = useDispatch();
    //
    // const userLogin = useSelector(state => state.userLogin);
    // const {userInfo} = userLogin;
    //
    // const orderListMy = useSelector(state => state.orderListMy);
    // const {loading: loadingOrders, error: errorOrders, orders} = orderListMy;
    //
    //
    // useEffect(() => {
    //     if (userInfo) {
    //         dispatch(listMyOrders())
    //         console.log(listMyOrders())
    //     }
    //
    // }, [dispatch, userInfo]);


    return (
        <Container className='mx-n5'>
            <>
                <Meta title='Bison | Products'/>

                <Row xs={12}>

                        <CategoryManufacturerDisplay match={match} history={history} />

                </Row>
            </>
        </Container>
)
};

export default ProductsDisplayScreen;