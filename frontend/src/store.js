import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,
    productCateoriesReducer
} from './reducers/productReducers'
import{ cartReducer } from './reducers/cartReducers'
import { emailReducer } from "./reducers/emailReducers";
import { userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer
} from "./reducers/userReducers";
import {
    orderCreateReducers,
    orderDetailsReducers,
    orderPayReducers,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer
} from "./reducers/orderReducers";
import {
    wishListCreateReducers,
    wishListDetailsReducers,
    wishListEmailReducer,
    wishListMyReducer,
    wishListReducer,
    wishListDeleteReducer
} from "./reducers/wishListReducers";

// product list part of the state
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    productsCat: productCateoriesReducer,
    cart: cartReducer,
    email: emailReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducers,
    orderDetails: orderDetailsReducers,
    orderPay: orderPayReducers,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,

    wishListCreate: wishListCreateReducers,
    wishListDetails: wishListDetailsReducers,
    wishListEmail: wishListEmailReducer,
    wishListMy: wishListMyReducer,
    wishList: wishListReducer,
    wishListDelete: wishListDeleteReducer,
});

// LOCAL STORAGE cart items & users
const cartItemFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

const emailItemFromStorage = localStorage.getItem('emailItems')
    ? JSON.parse(localStorage.getItem('emailItems'))
    : [];

const initialState = {
    cart: {
        cartItems: cartItemFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    email: {
        emailItems: emailItemFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage }
};


const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware( ...middleware ))
);

export default store