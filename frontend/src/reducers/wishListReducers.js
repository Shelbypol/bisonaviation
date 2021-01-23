import {
    WISHLIST_CREATE_REQUEST,
    WISHLIST_CREATE_SUCCESS,
    WISHLIST_CREATE_FAIL,
    WISHLIST_DETAILS_FAIL,
    WISHLIST_DETAILS_REQUEST,
    WISHLIST_DETAILS_SUCCESS,
    WISHLIST_LIST_MY_FAIL,
    WISHLIST_LIST_MY_REQUEST,
    WISHLIST_LIST_MY_SUCCESS,
    WISHLIST_LIST_MY_RESET,
    WISHLIST_LIST_FAIL,
    WISHLIST_LIST_REQUEST,
    WISHLIST_LIST_SUCCESS,
    WISHLIST_EMAIL_FAIL,
    WISHLIST_EMAIL_REQUEST,
    WISHLIST_EMAIL_SUCCESS,
    WISHLIST_EMAIL_RESET
} from "../constants/wishListConstants";


export const wishListCreateReducers = (state = {}, action ) => {
    switch(action.type) {
        case WISHLIST_CREATE_REQUEST:
            return {
                loading: true,
            };
        case WISHLIST_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                wishlist: action.payload,
            };
        case WISHLIST_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state
    }
};

export const wishListDetailsReducers = (state = { loading: true, wishListItems: []}, action ) => {
    switch(action.type) {
        case WISHLIST_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WISHLIST_DETAILS_SUCCESS:
            return {
                loading: false,
                wishListItems : action.payload,
            };
        case WISHLIST_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state
    }
};

export const wishListMyReducer = (state = { wishlists: []}, action ) => {
    switch(action.type) {
        case WISHLIST_LIST_MY_REQUEST:
            return {
                loading: true,
            };
        case WISHLIST_LIST_MY_SUCCESS:
            return {loading: false, wishlists: action.payload,
            };
        case WISHLIST_LIST_MY_FAIL:
            return {loading: false, error: action.payload,
            };
        case WISHLIST_LIST_MY_RESET:
            return {
                wishlists: []
            };

        default:
            return state
    }
};

// WISHLIST UPDATE REDUCER
export const wishListReducer = (state = { wishLists: [] }, action) => {
    switch(action.type){
        case WISHLIST_LIST_REQUEST:
            return { loading: true };
        case WISHLIST_LIST_SUCCESS:
            return { loading: false, success: true, wishLists: action.payload };
        case WISHLIST_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
};

export const wishListEmailReducer = (state = {}, action ) => {
    switch(action.type) {
        case WISHLIST_EMAIL_REQUEST:
            return {
                loading: true,
            };
        case WISHLIST_EMAIL_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case WISHLIST_EMAIL_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case WISHLIST_EMAIL_RESET:
            return {};
        default:
            return state
    }
};