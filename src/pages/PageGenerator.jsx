import React from "react";
// import ReactDOM from "react-dom";

import Generator from "./Generator";
// import 'function.js';

class PageGenerator extends React.Component {
  AddActive() {
    console.log(this);
    
  }

  render() {
    return (
      <>
        <Generator />
        <section className="text-area">
        <p>
            Se vuoi rendere ancora più unico il tuo regalo, realizza l’etichetta
            con dei messaggi personali... ti basterà scrivere una messaggio ed
            acquistare ciò che hai appena generato! Come funziona?
          </p>
        </section>
        <div className="content-info-generator">
         
          <div className="content-generator">
            <div className="info">
              <p>
                <span>1</span>
                <span>dedica</span> il messaggio che vuoi far recapitare
              </p>
            </div>
            <div className="content">
              <i className="fas fa-plus-circle fa-2x"> AGGIUNGI DEDICA</i>
              <textarea name="dedica" id="dedica" cols="30" rows="10" defaultValue='dedica'/>
            </div>

            <div className="info">
              <p>
                <span>2</span>
                <span>scegli</span> una categoria di esperienza
              </p>
            </div>
            <div className="content">
              <p>
                Arricchisci il tuo regalo con un’esperienza tra quelle qui sotto
                elencate. Rendi il tuo regalo speciale!
              </p>
              <div className="in-content">
                <div className="cont-esperienza">
                  <button
                    className="esperienza cultura"
                    onClick={this.AddActive()}
                  >
                    <h4>Cultura</h4>
                  </button>
                  <button className="esperienza relax" onClick={this.AddActive()}>
                    <h4>Relax</h4>
                  </button>
                  <button
                    className="esperienza ristorazione"
                    onClick={this.AddActive()}
                  >
                    <h4>Ristorazione</h4>
                  </button>
                  <button className="esperienza arte" onClick={this.AddActive()}>
                    <h4>Arte e design</h4>
                  </button>
                </div>
                <p className="p-cultura active">
                  Se sei appassionato di vino ma vorresti saperne di più, ti
                  offriamo l’accesso alla Cultura del vino in modo semplice e
                  mirato: concediti un calice di vino, mentre guardi i nostri
                  mini corsi da sommelier.
                  <br />
                  <br />
                  <label htmlFor="cultura">Scegli</label>
                  <input type="checkbox" name="cultura" id="cultura" />
                </p>
                <p className="p-relax">
                  Se sei appassionato di vino ma vorresti saperne di più, ti
                  offriamo l’accesso alla Cultura del vino in modo semplice e
                  mirato: concediti un calice di vino, mentre guardi i nostri
                  mini corsi da sommelier.
                  <br />
                  <br />
                  <label htmlFor="relax">Scegli</label>
                  <input type="checkbox" name="relax" id="relax" />
                </p>
                <p className="p-ristorazione">
                  Se sei appassionato di vino ma vorresti saperne di più, ti
                  offriamo l’accesso alla Cultura del vino in modo semplice e
                  mirato: concediti un calice di vino, mentre guardi i nostri
                  mini corsi da sommelier.
                  <br />
                  <br />
                  <label htmlFor="ristorazione">Scegli</label>
                  <input
                    type="checkbox"
                    name="ristorazione"
                    id="ristorazione"
                  />
                </p>
                <p className="p-arte">
                  Se sei appassionato di vino ma vorresti saperne di più, ti
                  offriamo l’accesso alla Cultura del vino in modo semplice e
                  mirato: concediti un calice di vino, mentre guardi i nostri
                  mini corsi da sommelier.
                  <br />
                  <br />
                  <label htmlFor="arte">Scegli</label>
                  <input type="checkbox" name="arte" id="arte" />
                </p>
              </div>
            </div>
            <div className="info">
              <p>
                <span>3</span>
                <span>anteprima</span> della tua creazione
              </p>
            </div>
            <div className="content" />
            <div className="info">
              <p>
                <span>4</span>
                <span>spedisci</span> il tuo generative wine persoanlaizzato
              </p>
              <button type="submit">Conferma</button>
              <button type="reset">Modifica</button>
            </div>

            <div className="content" />
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}
export default PageGenerator;
