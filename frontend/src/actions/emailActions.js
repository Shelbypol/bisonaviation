import axios from 'axios'
import {
    EMAIL_ADD_ITEM,
    EMAIL_REMOVE_ITEM,
} from '../constants/emailConstants'
import mongoose from "mongoose";

// use thunk so pass in async
export const addToEmail = (userName, userEmail, userText, isEmailed, products) => async (dispatch, getState) => {
    dispatch({
        type: EMAIL_ADD_ITEM,
        payload: {
            userName: userName,
            userEmail: userEmail,
            userText: userText,
            isEmailed: isEmailed,
            items: [{
                products
            }]
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
