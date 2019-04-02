import React from "react";
// import ReactDOM from "react-dom";

import logoColore from "../img/logo1.png";


class SelezionaEsperienza extends React.Component {
  render() {
    return (
      <>
        <section id="hero-home">
          <img src={logoColore} className="logo-home" alt="" />
          <input
            type="text"
            placeholder="scrivi qui il tuo codice"
            className="center-input"
          />
        </section>
        <section className="section-select">
          <div className="line-color">
            <div className="line">
              <img src={logoColore} alt="" />
              <div className="title tac">
                <h2>Musica</h2>
                <button className="btn-light">scegli</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section-select">
          <div className="line-color">
            <div className="line">
              <img src={logoColore} alt="" />
              <div className="title tac">
                <h2>Poesia</h2>
                <button className="btn-light">scegli</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section-select">
          <div className="line-color">
            <div className="line">
              <img src={logoColore} alt="" />
              <div className="title tac">
                <h2>Libro</h2>
                <button className="btn-light">scegli</button>
              </div>
            </div>
          </div>
        </section>
        <section className="text-area-big tac color-blue">
          <h2>Valuta la tua esperienza</h2>
          <i class="fas fa-star fa-2x" />
          <i class="fas fa-star fa-2x" />
          <i class="fas fa-star fa-2x" />
          <i class="far fa-star fa-2x" />
          <i class="far fa-star fa-2x" />
        </section>
      </>
    );
  }
}
export default SelezionaEsperienza;
