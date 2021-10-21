import { Client, Shop, Cart, Product } from "shopify-buy";

export const CLIENT_CREATED = "CLIENT_CREATED";
export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED";
export const CHECKOUT_CREATED = "CHECKOUT_CREATED";
export const SHOP_INFO_FETCHED = "SHOP_INFO_FETCHED";
export const CHANGE_CART_ITEMS = "CHANGE_CART_ITEMS";

export interface ShopifyState {
    client: Client | null;
    shop: Shop | null;
    cart: Cart | null;
    products: Product[] | null;
    cartItems: Cart | null;
}

export interface ClientCreatedAction {
    type: typeof CLIENT_CREATED;
    payload: {
        client: any;
    };
}

export interface ShopInfoFetchedAction {
    type: typeof SHOP_INFO_FETCHED;
    payload: {
        shop: any;
    };
}

export interface ProductsFetchedAction {
    type: typeof PRODUCTS_FETCHED;
    payload: {
        products: any;
    };
}

export interface CheckoutCreatedAction {
    type: typeof CHECKOUT_CREATED;
    payload: {
        cart: any;
    };
}

export interface ChangeCartItemsAction {
    type: typeof CHANGE_CART_ITEMS;
    payload: {
        cartItems: any;
    };
}

export type ShopifyActionTypes =
    | ClientCreatedAction
    | ProductsFetchedAction
    | CheckoutCreatedAction
    | ShopInfoFetchedAction
    | ChangeCartItemsAction;
