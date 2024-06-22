import { GET_ALL_PROPERTY, GET_ALL_WISHLIST, } from "../types";

const initialState = {
    getAllWishlist: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROPERTY:
            return {
                ...state,
                getAllProperty: action.payload
            }
            case GET_ALL_WISHLIST:
            return {
                ...state,
                getAllWishlist: action.payload
            }
        default:
            return state;
    }
}