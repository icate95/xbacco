import React from "react";
// import ReactDOM from "react-dom";

import logoColore from "../img/logo1.png";

class PuntiVendita extends React.Component {
  render() {
    return (
      <>
        <section id="hero-puntivendita" />
        <div className="text-area">
          <p>
            Vieni a trovarci direttamente in cantina oppure in uno dei tre punti
            vendita, scopri il nostro generative wine direttamente dal luogo
            dove nasce.
          </p>
        </div>
        <section>
          <div className="flex two-column">
            <div className="half bgc-blue tac img-center info-puntivendita">
              <img
                src={logoColore}
                width="50%"
                alt="logo-home"
                className="logo-home"
              />
              <p>
                CANTINA XBACCODirettamente nel luogo della produzione, hai la
                possibilità di visitare la cantina, degustare i nostri prodotti
                e acquistare direttamente dello store.
              </p>
              <p>Verona (VR) 37121</p>
              <p>via xxv Aprile</p>
              <button>Mappa <i className="fas fa-chevron-right" /></button>
            </div>
            <div className="half bottoniorrizzontali">
            <a href="#brescia">brescia<i className="fas fa-chevron-right" /></a>
            <a href="#brescia">milano<i className="fas fa-chevron-right" /></a>
            <a href="#brescia">bergamo<i className="fas fa-chevron-right" /></a>
            <a href="#brescia">Torino<i className="fas fa-chevron-right" /></a>
          </div>
          </div>
          
        </section>
      </>
    );
  }
}
export default PuntiVendita;
