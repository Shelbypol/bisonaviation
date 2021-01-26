import axios from 'axios'
import {
    EMAIL_ADD_ITEM,
    EMAIL_REMOVE_ITEM,
} from '../constants/emailConstants'

// use thunk so pass in async
export const addToEmail = (id, qty) => async(dispatch, getState) => {
    // const { data } = await axios.get(`/api/products/${id}`);
    const { data } = await axios.get(`/api/wishlist/${id}`);

    dispatch({
        type: EMAIL_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            isEmailed: data.isEmailed,
            // qty: data.qty
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
