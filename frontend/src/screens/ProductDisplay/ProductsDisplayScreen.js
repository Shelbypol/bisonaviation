import React, {useLayoutEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import Meta from "../../components/Meta";
import CategoryManufacturerDisplay from "../../components/ProductDisplay/CategoryManufacturerDisplay";
import {Jumbotron} from "reactstrap";
import StickyHeader from "../../components/Headers-Nav-Footer/StickyHeader";
import {Route} from "react-router-dom";
import SearchBox from "../../components/SearchBox";

const ProductsDisplayScreen = ({match, history}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

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

            <Jumbotron className='bg-white mt-n5 mb-0 p-0' fluid>

                <>
                    <Meta title='Bison | Products'/>

                    <Row xs={12} className='CatMan-nav-menu'>
                        {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}

                        <CategoryManufacturerDisplay match={match} history={history}/>

                    </Row>
                </>

            </Jumbotron>

        </>
    )
};

export default ProductsDisplayScreen;