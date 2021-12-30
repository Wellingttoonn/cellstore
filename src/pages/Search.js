import React from "react";
import Products from "../components/Products";
import { useHistory } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { useGlobalContext } from "../context";

function Search() {
  const { search } = useGlobalContext();
  let history = useHistory();

  return (
    <main id="search" className="search my-5">
      <section className="container mb-4">
        <div className="row">
          <div className="col-sm-9">
            <h1>Resultados da Busca</h1>
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
        <div className="row">
          <div className="col">
            {search.length > 0 ? (
              <Products products={search} col={"col-lg-2 col-md-3 col-sm-4 col-6"} />
            ) : (
              <h2 className="text-center">Nenhum Item Foi Encontrado</h2>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Search;
