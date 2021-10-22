import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { brand } from "./constants/brand";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import Dealer from "./pages/Dealer";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import { Box, Drawer } from "@material-ui/core";
import CartComponent from "./components/shop/Cart";
import Cart from "./pages/Cart";
import { SnackbarProvider } from "notistack";

function App() {
  const theme = createTheme(brand);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/traditional-brass" component={AboutUs} />
              <Route exact path="/our-brass" component={AboutUs} />
              <Route exact path="/our-processes" component={AboutUs} />
              <Route exact path="/services" component={AboutUs} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/dealer" component={Dealer} />
              <Route exact path="/library" component={Library} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/cart" render={(props) => <Cart />} />
            </Switch>
            {/*<Footer />*/}
          </BrowserRouter>
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
