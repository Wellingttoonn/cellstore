import React from "react";
import { useParams, useHistory } from "react-router";
import { BsChevronLeft } from "react-icons/bs";
import { useGlobalContext } from "../context";

function ProductPage() {
  const { id } = useParams();
  const { getFromId, addCart } = useGlobalContext();
  let history = useHistory();

  function handleBuy() {
    addCart(prodId);
    history.push("/checkout");
  }

  let prodId = getFromId(id);

  const { img, title, price, desc, features, color, brand } = prodId;
  return (
    <main>
      <section className="container">
        <div className="row pt-3">
          <div className="col">
            <button onClick={() => history.goBack()} className="go-back-btn">
              <BsChevronLeft className="go-back-svg" /> Voltar
            </button>
          </div>
        </div>
        <div className="row product-row">
          <div className="col-md-7 col-sm-6 img-product-container">
            <img src={img} alt={id} className="img-fluid img-product" />
          </div>

          <div className="col-md-5 col-sm-6 py-5 desc-product-container">
            <h2>{title}</h2>
            <p className="text-muted">COD: {id}</p>
            <h4 className="my-3">R$ {price},00</h4>
            <p className="position-relative">
              Cor:
              <span
                className="position-absolute mx-2 p-2 border border-dark rounded-circle"
                style={{ backgroundColor: color }}
              >
                <span className="visually-hidden">{color}</span>
              </span>
            </p>
            <p>
              Marca: <b>{brand}</b>
            </p>

            <div className="my-5">
              <button
                className="btn btn-primary w-100 my-2"
                onClick={() => addCart(prodId)}
              >
                Adicionar ao Carrinho
              </button>
              <button className="btn btn-dark w-100 my-2" onClick={handleBuy}>
                Comprar
              </button>
            </div>

            <div className="accordion accordion-flush" id="accordionFlushProduct">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                  >
                    INFORMAÇÕES DO PRODUTO
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushProduct"
                >
                  <div className="accordion-body">{desc}</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                  >
                    INFORMAÇÕES DE ENTREGA
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushProduct"
                >
                  <div className="accordion-body">
                    Sou uma política de envio. Sou um ótimo lugar para adicionar mais
                    informações sobre seus métodos de entrega, embalagens e custo.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                  >
                    CARACTERÍSTICAS
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushProduct"
                >
                  <div className="accordion-body">
                    <ul>
                      {features.map((feature, index) => {
                        return <li key={index}>{feature}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
