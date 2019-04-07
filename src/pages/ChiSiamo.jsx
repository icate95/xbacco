import React from "react";
// import ReactDOM from "react-dom";

// import bgcUno from "../img/1chisiamo.png";
// import bgcDue from "../img/cantinachisiamo.png";
import logoColore from "../img/logo1.png";
// import esperienza from "../img/esperienza.jpg";
// import genera from "../img/genera.jpg";
import bottigliaX from "../img/bottiglia_XBACCO.png";

import Footer from "./components/Footer";

class ChiSiamo extends React.Component {
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }
  render() {
    return (
      <>
    
        <section className="flex two-column info-bot">
          <div className="tac text-info-bot">
            <img src={logoColore} alt="logo" className="logo-small" />
            <h2>vino xbacco</h2>
            <p>
            XBACCO è il nome del vino che nasce dai vitigni coltivati nella
            nostra azienda presso Verona. È il risultato del lavoro e
            dall’utilizzo di tecniche e metodologie moderne, nonostante i
            terreni siano coltivati da tradizioni. Il vino si presenta di colore
            rossastro, con aromi fruttati ma intensi, che rendono un gusto
            armonio e vellutato
            </p>
          </div>
          <div className="bottiglia-centro">
            <img src={bottigliaX} alt="" />
          </div>
          <div className="text-area bgc-blue info-wine">
            <h6>Scheda tecnica</h6>
            <p><strong>Formato bottiglia:</strong> 0,75 l  </p>
            <p><strong>Vitigni: </strong>rossette  </p>
            <p><strong>Posizione geografica: </strong>Verona</p>
            <p><strong>Epoca di vendemmia: </strong>Prima metà di settembre</p>
            <p><strong>Metodo di raccolta: </strong>manuale </p>
            <p><strong>Vinificazione: </strong>tradizionale con vasche in acciaio, macerazione di circa 18 ore, lieviti selezionati e attenti ai controlli </p> 
            <p><strong>Tenore alcolico: </strong>13% vol Temperatura di servizio: 10°C </p>
            <h6>Degustazione</h6>
            <p><strong>Colore: </strong>intenso colore rosso con riflessi  </p>
            <p><strong>Profumo: </strong>Intenso con note fruttate</p>
            <p><strong>Gusto:</strong> Delicato ma di carattere </p>
          </div>
        </section>

        {/* card home */}

        {/* <secton id="chisiamo">
          <h2>chi siamo </h2>
        </secton>
        <section>crea e vivi</section> */}
        <Footer />
      </>
    );
  }
}
export default ChiSiamo;
