import {
    WISHLIST_CREATE_FAIL,
    WISHLIST_CREATE_SUCCESS,
    WISHLIST_CREATE_REQUEST,
    WISHLIST_DETAILS_SUCCESS,
    WISHLIST_DETAILS_REQUEST,
    WISHLIST_DETAILS_FAIL,
    WISHLIST_LIST_MY_SUCCESS,
    WISHLIST_LIST_MY_REQUEST,
    WISHLIST_LIST_MY_FAIL,
    WISHLIST_LIST_SUCCESS,
    WISHLIST_LIST_REQUEST,
    WISHLIST_LIST_FAIL,
    WISHLIST_EMAIL_SUCCESS,
    WISHLIST_EMAIL_REQUEST,
    WISHLIST_EMAIL_FAIL

} from "../constants/wishListConstants";
import axios from "axios";
import { logout } from "./userActions";

export const createWishList = (wishList) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WISHLIST_CREATE_REQUEST,
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ userInfo.token }`
            }
        };

        const {data} = await axios.post(`/api/wishlist`, wishList, config);

        dispatch({
            type: WISHLIST_CREATE_SUCCESS,
            payload: data
        });


    } catch (error) {
        dispatch({
            type: WISHLIST_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};

export const getWishListDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WISHLIST_DETAILS_REQUEST,
        });

        const {userLogin: {userInfo}} = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const {data} = await axios.get(`/api/wishlist/${id}`, config);

        dispatch({
            type: WISHLIST_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: WISHLIST_DETAILS_FAIL,
            payload: message,
        })
        // catch (error) {
        //     dispatch({
        //         type: ORDER_DETAILS_FAIL,
        //         payload: error.response && error.response.data.message
        //             ? error.response.data.message
        //             : error.message,
        //     })
        // }
    }
};


// export const deliverOrder = (order) => async (dispatch, getState) => {
export const emailWishList = (wishList) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WISHLIST_EMAIL_REQUEST,
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${ userInfo.token }`
            }
        };

        const {data} = await axios.put(`/api/wishlist/${wishList._id}/emailed`, {}, config);

        dispatch({
            type: WISHLIST_EMAIL_SUCCESS,
            payload: data
        });


    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: WISHLIST_EMAIL_FAIL,
            payload: message,
        })
    }
};


export const listMyWishLists = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: WISHLIST_LIST_MY_REQUEST,
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${ userInfo.token }`
            }
        };

        const {data} = await axios.get(`/api/wishlist/mywishlists`, config);

        dispatch({
            type: WISHLIST_LIST_MY_SUCCESS,
            payload: data
        });


    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: WISHLIST_LIST_MY_FAIL,
            payload: message,
        })
    }
};

export const listWishLists = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: WISHLIST_LIST_REQUEST,
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${ userInfo.token }`
            }
        };

        const { data } = await axios.get('/api/wishlist', config);

        dispatch({
            type: WISHLIST_LIST_SUCCESS,
            payload: data
        });


    } catch (error){
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: WISHLIST_LIST_FAIL,
            payload: message,
        })
    }
};