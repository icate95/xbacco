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
import vivi from "../img/vivi.png";
import crea from "../img/crea.png";

import Footer from "./components/Footer";

// import SVG from "./SVG";

// import logoColore from "../img/logo1.png";
import animazione from "../img/animazione.gif";
import videoFondo from "../img/xbacco-home.gif";

import { Link } from "react-router-dom";

class Home extends React.Component {
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }
  render() {
    return (
      <>
        <section id="hero-home" className="flex">
          <img src={animazione} alt="animazione introduttiva xbacco" />
        </section>

        <section className="flex two-column info-home">
          <div className="half text-area-big" id="slogan">
            {/* <div className="half two-columns title"> */}
            <div className="content">
              <h1>
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
            <h2>il team</h2>
            <p>
            Xbacco è un progetto creato è sviluppato nel corso di metaprogetto. Analizzando una personas iniziale si è raggiunto il bisogno di fidelizzazione del cliente.
            </p>
            <Link to="/team" className="link-dark">
              Vieni a scoprire il team <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </section>

        <section className="center">
          <div className="card-etichette">
            <div className="card">
              {/* <SVG value="crea" /> */}
              <img src={crea} alt="Crea" />
              <h2>Crea</h2>
              <p>Fai un regalo personalizzato</p>
              <Link to="/crea" className="btn-light-small">
                Scopri di più
              </Link>
            </div>

            <div className="card">
              {/* <SVG value="vivi" /> */}
              <img src={vivi} alt="vivi" />
              <h2>Vivi</h2>
              <p>Hai ricevuto una bottiglia XBACCO?</p>
              <Link to="/vivi" className="btn-light-small">
                Scopri di più
              </Link>
            </div>
          </div>
        </section>

        <section className='video-fondo'>
          <img src={videoFondo} alt="Video di presentazione xbacco"/>
        </section>

        <Footer />
      </>
    );
  }
}
export default Home;
