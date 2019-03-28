import React from "react";
// import ReactDOM from "react-dom";

import Generator from "./Generator";
// import 'function.js';

import logoColore from "../img/logo1.png";
import bottigliaX from "../img/bottiglia_XBACCO.png";

class PageGenerator extends React.Component {
  AddActive() {
    console.log(this);
  }

  render() {
    return (
      <>
        <Generator />
        <section className="text-area flex">
          <p>
            Se vuoi rendere ancora più unico il tuo regalo, realizza l’etichetta
            con dei messaggi personali... ti basterà scrivere una messaggio ed
            acquistare ciò che hai appena generato! Come funziona?
          </p>
        </section>
        <section className="genera flex">
          <div className="info">
            <p>
              <span>1</span>
              <span>dedica</span> il messaggio che vuoi far recapitare
            </p>
          </div>
          <div className="messaggio">
            <textarea name="" id="" cols="30" rows="10" />
          </div>
        </section>
        <section className="scegli flex">
          <div className="info">
            <p>
              <span>2</span>
              <span>scegli</span> una categoria di esperienza
            </p>
          </div>
          <div className="messaggio text-area">
            <p>
              Arricchisci il tuo regalo con un’esperienza tra quelle qui sotto
              elencate. Rendi il tuo regalo speciale!
            </p>
          </div>
        </section>

        <section className="flex two-column">
          <div className="quarto">
            <img src={logoColore} alt="" className="logo-home" />
            <h2>Cultura del vino</h2>
            <p>
              Se sei appassionato di vino ma vorresti saperne di più, ti
              offriamo l’accesso alla Cultura del vino in modo semplice e
              mirato: concediti un calice di vino, mentre guardi i nostri mini
              corsi da sommelier.
            </p>
            <button className="btn-light">scegli</button>
          </div>
          <div className="quarto">
            <img src={logoColore} alt="" className="logo-home" />
            <h2>Relax</h2>
            <p>
              Acquistando l’esperienza Relax avrai accesso a musica, libri e
              poesie.
            </p>
            <button className="btn-light">scegli</button>
          </div>
          <div className="quarto">
            <img src={logoColore} alt="" className="logo-home" />
            <h2>Ristorazione</h2>
            <p>
              Per la Ristorazione abbiamo selezionato delle prelibate ricette
              abbinate al nostro vino.
            </p>
            <button className="btn-light">scegli</button>
          </div>
          <div className="quarto">
            <img src={logoColore} alt="" className="logo-home" />
            <h2>Arte e design</h2>
            <p>
              Per gli appassionati del vino che non vogliono rinunciare nemmeno
              alla bellezza dell’arte, abbiamo ideato Arte e Design: nozioni sul
              type design e sugli artisti più famosi (da Picasso a
              Brunelleschi).
            </p>
            <button className="btn-light">scegli</button>
          </div>
        </section>

        <section className="anteprima flex">
          <div className="info">
            <p>
              <span>3</span>
              <span>anteprima</span> della tua creazione
            </p>
          </div>
          <div className="messaggio">
            <img src={bottigliaX} alt="bottiglia" className=''/>
          </div>
        </section>

        <section className="spedisci flex">
        <div className="info">
            <p>
              <span>4</span>
              <span>spedisci</span> il tuo generative wine persoanlaizzato
            </p>
          </div>
          <div className="messaggio">
            <button className="btn-dark">Conferma</button>
            <button className="btn-dark">Modifica</button>
          </div>
        </section>
      </>
    );
  }
}
export default PageGenerator;
