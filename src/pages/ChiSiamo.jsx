import React from "react";
// import ReactDOM from "react-dom";

// import bgcUno from "../img/1chisiamo.png";
import bgcDue from "../img/cantinachisiamo.png";
import logoColore from "../img/logo1.png";
import esperienza from "../img/esperienza.jpg";
import genera from "../img/genera.jpg";

class ChiSiamo extends React.Component {
  render() {
    return (
      <>
        <div id="sfondo" />
        <div className="flex">
          <div className="half bgc-blue">
            <img src={logoColore} width="100%" alt="logo" />
          </div>
          <div className="half text-area tac">
            <p>
              XBACCO è una cantina 2.0, nata dalla passione 
              di cinque giovani rivoluzionari che hanno 
              saputo unire l’esperienza del consumo del 
              vino al design. Da questo binomio nasce difatti 
              un prodotto unico nel suo genere, un vino 
              personalizzato da condividere.
            </p>
            <p>"Non sai come esprimere la tua gratitudine?"  Esprimila con
              XBacco e i suoi colori  e forme sorprendenti!
            </p>
            <button>Vieni a trovarci!</button>
          </div>
        </div>
        <div className="cover">
          <img src={bgcDue} alt="cover 1" />
        </div>
        <section className="flex">
          <div className="half nero">
            <div className="margine">
              <h5>
                Vino XBACCO è il nome del vino che nasce 
                dalle uve coltivate dalla nostra azienda con 
                unità agricola in Sellero (BS) a circa 500 m.s.l.m. 
                È il risultato dell’intuizione di rivalorizzare, con 
                tecniche e metodologie avanzate, i terreni 
                coltivati tradizionalmente nel passato. 
                Si presenta di colore giallo lucente, con aroma 
                fruttato, dall’espressione elegante, con gusto 
                armonico e pieno
              </h5>
            </div>
          </div>
          <div className="half nero centro">
            <div className="margine">
              <h2>scheda tecnica</h2>
              <h5>
                <strong>Formato bottiglia: </strong>0,75l
              </h5>
              <h5>
                <strong>Vitigni: </strong>rossese
              </h5>
              <h5>
                <strong>Vigneto d'origine: </strong>Vigneti di Verona
              </h5>
              <h5>
                <strong>periodo di vendemmia: </strong>prima meta' di settembre
              </h5>
              <h5>
                <strong>Metodo di raccolta: </strong>Manuale
              </h5>
              <h5>
                <strong>Vinificazione: </strong>Tradizionale con vasche in
                acciaio, una breve macerazione di 18 ore, lieviti selezionati e
                attenti ai controlli analitici
              </h5>
              <h5>
                <strong>Zuccheri residui: </strong>2,0 g/l
              </h5>
              <h5>
                <strong>Titolo alcolometrico volumico: </strong>12,5%
              </h5>
              <h5>
                <strong>Temperatura di servizio: </strong>10˚C
              </h5>
              <h2>Degustazione:</h2>
              <h5>
                <strong>Colore: </strong>Rosso granato
              </h5>
              <h5>
                <strong>profumo: </strong>intenso e netto con sentori floreali
              </h5>
              <h5>
                <strong>Gusto: </strong> Delicato ma di carattere, dal sapore
                vellutato, armonico e avvolgente
              </h5>
            </div>
          </div>
        </section>
        <section className="flex">
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
