import React from "react";
// import ReactDOM from "react-dom";
import intro from "../../img/gufo.jpg";

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <h3>XBACCO è un generative wine</h3>
        <p>
          Genera emozioni irripetibili, grazie ad un sistema di generative type
          design. Ci siamo ispirati a questa idea originale per offrire momenti
          indimenticabili e per dar vita ad un nuovo concetto di esperienza
          regalo e consumo del vino...
        </p>
        <p>inserisci il codice e inizia la tua esperienza!</p>
        <input type="text" />
        <br />
        <img src={intro} className="wide-img" alt='intro img' />
        <p>
          Ad ogni occasione, con XBACCO hai la possibilità di acquistare il
          nostro vino, generare il proprio logo e dedicare un messaggio
          personalizzato, abbinandolo a delle attività da vivere nell’immediato.
          Oppure acquista subito e scegli tra le quattro differenti avventure:
          relax, cultura del vino, ristorazione, arte e design
        </p>
      </div>
    );
  }
}
export default Intro;
