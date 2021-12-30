import React from "react";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

function Navbar() {
  const { cart, searchItem } = useGlobalContext();
  let history = useHistory();
  const searchInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    searchItem(searchInput.current.value);
    if (history.location.pathname !== "/search") {
      history.push("/search");
    }
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Cell Store
        </Link>
        <Link to="/cart" className="cart-icon-link order-md-2 ms-auto">
          <BsFillBagFill className="cart-icon" />
          <span className="cart-icon-total ms-auto">{cart.quantity}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/shop">
                Loja
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/phones">
                Celulares
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tablets">
                Tablets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accessories">
                Acessorios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contato
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              required
              ref={searchInput}
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
