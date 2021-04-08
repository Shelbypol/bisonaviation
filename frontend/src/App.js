import React, {Fragment, useEffect, useLayoutEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Headers from "./components/Headers-Nav-Footer/Headers";
import Footer from "./components/Headers-Nav-Footer/Footer";
import ProductsDisplayScreen from "./screens/ProductDisplay/ProductsDisplayScreen";
import ProductScreen from "./screens/ProductDisplay/ProductScreen";
import CartScreen from "./screens/Payment/CartScreen";
import LoginScreen from "./screens/Login-Register/LoginScreen";
import RegisterScreen from "./screens/Login-Register/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/Payment/ShippingScreen";
import PaymentScreen from "./screens/Payment/PaymentScreen";
import PlaceOrderScreen from "./screens/Payment/PlaceOrderScreen";
import OrderScreen from "./screens/Payment/OrderScreen";
import UserListScreen from "./screens/AdminScreens/UserListScreen";
import UserEditScreen from "./screens/AdminScreens/UserEditScreen";
import ProductListScreen from "./screens/AdminScreens/ProductListScreen";
import ProductEditScreen from "./screens/AdminScreens/ProductEditScreen";
import OrderListScreen from "./screens/AdminScreens/OrderListScreen";
import ThankYouScreen from "./screens/Payment/ThankYouScreen";
import HomeScreen from "./screens/HomeScreen2";
import AvionicsScreen from "./screens/AvionicsScreen";
import MaintenanceScreen from "./screens/MaintenanceScreen";
import FlirScreen from "./screens/FlirScreen";
import TeamScreen from "./screens/TeamScreen";
import ContactScreen from "./screens/ContactScreen";
import TermsScreen from "./screens/TermsScreen";
import TermsFlirScreen from "./screens/TermsFlirScreen";
import WishListScreen from "./screens/WishListScreen/WishListScreen"
import StickyHeader from "./components/Headers-Nav-Footer/StickyHeader";
import MobileHeader from "./components/Headers-Nav-Footer/MobileHeader";
import {listProducts} from "./actions/productActions";
import {useDispatch} from "react-redux";


const App = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 1000;

    const dispatch = useDispatch();

    useEffect(() => {

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [dispatch, width]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    return (
        <Router>

            <Switch>
                <Route path='/admin/userlist' component={UserListScreen}/>
                <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
                <Route path='/admin/productlist' component={ProductListScreen} exact/>
                <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact/>
                <Route path='/admin/product/:id/edit' component={ProductEditScreen}/>
                <Route path='/admin/orderlist' component={OrderListScreen}/>
                <Route path='/products' component={ProductsDisplayScreen} exact/>
                <Route path='/search/:keyword' component={ProductsDisplayScreen} exact/>
                <Route path='/page/:pageNumber' component={ProductsDisplayScreen} exact/>
                <Route path='/search/:keyword/page/:pageNumber' component={ProductsDisplayScreen}/>
                    <Route path='/product/:id' component={ProductScreen}/>

                {/* ================    STICKY HEADER ONLY W/ FOOTER    =================*/}
                {/*<Fragment>*/}
                    <Route path='/wishlist' component={WishListScreen}/>
                    <Route path='/flir' component={FlirScreen}/>
                    <Route path='/team' component={TeamScreen}/>
                    <Route path='/maintenance' component={MaintenanceScreen}/>
                    <Route path='/avionics' component={AvionicsScreen}/>
                {/*</Fragment>*/}

                {/* ================    STICKY & DESKTOP HEADER W/ FOOTER    =================*/}
                <Fragment>
                    <Headers/>
                    <Route path='/' component={HomeScreen} exact/>
                    <Route path='/contact' component={ContactScreen}/>
                    <Route path='/terms' component={TermsScreen}/>
                    <Route path='/flir-terms' component={TermsFlirScreen}/>
                    <Route path='/register' component={RegisterScreen}/>
                    <Route path='/profile' component={ProfileScreen}/>

                    {/*<Container className='mb-0 pb-0'>*/}
                    <Route path='/login' component={LoginScreen}/>
                    <Route path='/cart/:id?' component={CartScreen}/>
                    <Route path='/shipping' component={ShippingScreen}/>
                    <Route path='/payment' component={PaymentScreen}/>
                    <Route path='/placeorder' component={PlaceOrderScreen}/>
                    <Route path='/order/:id' component={OrderScreen}/>
                    <Route path='/thankyou/:id' component={ThankYouScreen}/>
                    {/*</Container>*/}
                    <Footer/>
                </Fragment>
                {/*<Footer/>*/}
            </Switch>

        </Router>
    );
};

export default App;
