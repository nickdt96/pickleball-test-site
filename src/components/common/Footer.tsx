import {
    Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Typography
} from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StorefrontIcon from '@mui/icons-material/Storefront';
import React from "react";

const Footer = () => {

  // TODO - Expand the footer - Set the height of the footer to 100vh.  It looks good as is for mobile, but not desktop.

  const [value, setValue] = React.useState(0);
  
  return (
    <Paper style={{ position: "fixed", bottom: 0, left: 0, right: 0, marginTop: "calc(5% + 60px)" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log("newValue -> ", newValue)
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />}/>
        <BottomNavigationAction label="About" icon={<InfoIcon />} />

        <BottomNavigationAction label="Shop" icon={<StorefrontIcon />}/>
        <BottomNavigationAction label="Dealer" icon={<ContactPageIcon />}/>
        <BottomNavigationAction label="Library" icon={<MenuBookIcon />}/>

        <BottomNavigationAction label="Contact" icon={<ContactPageIcon />}/>
        <BottomNavigationAction label="Cart" icon={<Badge badgeContent={1} color="error"><ShoppingCartIcon /></Badge>} />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
