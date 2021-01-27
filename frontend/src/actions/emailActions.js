import axios from 'axios'
import {
    EMAIL_ADD_ITEM,
    EMAIL_REMOVE_ITEM,
} from '../constants/emailConstants'
import mongoose from "mongoose";

// use thunk so pass in async
export const addToEmail = (id) => async (dispatch, getState) => {
    // const { data } = await axios.get(`/api/products/${id}`);
    const {data} = await axios.get(`/api/products/${id}`);

    dispatch({
        type: EMAIL_ADD_ITEM,
        payload: {
                product: data.product,
                isEmailed: data.isEmailed,
                name: data.name,
                price: data.price,
                image: data.image,
                qty: 1

            }
    });

    localStorage.setItem('emailItems', JSON.stringify(getState().email.emailItems))
};

export const removeFromEmail = (id) => (dispatch, getState) => {
    dispatch({
        type: EMAIL_REMOVE_ITEM,
        payload: id
    });

    localStorage.setItem('emailItems', JSON.stringify(getState().email.emailItems))
};
