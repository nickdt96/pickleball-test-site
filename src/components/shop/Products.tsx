import * as React from "react";
import ProductComponent from "./ProductComponent";
import { useSelector } from 'react-redux';
import { Product } from "shopify-buy";
import { RootState } from "../../store";
import { Box, Button, Grid, Link, TablePagination, Typography } from "@material-ui/core";
import { RccFormButton, RccNavButton, RccActionButton } from "../common/Buttons";

export default function Products({ loadMoreItems }: { loadMoreItems: () => void }) {
  const { products } = useSelector((state: RootState) => state.shopify);

  if (products) {
    return (
      <Box mt={5}>
        <Grid container>
          <Grid xs={2}>
            Categories Go Here
          </Grid>
          <Grid xs={10} style={{ minHeight: "200px", maxHeight: "200px" }}>
            <Grid container>
              {products
                .map((product: Product) => {
                  return (
                    <ProductComponent
                      key={product.id}
                      product={product}
                    />
                  );
                })
                .reverse()}

            </Grid>
            <Box display="flex" flexDirection="row" mr={4}>
              <Link onClick={() => loadMoreItems()} underline="always" style={{ cursor: "pointer" }}>Load More items</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return <p>Loading...</p>;
  }
}