import React from "react";
import VariantSelector from "./VariantSelector";
import { Product } from "shopify-buy";
import { addVariantToCart } from "../../store/shopify/actions";
import { handleQuantityChange } from "../../store/variants/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";
import { RccCartButton, RccNavButton } from "../common/Buttons";
import { brand } from "../../constants/brand";
import { Controller, useForm } from "react-hook-form";

interface IProductProps {
  product: Product;
}

export default function ProductComponent(props: IProductProps) {
  const { product } = props;
  const variants = useSelector((state: RootState) => state.variants);
  const { selectedVariant, selectedVariantImage, selectedVariantQuantity } =
    variants;
  const variantImage = selectedVariantImage || product.images[0];
  const variant = selectedVariant || product.variants[0];
  const variantQuantity = selectedVariantQuantity || 1;

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      variantId: variant.id,
      quantity: 50
    }
  });
  const onSubmit = (data: any) => {
    addVariantToCart(data.variantId, data.quantity)
  }

  return (
    <Grid xs={12} md={3}>
      <Box mx={2} mb={4}>
        <Card>
          <CardActionArea>
            <Box
              style={{ minHeight: "300px", maxHeight: "300px" }}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Box my={2} alignSelf="center" display="flex">
                <img
                  src={variantImage.src}
                  alt=""
                  style={{ minHeight: "150px", maxHeight: "150px" }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                mt={1}
                style={{ overflow: "hidden" }}
              >
                <CardContent>
                  <Typography variant="h5">{product.title}</Typography>
                </CardContent>
              </Box>
            </Box>
          </CardActionArea>
          <CardActions style={{ display: "block" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box display="flex" flexDirection="column" justifyItems="center">
                <Box>
                  <RccCartButton
                    type="submit"
                  >
                    Add to Cart
                  </RccCartButton>
                </Box>
                <Box
                  mt={2}
                  style={{
                    marginRight: brand.spacing[1]
                  }}
                  py={2}
                >
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Box flexGrow={1} alignContent="left" mx={5}>
                      <Typography variant="h4" color="primary">
                        ${variant.price}
                      </Typography>
                    </Box>
                    <Box>
                      <Controller
                        control={control}
                        name="variantId"
                        render={({ field: { onChange } }) => (
                          <TextField
                            style={{ display: "none" }}
                            name="variantId"
                          />
                        )}
                      />
                      <Controller
                        control={control}
                        name="quantity"
                        render={({ field: { onChange } }) => (
                          <TextField
                            type="number"
                            style={{ width: "95px" }}
                            InputProps={{
                              inputProps: { min: 50 }
                            }}
                            size="small"
                            defaultValue={50}
                            variant="outlined"
                            name="quantity"
                            onChange={onChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </form>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
