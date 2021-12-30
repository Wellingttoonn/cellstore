import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Phones from "./pages/Phones";
import Accessories from "./pages/Accessories";
import Tablets from "./pages/Tablets";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/phones">
          <Phones />
        </Route>
        <Route path="/tablets">
          <Tablets />
        </Route>
        <Route path="/accessories">
          <Accessories />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/product-page/:id" children={<ProductPage />}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
