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

// import logoColore from "../img/logo1.png";
import animazione from "../img/animazione.gif";

import { Link } from "react-router-dom";

class Home extends React.Component {
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }
  render() {
    return (
      <>
        <section id="hero-home" className="flex">
          <img src={animazione} alt="" />
        </section>

        <section className="flex two-column info-home">
          <div className="half text-area-big" id="slogan">
            {/* <div className="half two-columns title"> */}
            <div className="content">
              <h1>
                {" "}
                <span className="grassetto">X</span>Bacco
            </h1>
              <h3>è un generative wine</h3>
              <br />
              <Link to="/chisiamo" className="link-light">
                Vieni a conoscerci <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
          {/* </div> */}
          <div className="half cover-bicchieri" />
        </section>

        <section className="flex two-column info-home">
          <div className="half cover-bottiglie" />
          <div className="half text-area-big">
            <h2>Vini xbacco</h2>
            <p>
              XBACCO è il nome del vino che nasce dai vitigni coltivati nella nostra azienda presso Verona.
  È il risultato del lavoro e dall’utilizzo di tecniche e metodologie moderne, nonostante i terreni siano coltivati da tradizioni.
  Il vino si presenta di colore rossastro, con aromi fruttati ma intensi, che rendono un gusto armonio e vellutato
            </p>
            <Link to="/chisiamo" className="link-dark">
              scopri di più <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </section>

        <section className="center">
          <div className="card-etichette">
            <div className="card">
              <SVG value="crea" />
              <h2>Crea</h2>
              <p>Fai un regalo personalizzato</p>
              <button className="btn-light-small">Scopri di più</button>
            </div>

            <div className="card">
              <SVG value="vivi" />

              <h2>Vivi</h2>
              <p>Hai ricevuto una bottiglia XBACCO?</p>
              <button className="btn-light-small">Scopri di più</button>
            </div>
          </div>
        </section>

        <section className="center">
          <div className="card-etich\ette">
            <div className="card">
              <SVG value="crea" />
              <h2>Crea</h2>
              <p>Fai un regalo personalizzato</p>
              <button className="btn-light-small">Scopri di più</button>
            </div>

            <div className="card">
              <SVG value="vivi" />

              <h2>Vivi</h2>
              <p>Hai ricevuto una bottiglia XBACCO?</p>
              <button className="btn-light-small">Scopri di più</button>
            </div>
          </div>
        </section>

        {/* <section className="flex two-column info-home">
          <div className="half " >
          <div className="card-etichette">
            <div className="card">
              <SVG value="crea" />
              <h2>Crea</h2>
              <p>Fai un regalo personalizzato</p>
              <button className="btn-light-small">Scopri di più</button>
            </div>

            <div className="card">
              <SVG value="vivi" />

              <h2>Vivi</h2>
              <p>Hai ricevuto una bottiglia XBACCO?</p>
              <button className="btn-light-small">Scopri di più</button>
            </div>
          </div>


            </div>
          <div className="half text-area-big">
          <div className="card-etichette">
            <div className="card">
              <SVG value="crea" />
              <h2>Crea</h2>
              <p>Fai un regalo personalizzato</p>
              <button className="btn-light-small">Scopri di più</button>
        
            </div>
          </div>
          </div>
        </section> */}

        <section>*Video*</section>

      

        <Footer />
      </>
    );
  }
}
export default Home;
