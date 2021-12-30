import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function CartItem({ id, title, price, img, amount }) {
  const { increaseCart, decreaseCart, removeCart } = useGlobalContext();

  return (
    <div className="cart-item row mb-3">
      <div className="col-sm-8 col-10">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-4 col-6 text-center">
            <Link to={`/product-page/${id}`}>
              <img src={img} alt={title} className="cart-img" />
            </Link>
          </div>
          <div className="col-sm-8 col-6 ">
            <Link to={`/product-page/${id}`} className="product-text">
              <h5>{title}</h5>
              <p className="item-price">R$ {price},00</p>
            </Link>
            <button
              className="remove-btn btn btn-outline-danger"
              onClick={() => removeCart(id)}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-4 col-2 text-center d-flex justify-content-center align-items-center">
        <div>
          <button
            className="btn btn-outline-info amount-btn"
            onClick={() => {
              increaseCart(id);
            }}
          >
            <FaPlus />
          </button>
          <p className="amount my-2">{amount}</p>
          <button
            className="btn btn-outline-info amount-btn"
            onClick={() => decreaseCart(id)}
          >
            <FaMinus />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartItem;
