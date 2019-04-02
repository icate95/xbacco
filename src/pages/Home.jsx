import React from "react";
// import Generator from "./Generator";
// import { Player } from "video-react";
// import video from '../img/main_xbacco_conv.mov';

// import bgcUno from "../img/1fotogenerale.png";
// import bgcDue from "../img/puntivendita.png";
// import esperienza from "../img/esperienza.jpg";
// import genera from "../img/genera.jpg";
// import bottigliaAD from "../img/bottiglia_ARTE E DESIGN.png";
// import bottigliaC from "../img/bottiglia_CULTURA DEL VINO.png";
// import bottigliaR from "../img/bottiglia_RELAX.png";
// import bottigliaRI from "../img/bottiglia_RISTORAZIONE.png";
// import bottigliaX from "../img/bottiglia_XBACCO.png";

import Footer from "./components/Footer";

import SVG from "./SVG";

import logoColore from "../img/logo1.png";
import animazione from "../img/animazione.gif";

import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <section id="hero-home" className="flex">
          <div className="half-30 two-columns title">
          <h1> <span>X</span>Bacco</h1>
          <h3>è un generative wine</h3>

            <br />
            <Link to="/chisiamo" className="link-light">
              Vieni a conoscerci <i className="fas fa-chevron-right" />
            </Link>
          </div>
          <div className="half-70 two-columns">
            <img src={animazione} alt="" />
          </div>
        </section>



        <section className="flex two-column info-home">
          <div className="half cover-bottiglie" />
          <div className="half text-area-big">
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
            <Link to="/chisiamo" className="link-dark">
              scopri di più <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </section>



{/*         
        <section id="due" className="text-area-bandiera">
          <div className="left">
          <h1> <span>X</span>Bacco</h1>
          <h3>è un generative wine</h3>
          </div>
          <div className="right">
          <p>
            Genera emozioni irripetibili, grazie ad un sistema di generative
            type design. Ci siamo ispirati a questa idea originale per offrire
            momenti indimenticabili e per dar vita ad un nuovo concetto di
            esperienza regalo e consumo del vino...
          </p>
          </div>
        </section> */}

        {/* <section id="slogan">
          <div className="content">
            <h3>vino</h3>
            <h3>unicità</h3>
            <h3>innovazione</h3>
            <h3>design</h3>
          </div>
        </section> */}


        {/* <section className="center">
          <div className="buble">
            <div className="crea">
              <div className="bg-img" />
              <SVG value="crea" />
              <div className="content">
                <h2>Crea</h2>
                <p>Fai un regalo personalizzato</p>
                <Link to="/crea" className="link-light">
                  Crea il tuo messaggio <i className="fas fa-chevron-right" />{" "}
                </Link>
              </div>
            </div>

            <div className="vivi">
              <div className="bg-img" />

              <SVG value="vivi" />
              <div className="content">
                <h2>Vivi</h2>
                <p>Hai ricevuto una bottiglia XBACCO?</p>
                <Link to="/vivi" className="link-light">
                  Vivi l'esperienza <i className="fas fa-chevron-right" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </section> */}


        <section className="center">
          <div className="card-etichette">
            <div className="crea">
              <div className="bg-img" />
              <SVG value="crea" />
             
                <h2>Crea</h2>
                <p>Fai un regalo personalizzato</p>
                <button className="btn-light">ckajs</button>
            
            </div>

            <div className="vivi">
              <div className="bg-img" />

              <SVG value="vivi" />
             
                <h2>Vivi</h2>
                <p>Hai ricevuto una bottiglia XBACCO?</p>
                <button className="btn-light">ckajs</button>
              </div>
         
          </div>
        </section>



        {/* <section className="text-area tac">
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
        </section> */}

        <Footer />
      </>
    );
  }
}
export default Home;
