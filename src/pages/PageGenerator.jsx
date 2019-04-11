import React from "react";
// import ReactDOM from "react-dom";

import Generator from "./Generator";
// import 'function.js';
import relax from "../img/relax.png";
import ristorazione from "../img/ristorazione.png";
import culturadelvino from "../img/culturadelvino.png";
import artedesign from "../img/artedesign.png";

// import { Link } from "react-router-dom";

// import logoColore from "../img/logo1.png";
import bottigliaX from "../img/bottiglia_XBACCO.png";

import Footer from "./components/Footer";

class PageGenerator extends React.Component {
  AddActive() {
    console.log(this);
  }

  render() {
    return (
      <>
        <section className="hero-crea">
          <h1 className="big-title tac">
            <span>Crea</span> <br />
            il regalo perfetto
          </h1>
        </section>
        <section className="crea">
          <div className="half-30">
            <p>Se vuoi rendere ancora più unico il tuo regalo, realizza l’etichetta
            con dei messaggi personali... ti basterà scrivere una messaggio ed
            acquistare ciò che hai appena generato! <br />{" "}
            <span>Come funziona?</span> </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3>
              <span>Primo passo:</span>
              <br /> COMPONI
            </h3>
            <p>Inserisci una parola chiave</p>
          </div>
          <div className="half-70">
            <Generator />
          </div>
        </section>

        {/* secondo passo */}
        <section className="crea">
          <div className="half-30">
            <h3>
              <span>Secondo passo:</span>
              <br /> DEDICA
            </h3>
            <p>Inserisci un messaggio personale</p>
          </div>
          <div className="half-70">
            <textarea
              name=""
              id=""
              placeholder="Inserisci qui la tua dedica..."
            />
            <button className="btn-light-small">Conferma dedica</button>
          </div>
        </section>
        {/* terzo passo  */}

        <section className="crea">
          <div className="half-30">
            <h3>
              <span>Terzo passo:</span>
              <br /> ESPERIENZA
            </h3>
            <p>Scegli una esperienza da allegare al tuo regalo</p>
          </div>
          <div className="half-70">
            <Scelta
              titolo="Relax"
              img={relax}
              descrizione="Scegliendo l’esperienza relax avrai accesso a musica, libri e poesie consigliate da noi."
              color="#88abae"
              classElement="relax"
            />
            <Scelta
              titolo="Cultura del vino"
              img={culturadelvino}
              descrizione="Se sei appassionato di vino ma vorresti saperne di più, ti offriamo l’accesso alla cultura del vino: concediti un calice di vino, mentre guardi i nostri mini corsi da sommelier."
              color="#690e3b"
              classElement="cultura"
            />
            <Scelta
              titolo="Ristorazione"
              img={ristorazione}
              descrizione="Per la ristorazione abbiamo selezionato delle prelibate ricette abbinate al nostro vino."
              color="#d49e55"
              classElement="risto"
            />
            <Scelta
              titolo="Arte e design"
              img={artedesign}
              descrizione="Per gli appassionati del vino che non vogliono rinunciare nemmeno alla bellezza dell’arte, abbiamo ideato arte e design: nozioni sul type design e sugli artisti più famosi."
              color="#667384"
              classElement=""
            />
          </div>
        </section>
        {/* quarto passo  */}

        <section className="crea">
          <div className="half-30">
            <h3>
              <span>ANTEPRIMA:</span>
              <br />
            </h3>
            <p>Riepilogo</p>
          </div>
          <div className="half-70" id="quartopasso">
            <img src={bottigliaX} alt="bottiglia" className="bottiglia" />
            <div className='testo'>
              <p>
                <span>Dedica: </span> <span className="font-messaggio">Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Rerum, natus.</span> 
              </p>
              <p>
                <span>Esperienza allegata: </span> Relax
              </p>
            </div>
            <button>Conferma l'ordine</button>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

class Scelta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  // active() {

  //    document.getElementById().classList.add('active')
  //    document.getElementById().siblings().classList.remove('active')

  // }
  render(props) {
    return (
      <div
        className="scelta"
        id={this.props.classElement}
        style={{ backgroundColor: this.props.color }}
      >
        <div className="split-30">
          <h4>{this.props.titolo}</h4>
          <img src={this.props.img} alt="" />
        </div>
        <div className="split-70">
          <p>{this.props.descrizione}</p>
        </div>
        {/* <button onClick={this.active.bind(this)}> Scegli</button> */}
        <button> Scegli</button>
      </div>
    );
  }
}

export default PageGenerator;
