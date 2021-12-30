import React, { useState, useContext, useEffect, useReducer } from "react";
import data from "./data";
import reducecart from "./reducecart";

const AppContext = React.createContext();

const initialCart = {
  items: [],
  total: 0,
  quantity: 0,
};

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, dispatchct] = useReducer(reducecart, initialCart);
  const [search, setSearch] = useState([]);

  // Get Products to Render on Pages
  // *******************************

  function getAllProducts() {
    let allProducts = [];
    data.forEach((product) => {
      allProducts = [...allProducts, ...product.items];
    });
    setProducts(allProducts);
  }

  function getFromCategory(category) {
    const categProducts = data.find((item) => item.category === category);
    setProducts(categProducts.items);
  }

  function fiveProducts(category) {
    const targetProducts = data.find((item) => item.category === category);
    const newProducts = targetProducts.items.slice(0, 5);
    return newProducts;
  }

  function getFromId(id) {
    let allProducts = [];
    data.forEach((product) => {
      allProducts = [...allProducts, ...product.items];
    });
    let prodId = allProducts.find((item) => item.id === id);
    return prodId;
  }

  function searchItem(text) {
    let allProducts = [];
    data.forEach((product) => {
      allProducts = [...allProducts, ...product.items];
    });
    let searchResult = allProducts.filter((item) => item.title.includes(text));
    setSearch(searchResult);
    return searchResult;
  }

  // Cart Reducer Functions
  // *******************************

  function addCart(item) {
    dispatchct({ type: "ADD", payload: item });
  }

  function removeCart(id) {
    dispatchct({ type: "REMOVE", payload: id });
  }

  function increaseCart(id) {
    dispatchct({ type: "INCREASE", payload: id });
  }

  function decreaseCart(id) {
    dispatchct({ type: "DECREASE", payload: id });
  }

  function clearCart() {
    dispatchct({ type: "CLEAR_CART" });
  }

  function getTotals() {
    dispatchct({ type: "GET_TOTALS" });
  }

  useEffect(() => {
    getTotals();
  }, [cart.items]);

  return (
    <AppContext.Provider
      value={{
        fiveProducts,
        getAllProducts,
        getFromCategory,
        getFromId,
        products,
        cart,
        searchItem,
        search,
        addCart,
        removeCart,
        increaseCart,
        decreaseCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
