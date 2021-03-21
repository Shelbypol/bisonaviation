import React from 'react'
import {Row, Container} from 'react-bootstrap'
import Meta from "../../components/Meta";
import CategoryManufacturerDisplay from "../../components/ProductDisplay/CategoryManufacturerDisplay";
import {Jumbotron} from "reactstrap";
import StickyHeader from "../../components/Headers-Nav-Footer/StickyHeader";

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
            <StickyHeader/>
            <Jumbotron className='global_cultured-bg mt-n5 p-0' fluid>

            {/*<Container className='mx-auto p-0'>*/}
                <>
                    <Meta title='Bison | Products'/>

                    <Row xs={12} className='CatMan-nav-menu'>

                        <CategoryManufacturerDisplay match={match} history={history}/>

                    </Row>
                </>
            {/*</Container>*/}
            </Jumbotron>

        </>
    )
};

export default ProductsDisplayScreen;