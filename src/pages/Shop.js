import React from "react";
import GalleryProducts from "../components/GalleryProducts";

function Shop() {
  return (
    <main id="shop" className="shop my-5">
      <section className="container mb-4">
        <h1>Todos os Modelos</h1>
        <hr />
      </section>

      <section className="container">
        <GalleryProducts category={"all"} />
      </section>
    </main>
  );
}

export default Shop;
