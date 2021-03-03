import React, {useEffect} from 'react'
import {Row, Container} from 'react-bootstrap'
import Meta from "../../components/Meta";
import CategoryManufacturerDisplay from "../../components/ProductDisplay/CategoryManufacturerDisplay";
import {useDispatch, useSelector} from "react-redux";
import {listMyOrders} from "../../actions/orderActions";
import {Jumbotron} from "reactstrap";

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
        <>
            <Jumbotron className='global_cultured-bg m-0 p-0' fluid>

            <Container className='mx-auto p-0'>
                <>
                    <Meta title='Bison | Products'/>

                    <Row xs={12} className='CatMan-nav-menu'>

                        <CategoryManufacturerDisplay match={match} history={history}/>

                    </Row>
                </>
            </Container>
            </Jumbotron>

        </>
    )
};

export default ProductsDisplayScreen;