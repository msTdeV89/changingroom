import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import * as actions from "./redux/actions/actionTypes";
import { getProducts } from "./redux/actions/productsAction";

function App({ getProducts }) {
  const menuIsOpen = useSelector((state) => state.global.menuIsOpen);
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  useEffect(() => {
    if (cart) localStorage.setItem("changCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className='app' id='home'>
      <div
        className={`app__shade ${menuIsOpen ? "app__shade--isShaded" : ""}`}
        onClick={() => {
          if (menuIsOpen) dispatch({ type: actions.HANDLE_MENU });
        }}
      ></div>
      <Header />
      <MobileMenu />
      <div className='container'>
        <Switch>
          <Route exact path='/changingroom' component={HomePage} />
          <Route path='/changingroom/cart' component={CartPage} />
          <Route path='/changingroom/category/:name' component={CategoryPage} />
          <Route path='/changingroom/product/:id' component={ProductPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default connect(null, { getProducts })(App);
