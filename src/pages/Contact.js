import React from "react";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="contact my-5" id="contact">
      <section className="container">
        <h1>Fale Conosco</h1>
        <form className="row g-3 contact-form">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Nome" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Sobrenome" />
          </div>
          <div className="col-12">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              id="text-area-contact"
              rows="3"
              placeholder="Mensagem"
            ></textarea>
          </div>
          <button className="btn btn-dark contact-btn" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </section>
      <section className="container text-center">
        <div className="row">
          <div className="col-sm-4 mb-3">
            <h5>Telefones:</h5>
            <p className="mb-3">{"(00) 0000-0000"}</p>
            <p className="mb-3">{"(00) 0000-0000"}</p>
            <p className="mb-3">{"(00) 0000-0000"}</p>
          </div>
          <div className="col-sm-4 mb-3">
            <h5>Endereço:</h5>
            <p className="mb-3">Rua Sem Nome, 000</p>
            <p className="mb-3">Bairro: Desconhecido</p>
            <p className="mb-3">São Paulo - SP</p>
          </div>
          <div className="col-sm-4 mb-3">
            <h5>Redes Sociais:</h5>
            <p className="mb-3">Instagram: @...</p>
            <p className="mb-3">Twitter: @...</p>
            <p className="mb-3">Youtube: ...</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
