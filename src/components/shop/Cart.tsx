import * as React from "react";
import LineItem from "./LineItemComponent";
import { RootState } from "../../store";
import { setCartOpen } from "../../store/cartUI/actions";
import { useSelector } from "react-redux";
import { Box, Drawer } from "@material-ui/core";

export default function CartComponent() {
  const shopify = useSelector((state: RootState) => state.shopify);
  const cartUI = useSelector((state: RootState) => state.cartUI);
  const { cart, client, cartItems } = shopify;
  const { isCartOpen } = cartUI;
  console.log(` shopify -> ${JSON.stringify(shopify)}`);
  console.log(` cart -> ${JSON.stringify(cart)}`);
  console.log(` isCartOpen -> ${JSON.stringify(isCartOpen)}`);
  console.log(` client.checkout -> ${JSON.stringify(client?.checkout)}`);
  console.log(` cartItems -> ${JSON.stringify(cartItems)}`);
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer =
    (anchor: any, open: boolean) => (event: { type: string; key: string }) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <div className={`Cart ${isCartOpen ? "Cart--open" : ""}`}>
      <header className="Cart__header">
        <h2>Your cart</h2>
        <button onClick={() => setCartOpen(false)} className="Cart__close">
          ×
        </button>
      </header>
      <ul className="Cart__line-items">
        {cart?.lineItems.map((lineItem) => {
          return <LineItem key={lineItem.id.toString()} lineItem={lineItem} />;
        })}
      </ul>
      <footer className="Cart__footer">
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Subtotal</div>
          <div className="Cart-info__pricing">
            <span className="pricing">$ {cart?.subtotalPrice}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Taxes</div>
          <div className="Cart-info__pricing">
            {/* <span className="pricing">$ {cart.totalTax}</span> */}
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Total</div>
          <div className="Cart-info__pricing">
            {/* <span className="pricing">$ {cart.totalPrice}</span> */}
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">
            Donation Amount
          </div>
          <div className="Cart-info__pricing">
            <span className="pricing">
              {/* ~$ {(cart.totalPrice * 0.35).toFixed(2)} */}
            </span>
          </div>
        </div>
        <button
          className="Cart__checkout button"
          onClick={() => {
            window.open(cart?.checkoutUrl);
          }}
        >
          Checkout
        </button>
      </footer>
    </div>
  );
}
