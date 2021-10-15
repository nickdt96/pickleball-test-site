import { RootState, store } from "../../store";
import Client, { Product } from "shopify-buy";
import {
  CLIENT_CREATED,
  PRODUCTS_FETCHED,
  CHECKOUT_CREATED,
  SHOP_INFO_FETCHED,
} from "../../store/shopify/types";
import Cart from "./Cart";
import Products from "./Products";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
//import Client from 'graphql-js-client';

const ProductListing = () => {

  //eslint-ignore-next-line
  const [client, setClient] = React.useState(
    Client.buildClient({
      storefrontAccessToken: "a1178a7f9b78103ca595c3965e8075c9",
      domain: "rcc-test-store2.myshopify.com",
    })
  );
  const [product, setProduct] = React.useState<Product[]>();
  const { products: reduxProducts } = useSelector((state: RootState) => state.shopify);


  useEffect(() => {
    store.dispatch({ type: CLIENT_CREATED, payload: { client } });
    loadInitialItems();
    
  }, [])

  async function loadInitialItems() {

    let query = {
      //query: "product_type:'9MM' ", //AND tag:'aeropress' OR tag:'espresso'",
      query: "",
      sortBy: "ID",
      first: 4
    }

    client.product.fetchQuery(query).then((products) => {
      console.log(`  products fetch -> ${JSON.stringify(products)}`);
      setProduct(products);
      store.dispatch({
        type: PRODUCTS_FETCHED,
        payload: {
            products,
        },
      });
    });

    const shop = await client.shop.fetchInfo();
    store.dispatch({ type: SHOP_INFO_FETCHED, payload: { shop } });
    console.log(`shop -> ${JSON.stringify(shop)}`);


    client.checkout.create().then((res) => {
      console.log(` res -> checkout create -> ${JSON.stringify(res)}`);
    });

    //client.checkout.addLineItems("Z2lkOi8vc2hvcGlmeS9DaGVja291dC8wYTE5MTY3OWM4ZmJmMGVjNzNiMDIwMWJmODJhNmZkNT9rZXk9MGViNGMwNTFhNWI1ZjFhMGQ4MzI4ZDg3YjNlZGQzMDI=",[{ variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5MDgxMDQyNzgxOTM=", quantity: 1 }]);

    client.checkout.addLineItems("Z2lkOi8vc2hvcGlmeS9DaGVja291dC8wYTE5MTY3OWM4ZmJmMGVjNzNiMDIwMWJmODJhNmZkNT9rZXk9MGViNGMwNTFhNWI1ZjFhMGQ4MzI4ZDg3YjNlZGQzMDI=", [{variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDYwNjUwNDYxNjExMw==", quantity: 22}])
      .then((checkoutAdd) => {
        console.log(` checkoutAdd -> ${JSON.stringify(checkoutAdd)}`);
      });

    console.log(client.checkout.fetch("Z2lkOi8vc2hvcGlmeS9DaGVja291dC8wYTE5MTY3OWM4ZmJmMGVjNzNiMDIwMWJmODJhNmZkNT9rZXk9MGViNGMwNTFhNWI1ZjFhMGQ4MzI4ZDg3YjNlZGQzMDI="));
  }


  async function handleLoadMoreItems() {

    const moreItems = await client.fetchNextPage(product ? product : []);

    // not sure why, but I have to convert to type of any and then to Product[]
    let moreItemsAny: any = moreItems;
    let items: Product[] = moreItemsAny.model;

    // concatenate current redux value + the nextPage items
    let itemsFinal: Product[] = items.concat(reduxProducts ? reduxProducts : []);
    
    setProduct(items);
    store.dispatch({
      type: PRODUCTS_FETCHED,
      payload: {
        products: itemsFinal,
      },
    });
  }

  return (
    <>
      <Products loadMoreItems={handleLoadMoreItems} />
    </>
  )
}

export default ProductListing;










/* SCRAP CODE
async function setupConnection() {


    //console.log(`client -> ${JSON.stringify(client)}`);

    store.dispatch({ type: CLIENT_CREATED, payload: { client } });

    const shopInfo = await client.shop.fetchInfo();
    console.log(` shopInfo -> ${JSON.stringify(shopInfo)}`);

    const shopPolicies = await client.shop.fetchPolicies();
    console.log(` shopPolicies -> ${JSON.stringify(shopPolicies)}`);

    const collections = await client.collection.fetchAllWithProducts();
    console.log(` collections -> ${JSON.stringify(collections)}`);

    //console.log(`about to build products -> ${JSON.stringify(client.product.fetchAll())}`);

    // products

    let query = {
      //query: "product_type:'9MM' ", //AND tag:'aeropress' OR tag:'espresso'",
      query: "product_type:'9MM' ",
      sortBy: "ID",
      first: 2
    }

    client.product.fetchQuery(query).then((products) => {
      console.log(`  products fetch -> ${JSON.stringify(products)}`);
      setProduct(products);
    });

    const products = await client.product.fetchAll(2);
    console.log(`products -> ${JSON.stringify(products)}`);
    store.dispatch({
        type: PRODUCTS_FETCHED,
        payload: {
            products,
        },
    });
    



    //let productsAll: GraphModel[] = [];
    //client.product.fetchAll().then((products2) => {
    // Do something with the products
    //console.log("products2 -> ", products2);
    //  productsAll = products2;
    //});


    //const productsfetchnextpage = client.fetchNextPage(productsAll);

    //console.log(`productsfetchnextpage -> ${JSON.stringify(productsfetchnextpage)}`);

     this works to get all 9MM categorical items
    let query = {
      query: "product_type:'9MM' ", //AND tag:'aeropress' OR tag:'espresso'",
      sortBy: "test"
    }
    

    let query = {
      query: "product_type:'9MM' ", //AND tag:'aeropress' OR tag:'espresso'",
      sortBy: "ID",
      first: 2
    }

    client.product.fetchQuery(query).then((products3) => {
      console.log(`products3 -> ${JSON.stringify(products3)}`);
      setProduct(products3);
      //productsAll = products3;
      //client.fetchNextPage(products3)
        
      //console.log(`productsfetchnextpage -> ${JSON.stringify(productsfetchnextpage)}`);
      
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
*/