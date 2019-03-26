import React from "react";
// import Generator from "./Generator";
// import { Player } from "video-react";
// import video from '../img/main_xbacco_conv.mov';

import bgcUno from '../img/1fotogenerale.png';
import esperienza from '../img/esperienza.jpg';
import genera from '../img/genera.jpg';

class Home extends React.Component {
  render() {
    return (
      <>
      <section id="uno">
                <h1>video di xbacco</h1>
            </section>
            <section id="due" className='text-area'>    
                <h1>XBacco e' un generative wine</h1>
                <p>Genera emozioni irripetibili, grazie ad un sistema di generative type design. Ci siamo ispirati a questa idea originale per offrire momenti indimenticabili e per dar vita ad un nuovo concetto di esperienza regalo e consumo del vino... </p>
                <input type="text" placeholder='inserisci qui il tuo codice esperienza'/>
            </section>
            <div className="cover">
              <img src={bgcUno} alt="cover 1" />
            </div>
            
            <section id="quattro" className='text-area'>
                <p>Ad ogni occasione, con XBACCO  hai la possibilità di acquistare il nostro vino
                generare il proprio logo e dedicare un messaggio personalizzato,
                abbinandolo a delle attività da vivere nell’immediato.</p>
                <p>Oppure acquista subito e scegli tra le quattro differenti avventure:
                relax, cultura del vino, ristorazione, arte e design.</p>
                
            </section>
            <section id="bottiglie"></section>
            <section id="pattern"></section>
            <section className="flex">
                <div className="half viola">
                    <img src={esperienza} width="100%" alt="esperienza" />
                    <h2>Esperienze</h2>
                </div>
                <div className="half verde immagini">
                    <img src={genera} width="100%" alt="genera" />
                    <h2>Genera</h2>
                    <p>fai un regalo personalizzato ... </p>

                </div>
            </section>
            <section id="sei"></section>
           <section id="sette"></section>
            
      </>
    );
  }
}
export default Home;
