import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import { store } from "../../store";
import Client from "shopify-buy";
import {
    CLIENT_CREATED,
    PRODUCTS_FETCHED,
    CHECKOUT_CREATED,
    SHOP_INFO_FETCHED,
} from "../../store/shopify/types";
import Cart from "./Cart";
import Products from "./Products";

const ProductListing = () => {

  async function setupConnection() {
    const client = Client.buildClient({
      storefrontAccessToken: "a1178a7f9b78103ca595c3965e8075c9",
      domain: "rcc-test-store2.myshopify.com",
    });

    //console.log(`client -> ${JSON.stringify(client)}`);
  
    store.dispatch({ type: CLIENT_CREATED, payload: { client } });
  
    //console.log(`about to build products -> ${JSON.stringify(client.product.fetchAll())}`);

          // products
          const products = await client.product.fetchAll(2);
          console.log(`products -> ${JSON.stringify(products)}`);
          store.dispatch({
              type: PRODUCTS_FETCHED,
              payload: {
                  products,
              },
          });

          client.product.fetchAll().then((products2) => {
            // Do something with the products
            console.log("products2 -> ", products2);
          });

          let query = {
            query: "product_type:'9MM' ", //AND tag:'aeropress' OR tag:'espresso'",
            sortBy: "test"
          }
          
          client.product.fetchQuery(query).then((products3) => {
            console.log("products3 -> ", products3);
          });

          //console.log(`products -> ${JSON.stringify(products)}`);

  
          //console.log(`about to cart -> ${JSON.stringify(client.checkout.create())}`);
          
          // cart
          //const cart = await client.checkout.create();
          //store.dispatch({ type: CHECKOUT_CREATED, payload: { cart } });

          //console.log(`cart -> ${JSON.stringify(cart)}`);
  
  
          // shop
          //const shop = await client.shop.fetchInfo();
          //store.dispatch({ type: SHOP_INFO_FETCHED, payload: { shop } });

          //console.log(`shop -> ${JSON.stringify(shop)}`);
  
  }

  setupConnection();
  

  return (
    <>
    <Products />
    <Cart />
    </>
  )
}

export default ProductListing;