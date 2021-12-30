import React from "react";
import GalleryProducts from "../components/GalleryProducts";

function Phones() {
  return (
    <main id="phones" className="phones my-5">
      <section className="container mb-4">
        <h1>Celulares</h1>
        <hr />
      </section>
      <section className="container">
        <GalleryProducts category={"phones"} />
      </section>
    </main>
  );
}

export default Phones;
