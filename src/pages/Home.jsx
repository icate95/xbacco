import React from "react";
// import Generator from "./Generator";
// import { Player } from "video-react";
// import video from '../img/main_xbacco_conv.mov';

// import bgcUno from "../img/1fotogenerale.png";
// import bgcDue from "../img/bottigliehomeechisiamo.png";
import esperienza from "../img/esperienza.jpg";
import genera from "../img/genera.jpg";
// import bottigliaAD from "../img/bottiglia_ARTE E DESIGN.png";
// import bottigliaC from "../img/bottiglia_CULTURA DEL VINO.png";
// import bottigliaR from "../img/bottiglia_RELAX.png";
// import bottigliaRI from "../img/bottiglia_RISTORAZIONE.png";
// import bottigliaX from "../img/bottiglia_XBACCO.png";

import logoColore from "../img/logo1.png";

import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <section id="hero-home" className="flex">
          <div className="half two-columns title">
          
            <h2>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Saepe, ipsum?
            </h2>
            <br />
            <br />
            <Link to="/chisiamo" className='link-light'>Vieni a conoscerci <i className="fas fa-chevron-right" /></Link>
          </div>
          <div className="half two-columns">
            <img src={logoColore} className="logo-home" alt="" />
            <h1>Animazione</h1>
          </div>
        </section>
        <section id="due" className="text-area tac">
          <h1>XBacco e' un generative wine</h1>
          <p>
            Genera emozioni irripetibili, grazie ad un sistema di generative
            type design. Ci siamo ispirati a questa idea originale per offrire
            momenti indimenticabili e per dar vita ad un nuovo concetto di
            esperienza regalo e consumo del vino...
          </p>
        </section>

        {/* <section id="slogan">
          <div className="content">
            <h3>vino</h3>
            <h3>unicità</h3>
            <h3>innovazione</h3>
            <h3>design</h3>
          </div>
        </section> */}

        <section className="flex two-column">
          <div className="half-hover verde immagini">
            <img src={genera} width="100%" alt="genera" />
            <h2>Crea</h2>
            <p>
              fai un regalo personalizzato, crea la tua etichetta e scrivi un
              messaggio.
            </p>
            {/* <a href="#link">
              <i className="fas fa-chevron-right fa-2x" />
            </a> */}
          </div>
          <div className="half-hover viola">
            <img src={esperienza} width="100%" alt="esperienza" />
            <h2>VIVI</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ducimus!
            </p>
            <a href="#link">
              <i className="fas fa-chevron-right fa-2x" />
            </a>
          </div>
        </section>

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
            <Link to="/chisiamo">
              <i className="fas fa-chevron-right fa-2x" />
            </Link>
          </div>

          <div className="cover-bottiglie" />
        </section>
      </>
    );
  }
}
export default Home;
