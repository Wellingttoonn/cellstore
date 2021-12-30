import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-light py-5 navbar-light" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <Link className="navbar-brand" to="/">
              Cell Store
            </Link>
            <p className="text-muted">&copy; 2020-2021</p>
          </div>

          <div className="col-md-3 col-6">
            <ul className="list-unstyled">
              <li>
                <Link to="/shop">Loja</Link>
              </li>
              <li>
                <Link to="/phones">Celulares</Link>
              </li>
              <li>
                <Link to="/tablets">Tablets</Link>
              </li>
              <li>
                <Link to="/accessories">Acessorios</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6">
            <ul className="list-unstyled">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos</a>
              </li>
              <li>
                <a href="#">Métodos de Pagamento</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6">
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
