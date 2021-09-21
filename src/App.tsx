import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { brand } from "./constants/brand";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Dealer from "./pages/Dealer";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./store";
import Footer from "./components/common/Footer";

function App() {

  const theme = createTheme(brand);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>    
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/dealer" component={Dealer}/>
            <Route exact path="/library" component={Library}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
