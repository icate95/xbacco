import React from "react";
// import ReactDOM from "react-dom";

// import logoColore from "../img/logo1.png";
import imglibro from "../img/libro.jpg";
import imgpoesia from "../img/poesia.jpg";
import imgmusica from "../img/Musica.jpg";
import audio from "../audio/You_Never_Can_Tell.mp3";
import vivi from "../img/relax.png";
import musica from "../img/musica.png";
import poesia from "../img/poesia.png";
import libro from "../img/libro.png";

// import SVG from "./SVG";

import Footer from "./components/Footer";

class Esperienze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { value: 654321, tipe: "custom" },
        { value: 123456, tipe: "default" }
      ],
      SecondoPassoRelax: false,
      SecondoPassoCustomMessage: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    var valoreInput = document.getElementById("input-code").value;

    for (let i = 0; i < this.state.data.length; i++) {
      if (valoreInput == this.state.data[i].value) {
        document.getElementById("input-code").classList.add("ok");
        // document.getElementById("button").disabled = false;

        if (this.state.data[i].tipe == "custom") {
          setInterval(
            this.setState({
              ...this.state,
              SecondoPassoCustomMessage: true,
              SecondoPassoRelax: false
            }),
            1000
          );
        } else if (this.state.data[i].tipe == "default") {
          // alert('codice valido per relax')
          setInterval(
            this.setState({
              ...this.state,
              SecondoPassoCustomMessage: false,
              SecondoPassoRelax: true
            }),
            1000
          );
        }
      } else {
        document.getElementById("input-code").classList.remove("ok");
        // document.getElementById("button").disabled = true;
      }
    }
  }

  render() {
    return (
      <>
        <section className="primopasso">
          <div className="hero-vivi tac">
            <h1>
              <span>Vivi</span> <br />
              un'esperienza unica
            </h1>
          </div>

          <div id="inserisciCodice" className="active">
            <div className="half-30">
              <h3>Come funziona:</h3>
              <p>
                <span> Hai ricevuto una bottiglia XBACCO?</span>
              </p>
              <p>
                Inserisci il codice che trovi sul biglietto allegato e vivi
                l'esperienza collegata!
              </p>
            </div>

            <div className="half-70 tac">
              {/* <SVG /> */}
              <img src={vivi} alt="" />
              <form action="" method="get">
                <label htmlFor="input-code">Inserisci il codice:</label>
                <br/>
                <input
                  type="text"
                  id="input-code"
                  name="input-code"
                  className='input'
                  onChange={this.handleChange}
                />
                <br />
                {/* <button
                    disabled
                    id="button"
                    className="btn-light-small"
                    onClick={this.checkCode}
                  >
                    Inserisci codice e procedi
                    <i className="fas fa-chevron-right" />
                  </button> */}
              </form>
            </div>
          </div>
        </section>
        {this.state.SecondoPassoRelax && <SecondoPassoRelax />}
        {this.state.SecondoPassoCustomMessage && <SecondoPassoCustomMessage />}

        <Footer />
      </>
    );
  }
}

class SecondoPassoRelax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalpoesia: false,
      modallibro: false,
      modalmusica: false
    };
  }

  modalpoesia() {
    this.setState({
      modalpoesia: true,
      modallibro: false,
      modalmusica: false
    });
  }
  modallibro() {
    this.setState({
      modalpoesia: false,
      modallibro: true,
      modalmusica: false
    });
  }
  modalmusica() {
    this.setState({
      modalpoesia: false,
      modallibro: false,
      modalmusica: true
    });
  }
  close() {
    this.setState({
      modalpoesia: false,
      modallibro: false,
      modalmusica: false
    });
  }

  render() {
    return (
      <>
        <div className="custom" id="passo2">
          <h1>
            <span>Relax</span> <br />
            scegli
          </h1>

          <div className="buble-quattro">
            <div className="libro" onClick={this.modallibro.bind(this)}>
              <img src={libro} alt="img xbacco libro" />
              <h3>Libro</h3>
              <p>
                Cosa c’è di meglio che un buon bicchiere di vino e un bel
                romanzo?
              </p>
            </div>

            <div className="musica" onClick={this.modalmusica.bind(this)}>
              <img src={musica} alt="img xbacco musica" />
              <h3>Musica</h3>
              <p>Ascolta un brano da noi selezionato e gusta il nostro vino</p>
            </div>

            <div className="poesia" onClick={this.modalpoesia.bind(this)}>
              <img src={poesia} alt="img xbacco poesia" />
              <h3>Poesia</h3>
              <p>
                Il vino, un soggetto da sempre decantato nelle poesie: ricco di
                storia e sapore.
              </p>
            </div>
          </div>

          <div
            id="info-select-poesia"
            className={this.state.modalpoesia ? "active" : ""}
          >
            <div className="img">
              <img src={imgpoesia} alt="imgpoesia" />
            </div>
            <div className="text">
              <i onClick={this.close.bind(this)} className="fas fa-times" />
              <h3>Brindisi</h3>

              <br />
              <br />
              <p>
                <span>Autore:</span> Stephane Mallarmé
              </p>
              <p>
                <span>Anno:</span> 1893
              </p>
              <br />
              <p>
                <span>Altre informazioni:</span> In questa lirica il poeta
                attraverso una serie di analogie e simboli esalta la ricerca
                poetica e la paragona a un'avventura pericolosa, a un navigare
                irto di ostacoli verso l'ignoto. E' da notare nella lirica il
                linguaggio rarefatto a la tendenza di Mallarmé a raggiungere la
                parola pura, assoluta a disincrostare cioè il linguaggio da ogni
                scoria di materialità accumulata con il suo uso comune.
              </p>

              <br />
              <br />
              <a
                href="http://www.enotecaletteraria.it/il-vino-in-versi/stephane-mallarme-brindisi"
                className="link-dark"
                target="_blank"
              >
                Leggi la poesia: Stephane Mallarmé - Brindisi{" "}
              </a>
            </div>
          </div>
          <div
            id="info-select-musica"
            className={this.state.modalmusica ? "active" : ""}
          >
            <div className="img">
              <img src={imgmusica} alt="imgmusica" />
            </div>
            <div className="text">
              <i onClick={this.close.bind(this)} className="fas fa-times" />
              <h3>Musica</h3>

              <br />
              <br />
              <p>
                <span>Autore:</span> Chuck Berry
              </p>
              <p>
                <span>Anno:</span> 1964
              </p>
              <br />
              <p>
                <span>Altre informazioni:</span> You Never Can Tell è una brano
                musicale rock and roll di Chuck Berry, pubblicato nel 1964
                nell'album St. Louis to Liverpool. Ha ottenuto un grande
                successo, tanto che diversi artisti nel corso degli anni ne
                hanno tratto delle cover. Il brano è stato usato come sottofondo
                musicale nel film di Quentin Tarantino Pulp Fiction, nella
                celebre scena della gara di ballo con Vincent Vega (John
                Travolta) e Mia Wallace (Uma Thurman) nel ristorante Jack Rabbit
                Slim's.
              </p>

              <br />
              <br />
              <audio src={audio} controls />
            </div>
          </div>
          <div
            id="info-select-libro"
            className={this.state.modallibro ? "active" : ""}
          >
            <div className="img">
              <img src={imglibro} alt="imglibro" />
            </div>
            <div className="text">
              <i onClick={this.close.bind(this)} className="fas fa-times" />
              <h3>Jane Eyre</h3>

              <br />
              <br />
              <p>
                <span>Autore:</span> Charlotte Bronte
              </p>
              <p>
                <span>Anno:</span> 1847
              </p>
              <br />
              <p>
                <span>Altre informazioni:</span> Il racconto è scritto in forma
                autobiografica, con la protagonista, Jane Eyre appunto, che si
                rivolge in modo diretto al "lettore"; lo stile presenta aspetti
                puntualmente descrittivi dell'ambiente e dei personaggi, insieme
                all'approfondimento dell'evoluzione della protagonista dal punto
                di vista emotivo, morale e sentimentale. Accolto con successo
                già al suo apparire, nonostante il suo porsi in dissonanza con i
                cliché dell'epoca, il romanzo è tuttora molto attuale grazie ad
                una concomitanza di molteplici fattori, come gli aspetti
                descrittivi, vivaci e realistici ma non pedanti, la psicologia
                dei personaggi colta con finezza, l'intensa analisi dei
                sentimenti e soprattutto la creazione di un personaggio, Jane
                Eyre, dotato di integrità, indipendenza, forza interiore e
                passionalità tali da renderlo capace, come testimoniato dai
                numerosi lettori, di uscire dalle "pagine di carta" ed entrare
                nel mondo reale della vita più intima di chi con esso si è
                confrontato. La pazza Bertha Mason diventa in quest'opera una
                sorta di doppelgänger di Jane rappresentandone le passioni e il
                lato animale che nella società Vittoriana dovevano essere
                represse e nascoste.
              </p>

              <a
                href="http://it.feedbooks.com/book/6291/jane-eyre"
                className="link-dark"
                target="_blank"
              >
                Leggi il libro: Charlotte Brontë, Jane Eyre{" "}
              </a>

              <br />
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}

class SecondoPassoCustomMessage extends React.Component {
  render() {
    return (
      <>
        <div className="custommessage">
          <div className="message">
            <p>
              {" "}
              Questo messaggio è stato creato da:{" "}
              <span className="font-messaggio">Mario Rossi</span>
            </p>
            <p>
              per : <span className="font-messaggio">Lampa Dina</span>
            </p>
            <p>
              <span className="font-messaggio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique facilis quos autem magni provident ipsum in delectus
                impedit, libero quia officiis quod veritatis natus, id dolore
                dolorem et vitae at illum sit, mollitia nesciunt consectetur ea.
                Illum, officia earum! Odit nemo nam itaque optio, doloribus
                pariatur accusamus quos quidem animi!
              </span>
            </p>
            <br />

            <p>In allegato a questo regalo le esperienze proposte da XBACCO:</p>
          </div>
        </div>

        <SecondoPassoRelax />
      </>
    );
  }
}
export default Esperienze;
