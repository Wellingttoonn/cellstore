import React from "react";
import SingleProduct from "./SingleProduct";

function Products({ products, col }) {
  return (
    <div className="products row">
      {products.map((item) => {
        return <SingleProduct {...item} item={item} key={item.id} col={col} />;
      })}
    </div>
  );
}

export default Products;
