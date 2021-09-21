import React from "react";
import VariantSelector from "./VariantSelector";
import { Product } from "shopify-buy";
import { addVariantToCart } from "../../store/shopify/actions";
import { handleQuantityChange } from "../../store/variants/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@material-ui/core";
import { RccCartButton, RccNavButton } from "../common/Buttons";
import { brand } from "../../constants/brand";

interface IProductProps {
  product: Product;
}

export default function ProductComponent(props: IProductProps) {
  const { product } = props;
  const variants = useSelector((state: RootState) => state.variants);
  const {
    selectedVariant,
    selectedVariantImage,
    selectedVariantQuantity,
  } = variants;
  const variantImage = selectedVariantImage || product.images[0];
  const variant = selectedVariant || product.variants[0];
  const variantQuantity = selectedVariantQuantity || 1;

  return (
      <Grid xs={3}>
        <Box mx={2} mb={4}>
          <Card style={{ minHeight: "350px", maxHeight: "350px"}}>
            <CardActionArea>
              <Box style={{ minHeight: "150px", maxHeight: "150px"}} display="flex" justifyContent="center">
                <Box my={2}>
                  <img src={variantImage.src} alt="" style={{ minHeight: "150px", maxHeight: "150px"}} />
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
              </CardContent>
              </Box>
            </CardActionArea>
            <CardActions style={{ display: "block"}}>
              <Box display="flex" flexDirection="column" justifyItems="center">
              
                <Box>
                  <RccCartButton onClick={() => addVariantToCart(variant.id, variantQuantity)} >
                    Add to Cart
                  </RccCartButton>
                </Box>
                <Box mt={2} style={{padding: brand.spacing[4],
          marginRight: brand.spacing[1]}}>
                  <Box display="flex" flexDirection="row" alignItems="bottom">
                  <Box>
                  <Typography>${variant.price}</Typography>
                  </Box>
                  <Box>
                    <TextField type="number" style={{ width: "100px"}} />
                  </Box>
                  </Box>
                </Box>
              </Box>
              
            </CardActions>
          </Card>
        </Box>
      </Grid>
      
  );
}