import * as React from "react";
import ProductComponent from "./ProductComponent";
import { useSelector } from 'react-redux';
import { Product } from "shopify-buy";
import { RootState } from "../../store";
import { Box, Grid, TablePagination } from "@material-ui/core";

export default function Products() {
  const { products } = useSelector((state: RootState) => state.shopify);

  //console.log(`  products.length -> ${JSON.stringify(products ? products.length : 0)}`)
  console.log(`  products -> ${JSON.stringify(products)}`)


  if (products) {
    return (
      <Box mt={5}>
          <Grid container>
            <Grid xs={2}>
              Categories Go Here
            </Grid>
            <Grid xs={10} style={{ minHeight: "200px", maxHeight: "200px"}}>
              <TablePagination
                component="div"
                count={products.length}
                page={0}
                onPageChange={() => console.log("pageChange")}
                rowsPerPage={2}
                onRowsPerPageChange={() => console.log("pageChange")}
                rowsPerPageOptions={[2, 10, 25, 50]}
              />
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
            </Grid>
          </Grid>
        </Box>
    );
  } else {
    return <p>Loading...</p>;
  }
}