import React from "react";

import logoColore from "../img/logo1.png";
import bottigliaX from "../img/bottiglia_XBACCO.png";


import { BrowserRouter as  Link } from "react-router-dom";

import Footer from "./components/Footer";

import vivi from "../img/vivi.png";
import crea from "../img/crea.png";

class ChiSiamo extends React.Component {
  toTop() {
    if (this.state.location === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <>
        <section className="flex two-column info-bot">
          <div className="text-info-bot">
            <img src={logoColore} alt="logo" className="logo-small" />
            <h2 className='tal'>vino xbacco</h2>
            <p className=' tal'> 
              XBACCO è il nome del vino che nasce dai vitigni coltivati nella
              nostra azienda presso Verona. È il risultato del lavoro e
              dall’utilizzo di tecniche e metodologie moderne, nonostante i
              terreni siano coltivati da tradizioni. Il vino si presenta di
              colore rossastro, con aromi fruttati ma intensi, che rendono un
              gusto armonio e vellutato
            </p>
          </div>
          <div className="bottiglia-centro">
            <img src={bottigliaX} alt="immagine bottiglia xbacco" />
          </div>
          <div className="text-area bgc-blue info-wine">
            <h6>Scheda tecnica</h6>
            <p>
              <strong>Formato bottiglia:</strong> 0,75 l
            </p>
            <p>
              <strong>Vitigni: </strong>rossette
            </p>
            <p>
              <strong>Posizione geografica: </strong>Verona
            </p>
            <p>
              <strong>Epoca di vendemmia: </strong>Prima metà di settembre
            </p>
            <p>
              <strong>Metodo di raccolta: </strong>manuale
            </p>
            <p>
              <strong>Vinificazione: </strong>tradizionale con vasche in
              acciaio, macerazione di circa 18 ore, lieviti selezionati e
              attenti ai controlli
            </p>
            <p>
              <strong>Tenore alcolico: </strong>13% vol Temperatura di servizio:
              10°C
            </p>
            <h6>Degustazione</h6>
            <p>
              <strong>Colore: </strong>intenso colore rosso con riflessi
            </p>
            <p>
              <strong>Profumo: </strong>Intenso con note fruttate
            </p>
            <p>
              <strong>Gusto:</strong> Delicato ma di carattere
            </p>
          </div>
        </section>

        <section className="center">
          <div className="card-etichette">
            <div className="card">
              {/* <SVG value="crea" /> */}
              <img src={crea} alt="Crea" />
              <h2>Crea</h2>
              <p>Fai un regalo personalizzato</p>
              <Link onClick={this.toTop.bind(this)} to="/crea" className="btn-light-small">
                Scopri di più
              </Link>
            </div>

            <div className="card">
              {/* <SVG value="vivi" /> */}
              <img src={vivi} alt="vivi" />
              <h2>Vivi</h2>
              <p>Hai ricevuto una bottiglia XBACCO?</p>
              <Link onClick={this.toTop.bind(this)} to="/vivi" className="btn-light-small">
                Scopri di più
              </Link>
            </div>
          </div>
        </section>

        <section className="mappa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.291655707023!2d9.241678315482684!3d45.48407127910119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c650e73fef85%3A0x8705c7fed6749846!2sVia+Privata+Giovanni+Ventura%2C+20134+Milano+MI!5e0!3m2!1sit!2sit!4v1554665588636!5m2!1sit!2sit"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen
            title='map'
          />
        </section>
        <Footer />
      </>
    );
  }
}
export default ChiSiamo;
