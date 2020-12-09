import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from "./components/Footer";
import ProductsDisplayScreen from "./screens/ProductsDisplayScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
import HomeScreen from "./screens/HomeScreen";
import AvionicsScreen from "./screens/AvionicsScreen";
import MaintenanceScreen from "./screens/MaintenanceScreen";
import AogResponseScreen from "./screens/AogResponseScreen";
import AcquisitionScreen from "./screens/AcquisitionScreen";
import AircraftPartsScreen from "./screens/AircraftPartsScreen";
import EoIrMaintenanceScreen from "./screens/EoIrMaintenanceScreen";
import SystemSalesScreen from "./screens/SystemSalesScreen";
import EoIrPartsScreen from "./screens/EoIrPartsScreen";
import TeamScreen from "./screens/TeamScreen";

const App = () => {
  return (
      <Router>
          <Header />
        {/*<Container className='col-xl-10 col-lg-12 col-md-12 col-sm-12 m-auto p-0'>*/}
          <Route path='/' component={HomeScreen} exact />
        {/*</Container>*/}
        <main className='py-3'>
          <Container>
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen}/>
            <Route path='/product/:id' component={ProductScreen}/>
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/thankyou/:id' component={ThankYouScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route path='/admin/productlist' component={ProductListScreen} exact />
            <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
            <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
            <Route path='/admin/orderlist' component={OrderListScreen} />
            <Route path='/search/:keyword' component={ProductsDisplayScreen} exact />
            <Route path='/page/:pageNumber' component={ProductsDisplayScreen} exact />
            <Route path='/search/:keyword/page/:pageNumber' component={ProductsDisplayScreen} />
            <Route path='/products' component={ProductsDisplayScreen} exact />
            <Route path='/avionics' component={AvionicsScreen} />
            <Route path='/maintenance' component={MaintenanceScreen} />
            <Route path='/aog' component={AogResponseScreen} />
            <Route path='/acquisitions' component={AcquisitionScreen} />
            <Route path='/aircraftparts' component={AircraftPartsScreen} />
            <Route path='/eoir/maintenance' component={EoIrMaintenanceScreen} />
            <Route path='/systemsales' component={SystemSalesScreen} />
            <Route path='/eoir/parts' component={EoIrPartsScreen} />
            <Route path='/team' component={TeamScreen} />

            {/*<Route path='/' component={HomeScreen} exact />*/}
          </Container>
        </main>
        <Footer/>
      </Router>
  );
};

export default App;
