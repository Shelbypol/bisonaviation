import React, {Fragment, useEffect, useLayoutEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Footer from "./components/HeaderFooter/Footer";
import ProductsScreen from "./components/Product(s)/ProductsScreen";
import ProductScreen from "./components/Product(s)/ProductScreen";
import CartScreen from "./components/Cart/Payment/CartScreen";
import SignInScreen from "./components/SignIn/SignInScreen";
import RegisterScreen from "./components/Register/RegisterScreen";
import ProfileScreen from "./components/Profile/ProfileScreen";
import ShippingScreen from "./components/Cart/Payment/ShippingScreen";
import PaymentScreen from "./components/Cart/Payment/PaymentScreen";
import PlaceOrderScreen from "./components/Cart/Payment/PlaceOrderScreen";
import OrderScreen from "./components/Cart/Payment/OrderScreen";
import UserListScreen from "./components/AdminScreens/UserListScreen";
import UserEditScreen from "./components/AdminScreens/UserEditScreen";
import ProductListScreen from "./components/AdminScreens/ProductListScreen";
import ProductEditScreen from "./components/AdminScreens/ProductEditScreen";
import OrderListScreen from "./components/Cart/OrderListScreen";
import ThankYouScreen from "./components/Cart/Payment/ThankYouScreen";
import HomeScreen from "./components/Home/HomeScreen";
import AvionicsScreen from "./components/Avionics/AvionicsScreen";
import MaintenanceScreen from "./components/Maintenance/MaintenanceScreen";
import FlirScreen from "./components/Flir/FlirScreen";
import TeamScreen from "./components/Team/TeamScreen";
import ContactScreen from "./components/Contact/ContactScreen";
import TermsScreen from "./components/Terms/TermsScreen";
import TermsFlirScreen from "./components/Terms/TermsFlirScreen";
import WishListScreen from "./components/Wishlist/WishListScreen"
import Header from "./components/HeaderFooter/Header";
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
                <Route path='/products' component={ProductsScreen} exact/>
                <Route path='/search/:keyword' component={ProductsScreen} exact/>
                <Route path='/page/:pageNumber' component={ProductsScreen} exact/>
                <Route path='/search/:keyword/page/:pageNumber' component={ProductsScreen}/>
                <Route path='/product/:id' component={ProductScreen}/>

                {/* ================    STICKY HEADER ONLY W/ FOOTER    =================*/}
                {/*<Route path='/wishlist' component={WishListScreen}/>*/}
                {/*<Route path='/flir' component={FlirScreen}/>*/}
                {/*<Route path='/team' component={TeamScreen}/>*/}
                {/*<Route path='/maintenance' component={MaintenanceScreen}/>*/}
                {/*<Route path='/avionics' component={AvionicsScreen}/>*/}

                {/* ================    STICKY / MOBILE HEADER W/ FOOTER    =================*/}
                <Fragment>

                    <Header/>

                    <Route path='/' component={HomeScreen} exact/>
                    <Route path='/contact' component={ContactScreen}/>
                    <Route path='/terms' component={TermsScreen}/>
                    <Route path='/flir-terms' component={TermsFlirScreen}/>
                    <Route path='/register' component={RegisterScreen}/>
                    <Route path='/profile' component={ProfileScreen}/>
                    <Route path='/login' component={SignInScreen}/>
                    <Route path='/cart/:id?' component={CartScreen}/>
                    <Route path='/shipping' component={ShippingScreen}/>
                    <Route path='/payment' component={PaymentScreen}/>
                    <Route path='/placeorder' component={PlaceOrderScreen}/>
                    <Route path='/order/:id' component={OrderScreen}/>
                    <Route path='/thankyou/:id' component={ThankYouScreen}/>

                    <Route path='/wishlist' component={WishListScreen}/>
                    <Route path='/flir' component={FlirScreen}/>
                    <Route path='/team' component={TeamScreen}/>
                    <Route path='/maintenance' component={MaintenanceScreen}/>
                    <Route path='/avionics' component={AvionicsScreen}/>


                    <Footer/>
                </Fragment>
            </Switch>

        </Router>
    );
};

export default App;
