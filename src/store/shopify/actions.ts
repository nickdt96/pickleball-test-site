import { store } from "..";
import { LineItem, Cart } from "shopify-buy";
import { CHANGE_CART_ITEMS } from "./types";

export function addVariantToCart(variantId: string | number, quantity: number) {
  const { shopify } = store.getState();
  const { cart, client } = shopify;
  const lineItemsToAdd = [{ variantId, quantity }];
  console.log(` variantId -> ${JSON.stringify(variantId)}`);
  console.log(` quantity -> ${JSON.stringify(quantity)}`);
  console.log(` cart -> ${JSON.stringify(cart)}`);
  console.log(` shopify -> ${JSON.stringify(shopify)}`);
  console.log(` client -> ${JSON.stringify(client)}`);
  if (cart && client) {
    const checkoutId = cart.id;
    console.log(` checkoutId -> ${JSON.stringify(checkoutId)}`);
    console.log(` lineItemsToAdd -> ${JSON.stringify(lineItemsToAdd)}`);
    client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
        console.log(` checkout -> ${JSON.stringify(checkout)}`);
        store.dispatch({ type: CHANGE_CART_ITEMS, payload: { cartItems: checkout } });
    });
  }
}

export function decrementQuantity(lineItem: LineItem) {
  const updatedQuantity = lineItem.quantity - 1;
  updateQuantityInCart(lineItem.id, updatedQuantity);
}

export function incrementQuantity(lineItem: LineItem) {
  const updatedQuantity = lineItem.quantity + 1;
  updateQuantityInCart(lineItem.id, updatedQuantity);
}

export function removeLineItemFromCart(lineItemId: string | number) {
  const { shopify } = store.getState();
  const { cart, client } = shopify;
  if (client && cart) {
    const checkoutId = cart.id;
    client.checkout.removeLineItems(checkoutId, [lineItemId.toString()]);
  }
}

function updateQuantityInCart(id: string | number, quantity: number) {
  const { shopify } = store.getState();
  const { cart, client } = shopify;
  if (client && cart) {
    const checkoutId = cart.id;
    client.checkout.updateLineItems(checkoutId, [{ id, quantity }]);
  }
}
