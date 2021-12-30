import React from "react";
import GalleryProducts from "../components/GalleryProducts";

function Tablets() {
  return (
    <main id="tablets" className="tablets my-5">
      <section className="container mb-4">
        <h1>Tablets</h1>
        <hr />
      </section>
      <section className="container">
        <GalleryProducts category={"tablets"} />
      </section>
    </main>
  );
}

export default Tablets;
