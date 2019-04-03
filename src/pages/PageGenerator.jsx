import React from "react";
// import ReactDOM from "react-dom";

import Generator from "./Generator";
// import 'function.js';

import { Link } from "react-router-dom";

// import logoColore from "../img/logo1.png";
import bottigliaX from "../img/bottiglia_XBACCO.png";

import Footer from "./components/Footer";

class PageGenerator extends React.Component {
  AddActive() {
    console.log(this);
  }

  render() {
    return (
      <>
        <section className="crea">
          <div className="half-30 primopasso">
            <p className="come-funziona">
              Se vuoi rendere ancora più unico il tuo regalo, realizza
              l’etichetta con dei messaggi personali... ti basterà scrivere una
              messaggio ed acquistare ciò che hai appena generato! <br />{" "}
              <span>Come funziona?</span>
            </p>
            <div className="info">
              <p>
                <span>1</span>
                <span>COMPONI</span> inserisci una parola chiave
              </p>
            </div>
          </div>

          <div className="half-70 tac">
            <Generator />
          </div>
        </section>

        {/* secondo passo */}
        <section className="crea">
          <div className="half-30 secondopasso">
            <div className="info">
              <p>
                <span>2</span>
                <span>dedica</span> inserisci un messaggio personale
              </p>
            </div>
          </div>

          <div className="half-70 secondopasso">
            <textarea name="" id="" placeholder='Inserisci qui la tua dedica...'></textarea>
            <button className='btn-light-small'>Conferma dedica</button>
            <br/>
            <br/>
          </div>
        </section>
        {/* terzo passo  */}

        <section className="crea">
          <div className="half-30 terzopasso">
            <div className="info">
              <p>
                <span>3</span>
                <span>Esperienza</span> scegli una esperienza
              </p>
            </div>
          </div>

          <div className="half-70 terzopasso">
            <div className="scelta">
              <label htmlFor="relax">Relax</label>
              <input type="checkbox" name="relax" id="relax" />
            </div>
            <div className="scelta">
              <label htmlFor="cultura">Cultura</label>
              <input type="checkbox" name="cultura" id="cultura" />
            </div>
            <div className="scelta">
              <label htmlFor="ristoriazione">Ristoriazione</label>
              <input type="checkbox" name="ristorazione" id="ristorazione" />
            </div>
            <div className="scelta">
              <label htmlFor="arte">Arte e Design</label>
              <input type="checkbox" name="arte" id="arte" />
            </div>
          </div>
        </section>
        {/* quarto passo  */}
        <section className="crea">
          <div className="half-30 quartopasso">
            <div className="info">
              <p>
                <span>4</span>
                <span>Anteprima</span> ecco un riepilogo
              </p>
            </div>
          </div>

          <div className="half-70 quartopasso">
            <div className="riepilogo">
              <img src={bottigliaX} alt="bottiglia" className="" />
            </div>
          </div>
        </section>

        <section className="tac">
          <Link to="/areapersonale" className="btn-dark">
            Conferma
          </Link>
         
        </section>

        <Footer />
      </>
    );
  }
}
export default PageGenerator;
