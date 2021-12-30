import React from "react";
import CartItem from "../components/CartItem";
import { Link, useHistory } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { useGlobalContext } from "../context";

function CartPage() {
  const { cart, clearCart } = useGlobalContext();
  let history = useHistory();

  if (cart.items.length === 0) {
    return (
      <main id="cart-page" className="cart-page my-5">
        <section className="container">
          <div className="text-center">
            <h2 className="mb-5">O Carrinho esta Vazio</h2>
            <Link to="/shop" className="btn btn-outline-dark">
              Voltar para Loja
            </Link>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main id="cart-page" className="cart-page mb-5 mt-4">
      <section className="container mb-3">
        <button onClick={() => history.goBack()} className="go-back-btn">
          <BsChevronLeft className="go-back-svg" /> Voltar
        </button>
      </section>
      <section className="container">
        {cart.items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </section>
      <section className="container">
        <div className="row  mt-4">
          <div className="col-6">
            <h4>Produtos: {cart.quantity}</h4>
          </div>
          <div className="col-6 text-end">
            <h4>Total: R${cart.total},00</h4>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center cart-btn-container">
            <button
              className="btn btn-outline-danger m-2 order-3"
              onClick={() => clearCart()}
            >
              Limpar Carrinho
            </button>
            <Link className="btn btn-outline-success m-2 order-2" to="/shop">
              Adicionar Mais Items
            </Link>
            <Link className="btn btn-success m-2 order-1" to="/checkout">
              Finalizar Compra
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CartPage;
