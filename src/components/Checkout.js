import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { useGlobalContext } from "../context";

function Checkout() {
  const { cart } = useGlobalContext();
  let history = useHistory();

  return (
    <main id="search" className="search my-5">
      <div className="modal fade" id="errorModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Erro</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p>Não estamos aceitando pedidos no momento {":("}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="container mb-4">
        <div className="row">
          <div className="col-sm-9">
            <h1>Finalizar Compra</h1>
          </div>
          <div className="col-sm-3 text-end">
            <button onClick={() => history.goBack()} className="go-back-btn">
              <BsChevronLeft className="go-back-svg" /> Voltar
            </button>
          </div>
        </div>
        <hr />
      </section>
      <section className="container">
        <div className="row px-4 py-5">
          <div className="col-6">
            <h3>Total de Produtos:</h3>
            <h4 className="text-primary">{cart.quantity}</h4>
          </div>
          <div className="col-6 text-end">
            <h3>Valor Total:</h3>
            <h4 className="text-primary">R$ {cart.total},00</h4>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row bg-light">
          <h3>Dados Da Entrega</h3>
        </div>
        <div className="row g-4 px-4 py-5">
          <div className="col-12">
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row bg-light">
          <h3>Dados De Pagamento</h3>
        </div>
        <div className="row g-4 px-4 py-5">
          <div className="col-12">
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" />
          </div>
        </div>
      </section>
      <section className="container text-end my-5">
        <Link className="btn btn-outline-danger mx-3" to="/cart">
          Cancelar
        </Link>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#errorModal"
        >
          Confirmar
        </button>
      </section>
    </main>
  );
}

export default Checkout;
