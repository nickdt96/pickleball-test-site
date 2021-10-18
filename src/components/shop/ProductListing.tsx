import { RootState, store } from "../../store";
import Client, { Product } from "shopify-buy";
import {
  CLIENT_CREATED,
  PRODUCTS_FETCHED,
  CHECKOUT_CREATED,
  SHOP_INFO_FETCHED
} from "../../store/shopify/types";
import Cart from "./Cart";
import Products from "./Products";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {
  //eslint-ignore-next-line
  const [client, setClient] = React.useState(
    Client.buildClient({
      storefrontAccessToken: "a1178a7f9b78103ca595c3965e8075c9",
      domain: "rcc-test-store2.myshopify.com"
    })
  );
  const [product, setProduct] = React.useState<Product[]>();
  const { products: reduxProducts } = useSelector(
    (state: RootState) => state.shopify
  );

  const handleCategoryChange = (categoriesStr: string) => {
    loadItems(categoriesStr);
  };

  // load for the first time
  useEffect(() => {
    store.dispatch({ type: CLIENT_CREATED, payload: { client } });
  }, []);

  async function loadItems(categories: string) {
    let query = {
      query: categories === "" ? "" : `${categories}`,
      sortBy: "price",
      first: 10
    };

    client.product.fetchQuery(query).then((products) => {
      setProduct(products);
      store.dispatch({
        type: PRODUCTS_FETCHED,
        payload: {
          products
        }
      });
    });

    const shop = await client.shop.fetchInfo();
    store.dispatch({ type: SHOP_INFO_FETCHED, payload: { shop } });

    // cart stuff here
    /*
    client.checkout.create().then((res) => {
      console.log(` res -> checkout create -> ${JSON.stringify(res)}`);
    });

    //client.checkout.addLineItems("Z2lkOi8vc2hvcGlmeS9DaGVja291dC8wYTE5MTY3OWM4ZmJmMGVjNzNiMDIwMWJmODJhNmZkNT9rZXk9MGViNGMwNTFhNWI1ZjFhMGQ4MzI4ZDg3YjNlZGQzMDI=",[{ variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5MDgxMDQyNzgxOTM=", quantity: 1 }]);

    client.checkout.addLineItems("Z2lkOi8vc2hvcGlmeS9DaGVja291dC8wYTE5MTY3OWM4ZmJmMGVjNzNiMDIwMWJmODJhNmZkNT9rZXk9MGViNGMwNTFhNWI1ZjFhMGQ4MzI4ZDg3YjNlZGQzMDI=", [{variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDYwNjUwNDYxNjExMw==", quantity: 22}])
      .then((checkoutAdd) => {
        console.log(` checkoutAdd -> ${JSON.stringify(checkoutAdd)}`);
      });
    */

    //console.log(client.checkout.fetch("Z2lkOi8vc2hvcGlmeS9DaGVja291dC8wYTE5MTY3OWM4ZmJmMGVjNzNiMDIwMWJmODJhNmZkNT9rZXk9MGViNGMwNTFhNWI1ZjFhMGQ4MzI4ZDg3YjNlZGQzMDI="));
  }

  async function handleLoadMoreItems() {
    const moreItems = await client.fetchNextPage(product ? product : []);

    // not sure why, but I have to convert to type of any and then to Product[]
    let moreItemsAny: any = moreItems;
    let items: Product[] = moreItemsAny.model;

    // concatenate current redux value + the nextPage items
    let itemsFinal: Product[] = items.concat(
      reduxProducts ? reduxProducts : []
    );

    setProduct(items);
    store.dispatch({
      type: PRODUCTS_FETCHED,
      payload: {
        products: itemsFinal
      }
    });
  }

  return (
    <>
      <Products
        loadMoreItems={handleLoadMoreItems}
        changeCategories={handleCategoryChange}
      />
    </>
  );
};

export default ProductListing;
