import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Footer from "./components/HeaderFooter/Footer";
import ProductsScreen from "./components/Product(s)/ProductsScreen";
import ProductScreen from "./components/Product(s)/ProductScreen";
import SignInScreen from "./components/SignIn/SignInScreen";
import RegisterScreen from "./components/Register/RegisterScreen";
import ProfileScreen from "./components/Profile/ProfileScreen";
import UserListScreen from "./components/AdminScreens/UserListScreen";
import UserEditScreen from "./components/AdminScreens/UserEditScreen";
import AdminScreenProductListScreen from "./components/AdminScreens/AdminScreenProductListScreen";
import AdminScreensProductEditScreen from "./components/AdminScreens/AdminScreensProductEditScreen";
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

const App = () => {


    return (
        <Router>

            <Fragment>

                <Header/>

                <Switch>

                    <Route path='/' component={HomeScreen} exact/>
                    <Route path='/contact' component={ContactScreen}/>
                    <Route path='/terms' component={TermsScreen}/>
                    <Route path='/flir-terms' component={TermsFlirScreen}/>
                    <Route path='/register' component={RegisterScreen}/>
                    <Route path='/profile' component={ProfileScreen}/>
                    <Route path='/login' component={SignInScreen}/>

                    <Route path='/flir' component={FlirScreen}/>
                    <Route path='/team' component={TeamScreen}/>
                    <Route path='/maintenance' component={MaintenanceScreen}/>
                    <Route path='/avionics' component={AvionicsScreen}/>

                    <Route path='/admin/userlist' component={UserListScreen}/>
                    <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
                    <Route path='/admin/productlist' component={AdminScreenProductListScreen} exact/>
                    <Route path='/admin/productlist/:pageNumber' component={AdminScreenProductListScreen} exact/>
                    <Route path='/admin/product/:id/edit' component={AdminScreensProductEditScreen}/>

                    <Route path='/products' component={ProductsScreen} exact/>
                    <Route path='/search/:keyword' component={ProductsScreen} exact/>
                    <Route path='/page/:pageNumber' component={ProductsScreen} exact/>
                    <Route path='/search/:keyword/page/:pageNumber' component={ProductsScreen}/>
                    <Route path='/product/:id' component={ProductScreen}/>
                    <Route path='/wishlist' component={WishListScreen}/>
                </Switch>

                <Footer/>

            </Fragment>

        </Router>
    );
};

export default App;
