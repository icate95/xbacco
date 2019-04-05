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
        <section className="hero-crea">
          <h1 className="big-title tac">
            <span>Crea</span> <br />
            Lorem, ipsum dolor.
          </h1>
          <p className="come-funziona">
            Se vuoi rendere ancora più unico il tuo regalo, realizza l’etichetta
            con dei messaggi personali... ti basterà scrivere una messaggio ed
            acquistare ciò che hai appena generato! <br />{" "}
            <span>Come funziona?</span>
          </p>
        </section>
        <section className="crea">
          <div className="half-30 primopasso">
            <div className="info">
              <p>
                <span>1</span>
                <span>COMPONI</span> inserisci una parola chiave
              </p>
            </div>
          </div>

          {/* <div className="half-70 tac"> */}
          <div className="fascia">
            <div className="in-fascia">
            <Generator />
            </div>
           
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

          {/* <div className="half-70 secondopasso"> */}
          <div className="fascia secondopasso">
            <div className='in-fascia'>
              <textarea
              name=""
              id=""
              placeholder="Inserisci qui la tua dedica..."
            />
            <button className="btn-light-small">Conferma dedica</button>
       
            </div>

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

          {/* <div className="half-70 terzopasso"> */}
          <div className="fascia terzopasso">
            <div className="in-fascia">
               {/* scelte  */}
              <RelaxChoice />
              <CulturaChoice />
              <RistorazioneChoice />
              <ArteChoice />
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

          {/* <div className="half-70 quartopasso"> */}
          <div className="fascia quartopasso">
            <div className="in-fascia">
            <div className="riepilogo">
              <img src={bottigliaX} alt="bottiglia" className="" />
            </div>
            </div>
           
          </div>
        </section>
{/* 
        <section className="tac">
          <Link to="/areapersonale" className="btn-dark">
            Conferma
          </Link>
        </section> */}

        <Footer />
      </>
    );
  }
}

class RelaxChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <div className="scelta">
        <label htmlFor="relax">Relax</label>
        <input type="checkbox" name="relax" id="relax" />
      </div>
    );
  }
}
class CulturaChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <div className="scelta">
        <label htmlFor="cultura">Cultura</label>
        <input type="checkbox" name="cultura" id="cultura" />
      </div>
    );
  }
}
class RistorazioneChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <div className="scelta">
        <label htmlFor="ristoriazione">Ristoriazione</label>
        <input type="checkbox" name="ristorazione" id="ristorazione" />
      </div>
    );
  }
}
class ArteChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <div className="scelta">
        <label htmlFor="arte">Arte e Design</label>
        <input type="checkbox" name="arte" id="arte" />
      </div>
    );
  }
}

export default PageGenerator;
