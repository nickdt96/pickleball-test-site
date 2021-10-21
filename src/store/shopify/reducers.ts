import {
    CLIENT_CREATED,
    PRODUCTS_FETCHED,
    CHECKOUT_CREATED,
    SHOP_INFO_FETCHED,
    CHANGE_CART_ITEMS,
    ShopifyState,
    ShopifyActionTypes,
} from "./types";

const initialState: ShopifyState = {
    client: null,
    cart: null,
    products: null,
    shop: null,
    cartItems: null,
};

export function shopifyReducer(
    state = initialState,
    action: ShopifyActionTypes
): ShopifyState {
    switch (action.type) {
        case CLIENT_CREATED:
            return { ...state, client: action.payload.client };
        case PRODUCTS_FETCHED:
            return { ...state, products: action.payload.products };
        case CHECKOUT_CREATED:
            return { ...state, cart: action.payload.cart };
        case SHOP_INFO_FETCHED:
            return { ...state, shop: action.payload.shop };
        case CHANGE_CART_ITEMS:
            return { ...state, cartItems: action.payload.cartItems };
        default:
            return state;
    }
}
