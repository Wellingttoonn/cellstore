import React from "react";
import slide1 from "../img/home/slide1.jpg";
import slide2 from "../img/home/slide2.jpg";
import slide3 from "../img/home/slide3.jpg";
import slide4 from "../img/home/slide4.jpg";
import { FaTruck, FaMapMarkerAlt, FaCreditCard, FaShieldAlt } from "react-icons/fa";
import TopProducts from "../components/TopProducts";

function Home() {
  return (
    <main id="home" className="home my-5">
      <section className="container">
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slide4} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-sm-3 col-6 text-center">
            <FaTruck className="home-icons" />
            <h4>FRETE GRÁTIS</h4>
            <p>Confira Condições</p>
          </div>
          <div className="col-sm-3 col-6 text-center">
            <FaMapMarkerAlt className="home-icons" />
            <h4>ENVIAMOS</h4>
            <p>para todo Brasil</p>
          </div>
          <div className="col-sm-3 col-6 text-center">
            <FaCreditCard className="home-icons" />
            <h4>ATÉ 12X SEM JUROS</h4>
            <p>10% Off no Boleto</p>
          </div>
          <div className="col-sm-3 col-6 text-center">
            <FaShieldAlt className="home-icons" />
            <h4>100% SEGURO</h4>
            <p>Certificado SSL</p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <TopProducts
          title={"Celulares Mais Vendidos "}
          link={"/phones"}
          category={"phones"}
        />
      </section>
      <section className="container my-5">
        <TopProducts
          title={"Tablets Mais Vendidos "}
          link={"/tablets"}
          category={"tablets"}
        />
      </section>
      <section className="container my-5">
        <TopProducts
          title={"Acessorios Mais Vendidos "}
          link={"/accessories"}
          category={"accessories"}
        />
      </section>
    </main>
  );
}

export default Home;
