import React from "react";
// import ReactDOM from "react-dom";

// import logoColore from "../img/logo1.png";
// import botti from "../img/botti.png";

import SVG from "./SVG";

import Generator from "./Generator";

// import logoColore from "../img/logo1.png";

// import { Link } from "react-router-dom";

class Esperienze extends React.Component {
  render() {
    return (
      <>
        {/* <div id="hero-esperienze" /> */}
        <section className="vivi-page flex two-column">
          <div className="half">
          <div className="text-area tac testo-vivi">
            <p>
              I nostri clienti trovano nell’esperienza regalo XBacco, una
              risposta adeguata ai loro desideri: riconciliarsi con l’ambiente
              circostante e vivere momenti veri, personali ed emozionanti.{" "}
            </p>
            <h2>
              Perché il tempo da vivere è il dono più grande che si possa
              ricevere!
            </h2>
          </div>
          </div>
          <div className="half">
            <Generator />
          </div>
        </section>

        <section className="center">
          <form action="" method="post">
            <fieldset>
            <legend>What is Your Favorite Pet?</legend> 

          <div className="buble-quattro">
            <div className="card cultura">
              <div className="bg-img" />
              <div className="content">
                <SVG value="cultura" />

                <h2>Cultura del vino</h2>
                <input type="checkbox" name="vivi" value="cultura" />
                <div className="extra">
                  <i className="fas fa-ellipsis-h" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis saepe reprehenderit architecto ut impedit
                    similique amet quisquam excepturi dolorem nisi.
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="card relax">
              <div className="bg-img" />
              <div className="content">
                <SVG value="relax" />

                <h2>Relax</h2>
                <input type="checkbox" name="vivi" value="relax" />
                <div className="extra">
                  <i className="fas fa-ellipsis-h" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis saepe reprehenderit architecto ut impedit
                    similique amet quisquam excepturi dolorem nisi.
                  </p>
                </div>
              </div>
            </div>

            <div className=" card ristorazione">
              <div className="bg-img" />
              <div className="content">
                <SVG value="ristorazione" />

                <h2>Ristorazione</h2>
                <input type="checkbox" name="vivi" value="ristorazione" />
                <div className="extra">
                  <i className="fas fa-ellipsis-h" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis saepe reprehenderit architecto ut impedit
                    similique amet quisquam excepturi dolorem nisi.
                  </p>
                </div>
              </div>
            </div>

            <div className="card arte">
              <div className="bg-img" />
              <div className="content">
                <SVG value="arte" />

                <h2>Arte e design</h2>
                <input type="checkbox" name="vivi" value="arte" />
                <div className="extra">
                  <i className="fas fa-ellipsis-h" />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iste voluptates corrupti, adipisci animi repudiandae beatae
                    aliquam unde molestiae soluta tempora?
                  </p>
                </div>
              </div>
            </div>
          </div>

          </fieldset>
          </form>
        </section>

      </>
    );
  }
}
export default Esperienze;
