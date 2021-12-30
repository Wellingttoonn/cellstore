import React from "react";
import GalleryProducts from "../components/GalleryProducts";

function Accessories() {
  return (
    <main id="accessories" className="accessories my-5">
      <section className="container mb-4">
        <h1>Acessorios</h1>
        <hr />
      </section>

      <section className="container">
        <GalleryProducts category={"accessories"} />
      </section>
    </main>
  );
}

export default Accessories;
