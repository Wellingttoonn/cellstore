import React from "react";
import { useState, useEffect } from "react";
//import data from "../img/products/data";
import Products from "./Products";
import Filter from "./Filter";
import { useGlobalContext } from "../context";

function GalleryProducts({ category }) {
  //const [products, setProducts] = useState([]);
  const { getAllProducts, getFromCategory, products } = useGlobalContext();
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    if (category === "all") {
      // let prods = [];
      // const allProducts = data.forEach((el) => {
      //   prods = [...prods, ...el.items];
      // });
      // setProducts(prods);

      //const allProducts = getAllProducts();
      //setProducts(allProducts);

      getAllProducts();
    } else {
      //const newProducts = data.find((item) => item.category === category);

      // const newProducts = getFromCategory(category);
      // setProducts(newProducts.items);

      getFromCategory(category);
    }
  }, [category]);

  //console.log(filterProducts);

  return (
    <div className="row">
      <div className="col-md-3 mb-5 mb-md-0">
        <h3 className="display-5">Filtrar Por</h3>
        <Filter setFilterProducts={setFilterProducts} />
      </div>
      <div className="col-md-9">
        <Products products={filterProducts} col={"col-md-3 col-sm-4 col-6"} />
      </div>
    </div>
  );
}

export default GalleryProducts;
