import * as React from "react";
import { RootState } from "../../store";
import { setCartOpen } from "../../store/cartUI/actions";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
import {
  decrementQuantity,
  incrementQuantity,
  removeLineItemFromCart
} from "../../store/shopify/actions";
import { brand } from "../../constants/brand";
import { useHistory } from "react-router";

export default function CartComponent() {
  const shopify = useSelector((state: RootState) => state.shopify);
  const cartUI = useSelector((state: RootState) => state.cartUI);
  const { cart, client, cartItems } = shopify;
  const { isCartOpen } = cartUI;
  let cartItems2: any = cartItems;
  const history = useHistory();

  return (
    <>
      <Box ml={5} mt={4}>
        <Grid container>
          <Grid item xs={7}>
            {cartItems?.lineItems.map((lineItem: any) => {
              return (
                <>
                  <List>
                    <ListItem alignItems="flex-start">
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Box>
                          <ListItemAvatar>
                            {lineItem.variant.image ? (
                              <img
                                src={lineItem.variant.image.src}
                                alt={`${lineItem.title} product shot`}
                                style={{ minHeight: "90px", maxHeight: "90px" }}
                              />
                            ) : (
                              <></>
                            )}
                          </ListItemAvatar>
                        </Box>
                        <Box ml={4}>
                          <Typography variant="h5">{lineItem.title}</Typography>
                          <Box mt={2} display="flex" alignItems="center">
                            <Button
                              variant="outlined"
                              onClick={() => decrementQuantity(lineItem)}
                              size="small"
                            >
                              <Typography variant="h3" color="primary">
                                -
                              </Typography>
                            </Button>
                            <Box mx={4}>
                              <Typography variant="h4">
                                {lineItem.quantity}
                              </Typography>
                            </Box>
                            <Button
                              variant="outlined"
                              onClick={() => incrementQuantity(lineItem)}
                              size="small"
                            >
                              <Typography variant="h5" color="primary">
                                +
                              </Typography>
                            </Button>
                            <Box ml={3}>
                              <Typography variant="h5" color="primary">
                                $
                                {(
                                  lineItem.quantity *
                                  parseFloat(lineItem.variant.price)
                                ).toFixed(2)}
                              </Typography>
                            </Box>
                            <Button
                              onClick={() =>
                                removeLineItemFromCart(lineItem.id)
                              }
                            >
                              <Typography variant="h5" color="primary">
                                ×
                              </Typography>
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </ListItem>
                    <Divider component="li" />
                  </List>
                </>
              );
            })}
          </Grid>
          <Grid item xs={4}>
            <Box
              mt={4}
              style={{
                border: `1px solid #CCC`,
                borderRadius: brand.shape.borderRadius
              }}
              p={4}
              mx={7}
            >
              <Typography variant="h3">Cart Summary</Typography>
              <Divider />
              <Box mt={3}>
                <Typography variant="h6">
                  Subtotal: ${cartItems?.subtotalPrice}
                </Typography>
              </Box>
              <Box mt={3}>
                <Typography variant="h6">
                  Tax: ${cartItems2?.totalTax}
                </Typography>
              </Box>
              <Box mt={3} mb={3}>
                <Typography variant="h6">
                  Shipping: ${cartItems2?.totalTax}
                </Typography>
              </Box>
              <Divider />
              <Box mt={3} display="flex">
                <Box display="flex" flexGrow={1}>
                  <Typography variant="h4">
                    Total: ${cartItems2?.totalPrice}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    onClick={() => console.log("Checking out")}
                    variant="outlined"
                  >
                    <Typography variant="subtitle2" color="primary">
                      Checkout
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box mt={4}>
                <Typography variant="h6">
                  <Link onClick={() => history.push("/shop")} style={{ cursor: "pointer"}}>Continue Shopping</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
