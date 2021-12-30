import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { BsCartPlusFill } from "react-icons/bs";

function SingleProduct({ id, img, title, price, item, col }) {
  const { addCart } = useGlobalContext();
  return (
    <div className={`card ${col} mb-5 singleProduct`}>
      <Link to={`/product-page/${id}`}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title product-text">{title}</h5>
          <p className="card-text product-text">R$ {price},00</p>
        </div>
      </Link>
      <button className="btn btn-primary btn-add-cart mb-2" onClick={() => addCart(item)}>
        Adicionar <BsCartPlusFill className="btn-add-cart-icon" />
      </button>
    </div>
  );
}

export default SingleProduct;
