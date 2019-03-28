import React from "react";
// import ReactDOM from "react-dom";


import logoColore from "../img/logo1.png";

class Esperienze extends React.Component {
  render() {
    return (
      <>
      <div id="hero-esperienze" />
        <div className="text-area tac">
          <p>
            I nostri clienti trovano nell’esperienza regalo XBacco, una risposta
            adeguata ai loro desideri: riconciliarsi con l’ambiente circostante
            e vivere momenti veri, personali ed emozionanti.{" "}
          </p>
          <h2>
            Perché il tempo da vivere è il dono più grande che si possa
            ricevere!
          </h2>
        </div>
        <section className="flex two-column">
          <div className="quarto">
              <img src={logoColore} alt="" className='logo-home'/>
            <h2>Cultura del vino</h2>
            <p>
              Se sei appassionato di vino ma vorresti saperne di più, ti
              offriamo l’accesso alla Cultura del vino in modo semplice e
              mirato: concediti un calice di vino, mentre guardi i nostri mini
              corsi da sommelier.
            </p>
            <button className="btn-light"><i className="fas fa-shopping-basket"></i></button>
          </div>
          <div className="quarto">
              <img src={logoColore} alt="" className='logo-home'/>
            <h2>Relax</h2>
            <p>
              Acquistando l’esperienza Relax avrai accesso a musica, libri e
              poesie.
            </p>
            <button className="btn-light"><i className="fas fa-shopping-basket"></i></button>
          </div>
          <div className="quarto">
              <img src={logoColore} alt="" className='logo-home'/>
            <h2>Ristorazione</h2>
            <p>
              Per la Ristorazione abbiamo selezionato delle prelibate ricette
              abbinate al nostro vino.
            </p>
            <button className="btn-light"><i className="fas fa-shopping-basket"></i></button>
          </div>
          <div className="quarto">
              <img src={logoColore} alt="" className='logo-home'/>
            <h2>Arte e design</h2>
            <p>
              Per gli appassionati del vino che non vogliono rinunciare nemmeno
              alla bellezza dell’arte, abbiamo ideato Arte e Design: nozioni sul
              type design e sugli artisti più famosi (da Picasso a
              Brunelleschi).
            </p>
            <button className="btn-light"><i className="fas fa-shopping-basket"></i></button>
          </div>
        </section>
      </>
    );
  }
}
export default Esperienze;
