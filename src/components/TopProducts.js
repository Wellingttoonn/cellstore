import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useGlobalContext } from "../context";

function TopProducts({ title, link, category }) {
  const [products, setProducts] = useState([]);

  const { fiveProducts } = useGlobalContext();

  useEffect(() => {
    setProducts(fiveProducts(category));
  }, [category]);

  return (
    <div className="top-products">
      <h1 className="tp-title">{title}</h1>
      <hr className="tp-line" />

      <div className="products row overflow-hidden flex-nowrap">
        {products.map((item) => {
          return (
            <SingleProduct
              {...item}
              item={item}
              key={item.id}
              col={"col-6 col-sm-3 col-md"}
            />
          );
        })}
      </div>

      <div className="text-center">
        <Link to={link} className="btn btn-primary px-5 my-4 m-auto text-center">
          Mais
        </Link>
      </div>
    </div>
  );
}

export default TopProducts;
