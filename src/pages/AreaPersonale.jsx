import React from "react";
// import ReactDOM from "react-dom";

import mariorossi from "../img/mariorossi.png";

import bottigliaRI from "../img/bottiglia_RISTORAZIONE.png";
import bottigliaX from "../img/bottiglia_XBACCO.png";

import Footer from "./components/Footer";

class AreaPersonale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carrello: {
        elementi: 2,
        totale: 55
      }
    };
  }

  render() {
    return (
      <>
        <section className="areapersonale">
          <div className="utente">
            <img
              src={mariorossi}
              width="50%"
              alt="logo-home"
              className="logo-home"
            />
            <h3>Mario Rossi</h3>
            <div className="info-user tac">
              <p className="strong">DATA DI NASCITA:</p>
              <p>26/05/1956</p>
              <br />

              <p className="strong">INDIRIZZO:</p>
              <p>
                Milano Lambrate (MI) <br /> Via Ventura, 5 <br />
                20134
              </p>
            </div>
            <div className="info-buro">
              <a href="#">
                <i class="fas fa-box-open" />Ordini precedenti
              </a>{" "}
              <br />
              {/* <a href="#"><i class="fas fa-lock"></i>Impostazioni di sicurezza</a>  */}
            </div>
            <div className="info-buro">
              <a href="#">
                <i class="fas fa-user" />Impostazioni profilo
              </a>{" "}
              <br />
              <a href="#">
                <i class="fas fa-cog" />Opzioni di pagamento
              </a>{" "}
              <br />
              <a href="#">
                <i class="fas fa-lock" />Impostazioni di sicurezza
              </a>{" "}
              <br />
            </div>
          </div>

          <div className="content">
            <h2>
              <i className="fas fa-shopping-cart" /> Il tuo ordine
            </h2>
            <Elemento
              vino="vino xbacco"
              tipoOrdine="Etichetta standard: pacchetto ristorazione"
              prezzo="30"
              quantita="1"
              img={bottigliaRI}
            />
            <Elemento
              vino="vino xbacco"
              tipoOrdine="Etichetta personalizzata"
              prezzo="25"
              quantita="2"
              img={bottigliaX}
            />

            <div className="riepilogo">
              <h3>Riepilogo</h3>
              <p>Numero elementi nel carrello: <span className="somma-elem">{this.state.carrello.elementi}</span></p>
              <p>
                Totale carrello: <span className="somma">{this.state.carrello.totale}</span> €
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

function Elemento(props) {
  return (
    <div className="elem">
      <img src={props.img} alt="immagine bottiglia" />
      <div className="text-area-elem">
        <div className="text">
          <p className="nome-elem">{props.vino}</p>
          <p>{props.tipoOrdine}</p>
        </div>
        <div className="icone">
          <p>Prezzo: {props.prezzo}€</p>
          <p className='quantita'>
            Quantità: <i className="fas fa-plus" />{" "}
            <span className="quantita">{props.quantita}</span>{" "}
            <i className="fas fa-minus" />
          </p>
          <p className='rimuovi'>
            Rimuovi
            <i className="fas fa-trash-alt" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default AreaPersonale;
