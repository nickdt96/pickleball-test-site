import {
  AppBar,
  Badge,
  Box,
  Hidden,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { RccNavButton } from "./Buttons";
import logo from "../../assets/images/index.png";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  // TODO - Collapse the items into a hamburger menu for mobile.  mmmkay?

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any, page: string) => {
    history.push(`/${page === "home" ? "" : page}`);
  };

  const handleMenuClick = () => {};

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#EAEAEA"}}>
      <Menu
        id="about-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ padding: "300px"}}
      >
        <MenuItem onClick={() => history.push("/")}>Home</MenuItem>
        <MenuItem onClick={() => history.push("/about")}>About</MenuItem>
        <MenuItem onClick={() => history.push("/shop")}>Shop</MenuItem>
        <MenuItem onClick={() => history.push("/dealer")}>Dealer</MenuItem>
        <MenuItem onClick={() => history.push("/library")}>Library</MenuItem>
        <MenuItem onClick={() => history.push("/contact")}>Contact</MenuItem>
      </Menu>

      <Toolbar>
        <Box
          display="flex"
          flexDirection="row"
          width={1}
          alignItems="center"
          justifyContent="center"
        >
          <Box flexGrow={1} display="flex">
            <Typography variant="h5" noWrap>
              <Box m={4}>
                <img src={logo} alt="" />
              </Box>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Hidden mdUp>
              <MenuIcon
                fontSize="large"
                onClick={(event: any) => setAnchorEl(event.currentTarget)}
              />
            </Hidden>
            <Hidden smDown>
              <RccNavButton
                onClick={(event: any) => handleClick(event, "home")}
              >
                Home
              </RccNavButton>
              <RccNavButton
                onClick={(event: any) => handleClick(event, "about")}
              >
                About
              </RccNavButton>
              <RccNavButton
                onClick={(event: any) => handleClick(event, "shop")}
              >
                Shop
              </RccNavButton>
              <RccNavButton
                onClick={(event: any) => handleClick(event, "dealer")}
              >
                Dealer
              </RccNavButton>
              <RccNavButton
                onClick={(event: any) => handleClick(event, "library")}
              >
                Library
              </RccNavButton>
              <RccNavButton
                onClick={(event: any) => handleClick(event, "contact")}
              >
                Contact
              </RccNavButton>
              <Badge badgeContent={1} color="error">
                <ShoppingCartIcon
                  style={{paddingTop: "3px", color: "black" }}
                  onClick={(event: any) => handleClick(event, "cart")}
                >
                  Cart
                </ShoppingCartIcon>
              </Badge>
            </Hidden>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
