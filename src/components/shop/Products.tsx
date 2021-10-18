import * as React from "react";
import ProductComponent from "./ProductComponent";
import { useSelector } from "react-redux";
import { Product } from "shopify-buy";
import { RootState } from "../../store";
import { Box, Grid, Link } from "@material-ui/core";
import Categories from "./Categories";

export default function Products({
  loadMoreItems,
  changeCategories
}: {
  loadMoreItems: () => void;
  changeCategories: (arg0: string) => void;
}) {
  const { products } = useSelector((state: RootState) => state.shopify);

  return (
    <Box mt={5}>
      <Grid container>
        <Grid xs={12} md={3}>
          <Box mb={3} mr={{ xs: 0, md: 6 }}>
            <Categories changeCategories={changeCategories} />
          </Box>
        </Grid>
        <Grid xs={12} md={9} style={{ minHeight: "200px", maxHeight: "200px" }}>
          <Grid container>
            {products &&
              products
                .map((product: Product) => {
                  return (
                    <ProductComponent key={product.id} product={product} />
                  );
                })}
          </Grid>
          <Box display="flex" flexDirection="row" mr={4}>
            <Link
              onClick={() => loadMoreItems()}
              underline="always"
              style={{ cursor: "pointer" }}
            >
              Load More items
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
