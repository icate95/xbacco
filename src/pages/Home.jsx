import React from "react";
// import Generator from "./Generator";
// import { Player } from "video-react";
// import video from '../img/main_xbacco_conv.mov';

import bgcUno from "../img/1fotogenerale.png";
import bgcDue from "../img/bottigliehomeechisiamo.png";
import esperienza from "../img/esperienza.jpg";
import genera from "../img/genera.jpg";
import bottigliaAD from "../img/bottiglia_ARTE E DESIGN.png";
import bottigliaC from "../img/bottiglia_CULTURA DEL VINO.png";
import bottigliaR from "../img/bottiglia_RELAX.png";
import bottigliaRI from "../img/bottiglia_RISTORAZIONE.png";
import bottigliaX from "../img/bottiglia_XBACCO.png";

import logoColore from "../img/logo1.png";

class Home extends React.Component {
  render() {
    return (
      <>
        <section id="hero-home">
          <img src={logoColore} className="logo-home" alt="" />
          <h1>Animazione</h1>
        </section>
        <section id="due" className="text-area tac">
          <h1>XBacco e' un generative wine</h1>
          <p>
            Genera emozioni irripetibili, grazie ad un sistema di generative
            type design. Ci siamo ispirati a questa idea originale per offrire
            momenti indimenticabili e per dar vita ad un nuovo concetto di
            esperienza regalo e consumo del vino...
          </p>
          {/* <input
            className="center-input"
            type="text"
            id="insert-code"
            placeholder="0000 0000 0000 0000"
          />
          <label className="center-label" htmlFor="insert-code">
            Inserisci qui il tuo codice esperienza
          </label> */}
          <p className="bigger">
            inserisci il codice e inizia la tua esperienza
          </p>
          <button>clicca qui</button>
        </section>
        <div className="cover-bicchieri" />

        <section id="quattro" className="text-area tac">
          <p>
            Ad ogni occasione, con XBACCO hai la possibilità di acquistare il
            nostro vino generare il proprio logo e dedicare un messaggio
            personalizzato, abbinandolo a delle attività da vivere
            nell’immediato.
          </p>
          <p>
            Oppure acquista subito e scegli tra le quattro differenti avventure:
            relax, cultura del vino, ristorazione, arte e design.
          </p>
        </section>

        <div className="cover-bottiglie">
          <img src={bgcDue} alt="cover 1" />
        </div>
        <section className="flex two-column">
          <div className="half-hover viola">
            <img src={esperienza} width="100%" alt="esperienza" />
            <h2>Esperienze</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ducimus!
            </p>
            <a href="">
              <i className="fas fa-chevron-right fa-2x" />
            </a>
          </div>
          <div className="half-hover verde immagini">
            <img src={genera} width="100%" alt="genera" />
            <h2>Genera</h2>
            <p>
              fai un regalo personalizzato, crea la tua etichetta e scrivi un
              messaggio.{" "}
            </p>
            <a href="">
              <i className="fas fa-chevron-right fa-2x" />
            </a>
          </div>
        </section>
        <section id="slogan">
          <div className="content">
            <h3>vino</h3>
            <h3>unicità</h3>
            <h3>innovazione</h3>
            <h3>design</h3>
          </div>
        </section>

        <section>
          <div className="text-area-big tac">
            <h2>Vini xbacco</h2>
            <p>
              L’eleganza e la ricercatezza nei dettagli ed il sapore esclusivo,
              <br />
              valorizzano il nostro brand e ci consentono di distinguerci.
              <br />
              La qualità dei nostri prodotti e servizi offerti è al centro dei
              nostri obiettivi
              <br />e ci teniamo ad offrire la migliore esperienza possibile.
            </p>
            <a href="" className="hover-effect">
              <i className="fas fa-chevron-right fa-2x" />
            </a>
          </div>
          <div className="bottiglie">
            <img src={bottigliaX} alt="" />
            <img src={bottigliaAD} alt="" />
            <img src={bottigliaC} alt="" />
            <img src={bottigliaR} alt="" />
            <img src={bottigliaRI} alt="" />
          </div>
        </section>
      </>
    );
  }
}
export default Home;
