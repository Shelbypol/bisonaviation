import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
// import HomeScreen from "./screens/HomeScreen";
import HomeScreen1 from "./screens/HomeScreen1";
import AvionicsScreen from "./screens/AvionicsScreen";
import MaintenanceScreen from "./screens/MaintenanceScreen";
import AogResponseScreen from "./screens/AogResponseScreen";
import AcquisitionScreen from "./screens/AcquisitionScreen";
import AircraftPartsScreen from "./screens/AircraftPartsScreen";
import EoIrMaintenanceScreen from "./screens/EoIrMaintenanceScreen";
import SystemSalesScreen from "./screens/SystemSalesScreen";
import EoIrPartsScreen from "./screens/EoIrPartsScreen";
import TeamScreen from "./screens/TeamScreen";


const App = ({location}) => {

    return (
        <Router>

            <Switch>
                <Route path='/admin/userlist' component={UserListScreen}/>
                <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
                <Route path='/admin/productlist' component={ProductListScreen} exact/>
                <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact/>
                <Route path='/admin/product/:id/edit' component={ProductEditScreen}/>
                <Route path='/admin/orderlist' component={OrderListScreen}/>

                <Fragment>
                        <Headers/>
                    <Route path='/' component={HomeScreen1} exact/>
                    {/*<Route path='/' component={HomeScreen} exact/>*/}
                    <Route path='/products' component={ProductsDisplayScreen} exact/>
                    <main className='py-3'>
                        <Container>
                            <Route path='/login' component={LoginScreen}/>
                            <Route path='/register' component={RegisterScreen}/>
                            <Route path='/profile' component={ProfileScreen}/>
                            <Route path='/product/:id' component={ProductScreen}/>
                            <Route path='/cart/:id?' component={CartScreen}/>
                            <Route path='/shipping' component={ShippingScreen}/>
                            <Route path='/payment' component={PaymentScreen}/>
                            <Route path='/placeorder' component={PlaceOrderScreen}/>
                            <Route path='/order/:id' component={OrderScreen}/>
                            <Route path='/thankyou/:id' component={ThankYouScreen}/>
                            <Route path='/search/:keyword' component={ProductsDisplayScreen} exact/>
                            <Route path='/page/:pageNumber' component={ProductsDisplayScreen} exact/>
                            <Route path='/search/:keyword/page/:pageNumber' component={ProductsDisplayScreen}/>
                            <Route path='/avionics' component={AvionicsScreen}/>
                            <Route path='/maintenance' component={MaintenanceScreen}/>
                            <Route path='/aog' component={AogResponseScreen}/>
                            <Route path='/acquisitions' component={AcquisitionScreen}/>
                            <Route path='/aircraftparts' component={AircraftPartsScreen}/>
                            <Route path='/eoir/maintenance' component={EoIrMaintenanceScreen}/>
                            <Route path='/systemsales' component={SystemSalesScreen}/>
                            <Route path='/eoir/parts' component={EoIrPartsScreen}/>
                            <Route path='/team' component={TeamScreen}/>
                        </Container>
                    </main>
                </Fragment>
            </Switch>
            <Footer/>
        </Router>
    );
};

export default App;
