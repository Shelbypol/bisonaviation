// constant - reducer - action - fire off in component
import axios from 'axios'
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_FAIL,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_FAIL,
    PRODUCT_LIST_CAT_SUCCESS,
    PRODUCT_LIST_CAT_REQUEST,
    PRODUCT_LIST_CAT_FAIL
} from '../constants/productConstants'
// import {ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS} from "../constants/orderConstants";

// actions creators
// redux thunk allows us to add a function within a function
// fire this action off in the component

// /ACTION FOR PRODUCT LIST DETAILS
export const listProducts = (keyword = '', pageNumber = '') => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);

        dispatch ({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};

// ACTION FOR IND PRODUCT DETAILS
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch ({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${ userInfo.token }`
            }
        };

        await axios.delete(`/api/products/${id}`, config);

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: message,
        })
    }
};

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST,
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${ userInfo.token }`
            }
        };

        const { data } = await axios.post(`/api/products/`, {} ,config);

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data
        });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: message,
        })
    }
};

export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST,
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ userInfo.token }`
            }
        };

        const { data } = await axios.put(`/api/products/${product._id}`, product ,config);

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data
        });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: message,
        })
    }
};
export const createProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST,
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ userInfo.token }`
            }
        };

        await axios.post(`/api/products/${productId}/reviews`, review ,config);

        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
        });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: message,
        })
    }
};

// /ACTION FOR LIST TOP PRODUCTS
export const listTopProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_TOP_REQUEST });

        const { data } = await axios.get(`/api/products/top`);

        dispatch ({
            type: PRODUCT_TOP_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: PRODUCT_TOP_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};


// /ACTION FOR LIST PRODUCTS IN CATEGORY
export const listProductsInCat = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_CAT_REQUEST });

        const { data } = await axios.get(`/api/products/categories`);

        dispatch ({
            type: PRODUCT_LIST_CAT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: PRODUCT_LIST_CAT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};
