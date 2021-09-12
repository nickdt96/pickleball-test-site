import {
    CLIENT_CREATED,
    PRODUCTS_FETCHED,
    CHECKOUT_CREATED,
    SHOP_INFO_FETCHED,
    ShopifyState,
    ShopifyActionTypes,
} from "./types";

const initialState: ShopifyState = {
    client: null,
    cart: null,
    products: null,
    shop: null,
};

export function shopifyReducer(
    state = initialState,
    action: ShopifyActionTypes
): ShopifyState {
    console.log("action.type -> ", action.type);
    console.log("action.payload -> ", action.payload);
    switch (action.type) {
        case CLIENT_CREATED:
            return { ...state, client: action.payload.client };
        case PRODUCTS_FETCHED:
            return { ...state, products: action.payload.products };
        case CHECKOUT_CREATED:
            return { ...state, cart: action.payload.cart };
        case SHOP_INFO_FETCHED:
            return { ...state, shop: action.payload.shop };
        default:
            return state;
    }
}
