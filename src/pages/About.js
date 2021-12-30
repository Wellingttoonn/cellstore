import React from "react";
import aboutImg from "../img/about/aboutImg.jpg";
import person1 from "../img/about/person1.jpg";
import person2 from "../img/about/person2.jpg";
import person3 from "../img/about/person3.jpg";

function About() {
  return (
    <main className="about my-5" id="about">
      <section className="container about-container">
        <h1>Quem somos</h1>

        <div className="row my-4">
          <div className="col-md-8 py-2">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
          <div className="col-md-4 py-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
              recusandae tenetur aut tempore a incidunt repellendus velit, sed dolorem
              fugiat corporis, vero doloribus molestiae facilis ipsum at sapiente earum
              repudiandae. Aliquid quibusdam fugit impedit saepe sunt, neque rem earum
              architecto consequatur cum deleniti, corrupti magni assumenda.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione
              sequi voluptatibus quis in qui nesciunt ea voluptatem, accusantium veritatis
              est labore dicta ipsum repellendus dignissimos facere pariatur ut autem
              excepturi aperiam laudantium quibusdam quia animi optio. Corrupti
              praesentium quidem facere porro tempora. Ex minima exercitationem ad neque
              architecto eligendi.
            </p>
          </div>
        </div>

        <h3 className="my-5">Conheça a Equipe</h3>

        <div className="row my-5">
          <div className="card-group gap-5">
            <div className="card border-0">
              <img src={person1} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
            <div className="card border-0">
              <img src={person2} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Jane Doe</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
            <div className="card border-0">
              <img src={person3} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Jack Doe</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
