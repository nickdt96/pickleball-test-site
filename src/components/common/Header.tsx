import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { RccNavButton } from "./Buttons";

const Header = () => {

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any, page: string) => {
    if (page === "about") {
      setAnchorEl(event.currentTarget);
    } else {
      history.push(`/${page === "home" ? "" : page}`);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      
      <Menu
        id="about-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>About Us</MenuItem>
        <MenuItem>Traditional Brass</MenuItem>
        <MenuItem>Our Brass</MenuItem>
        <MenuItem>Our Process</MenuItem>
        <MenuItem>Services</MenuItem>
      </Menu>

      <Toolbar>
        <Box display="flex" flexDirection="row" width={1} alignItems="center" justifyContent="center">
          <Box flexGrow={1} display="flex">
            <Typography variant="h5" noWrap>
              <Box m={4}>
                RCC Brass
              </Box>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <RccNavButton onClick={(event: any) => handleClick(event, "home")}>
              Home
            </RccNavButton>
            <RccNavButton onClick={(event: any) => handleClick(event, "about")}>
              About
            </RccNavButton>
            <RccNavButton onClick={(event: any) => handleClick(event, "shop")}>
              Shop
            </RccNavButton>
            <RccNavButton onClick={(event: any) => handleClick(event, "dealer")}>
              Dealer
            </RccNavButton>
            <RccNavButton onClick={(event: any) => handleClick(event, "library")}>
              Library
            </RccNavButton>
            <RccNavButton onClick={(event: any) => handleClick(event, "contact")}>
              Contact
            </RccNavButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header