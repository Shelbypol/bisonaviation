import { EMAIL_ADD_ITEM, EMAIL_REMOVE_ITEM, EMAIL_RESET } from "../constants/emailConstants";

export const emailReducer = (state = { emailItems: [] }, action) => {
    switch(action.type){
        case EMAIL_ADD_ITEM:
            const item = action.payload;

            const existItem = state.emailItems.find(x => x.product === item.product);
            if(existItem){
                return {
                    ...state,
                    emailItems: state.emailItems.map(x => x.product === existItem.product ? item : x)
                }
            }else{
                return {
                    ...state,
                    emailItems: [...state.emailItems, item]
                }
            }
        case EMAIL_REMOVE_ITEM:
            return {
                ...state,
                emailItems: state.emailItems.filter(x => x.product !== action.payload)
            };

        case EMAIL_RESET:
            return { emailItems: [] };
        default:
            return state
    }
};
