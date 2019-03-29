import React from "react";
// import ReactDOM from "react-dom";

// import bgcUno from "../img/1chisiamo.png";
import bgcDue from "../img/cantinachisiamo.png";
import logoColore from "../img/logo1.png";
import esperienza from "../img/esperienza.jpg";
import genera from "../img/genera.jpg";
import bottigliaX from "../img/bottiglia_XBACCO.png";

class ChiSiamo extends React.Component {
  render() {
    return (
      <>
        <div id="hero-chisiamo" > 
        <p>
              XBACCO è una cantina 2.0, nata dalla passione di cinque giovani
              rivoluzionari che hanno saputo unire l’esperienza del consumo del
              vino al design. Da questo binomio nasce difatti un prodotto unico
              nel suo genere, un vino personalizzato da condividere.
            </p>
        </div>
        {/* <div className="flex two-column info-chisiamo">
          <div className="half bgc-blue tac img-center">
            <img src={logoColore} width="100%" alt="logo-home" className='logo-home' />
          </div>
          <div className="half text-area tac">
            <p>
              XBACCO è una cantina 2.0, nata dalla passione di cinque giovani
              rivoluzionari che hanno saputo unire l’esperienza del consumo del
              vino al design. Da questo binomio nasce difatti un prodotto unico
              nel suo genere, un vino personalizzato da condividere.
            </p>
            <p>
              "Non sai come esprimere la tua gratitudine?" Esprimila con XBacco
              e i suoi colori e forme sorprendenti!
            </p>
            <button>Vieni a trovarci!</button>
          </div>
        </div>
        <div className="cover">
          <img src={bgcDue} alt="cover 1" />
        </div> */}
        <section className="flex two-column info-bot">
          <div className="tac text-area">
            <img src={logoColore} alt="logo" className="logo-small" />
            <h2>vino xbacco</h2>
            <p>
              Vino XBACCO è il nome del vino che nasce dalle uve coltivate dalla
              nostra azienda con unità agricola in Sellero (BS) a circa 500
              m.s.l.m. È il risultato dell’intuizione di rivalorizzare, con
              tecniche e metodologie avanzate, i terreni coltivati
              tradizionalmente nel passato. Si presenta di colore giallo
              lucente, con aroma fruttato, dall’espressione elegante, con gusto
              armonico e pieno
            </p>
          </div>
          <div className="bottiglia-centro">
            <img src={bottigliaX} alt="" />
          </div>
          <div className="text-area bgc-blue info-wine">
              <h6>Scheda tecnica</h6>
              <p>
                <strong>Formato bottiglia: </strong>0,75l
              </p>
              <p>
                <strong>Vitigni: </strong>rossese
              </p>
              <p>
                <strong>Vigneto d'origine: </strong>Vigneti di Verona
              </p>
              <p>
                <strong>periodo di vendemmia: </strong>prima meta' di settembre
              </p>
              <p>
                <strong>Metodo di raccolta: </strong>Manuale
              </p>
              <p>
                <strong>Vinificazione: </strong>Tradizionale con vasche in
                acciaio, una breve macerazione di 18 ore, lieviti selezionati e
                attenti ai controlli analitici
              </p>
              <p>
                <strong>Zuccheri residui: </strong>2,0 g/l
              </p>
              <p>
                <strong>Titolo alcolometrico volumico: </strong>12,5%
              </p>
              <p>
                <strong>Temperatura di servizio: </strong>10˚C
              </p>
              <h6>Degustazione:</h6>
              <p>
                <strong>Colore: </strong>Rosso granato
              </p>
              <p>
                <strong>profumo: </strong>intenso e netto con sentori floreali
              </p>
              <p>
                <strong>Gusto: </strong> Delicato ma di carattere, dal sapore
                vellutato, armonico e avvolgente
              </p>
            </div>
        </section>
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
      </>
    );
  }
}
export default ChiSiamo;
