import React from "react";
// import ReactDOM from "react-dom";

// import logoColore from "../img/logo1.png";
import botti from "../img/botti.png";
import audio from "../audio/You_Never_Can_Tell.mp3";

import SVG from "./SVG";

// import SVG from "./SVG";

// import logoColore from "../img/logo1.png";

// import { Link } from "react-router-dom";

import Footer from "./components/Footer";

class Esperienze extends React.Component {
  constructor(props) {
    super(props);

    this.xbaccoVivi = this.xbaccoVivi.bind(this);
  }

  addActiveMusica() {
    if (
      document.getElementsByClassName("musica")[0].classList.contains("active")
    ) {
      // document.getElementsByClassName("musica")[0].classList.remove("selected");
      document.getElementById("info-select-musica").classList.remove("active");
    } else {
      // document.getElementsByClassName("musica")[0].classList.add("selected");
      document.getElementById("info-select-musica").classList.add("active");
    }
  }
  addActiveLibro() {
    if (
      document.getElementsByClassName("libro")[0].classList.contains("active")
    ) {
      // document.getElementsByClassName("libro")[0].classList.remove("selected");
      document.getElementById("info-select-libro").classList.remove("active");
    } else {
      // document.getElementsByClassName("libro")[0].classList.add("selected");
      document.getElementById("info-select-libro").classList.add("active");
    }
  }
  addActivePoesia() {
    if (
      document.getElementsByClassName("poesia")[0].classList.contains("active")
    ) {
      // document.getElementsByClassName("poesia")[0].classList.remove("selected");
      document.getElementById("info-select-poesia").classList.remove("active");
    } else {
      // document.getElementsByClassName("poesia")[0].classList.add("selected");
      document.getElementById("info-select-poesia").classList.add("active");
    }
  }
  closePoesia() {
    document.getElementById("info-select-poesia").classList.remove("active");
  }
  closeLibro() {
    document.getElementById("info-select-libro").classList.remove("active");
  }
  closeMusica() {
    document.getElementById("info-select-musica").classList.remove("active");
  }

  xbaccoVivi() {
    // var inputValue = document.getElementsByClassName("input-code")[0].value;

    document.getElementById("inserisciCodice").classList.remove("active");
    document.getElementById("inserisciCodice").classList.add("not-active");
    document.getElementById("passo2").classList.add("active");
    document.getElementById("passo2").classList.remove("not-active");
    // console.log(inputValue);
  }
  checkCode() {
   
  }

  render() {
    return (
      <>
        <div id="inserisciCodice" className="active">
          <section className="hero-vivi">
            <div className="half-30">
              <div className="slogan">
                <p>
                  <span className="big-title">Come funziona</span>
                </p>
                <p>
                  <span className="big-title">1</span> Inserisci il codice
                </p>
                <p>
                  <span className="big-title">2</span> Scegli
                </p>
                <p>
                  <span className="big-title">3</span> Vivi l'esperienza
                </p>
              </div>
            </div>

            <div className="half-70 tac">
              <SVG />
              <form action="" method="get">
                <input type="text" id='input-code' name='input-code'/> <br/>
                <button className='btn-light-small' onClick={this.checkCode} >Inserisci codice</button>
              </form>
            </div>
          </section>

          <section className="tac">
            <button onClick={this.xbaccoVivi} className="btn-dark">
              Prossimo passaggio <i className="fas fa-chevron-right" />
            </button>
          </section>
        </div>
        <div className="not-active custom" id="passo2">
          <h1><span className="big-title">relax</span></h1>
          <p><span className="big-title">Scegli</span></p>

          <div className="buble-quattro">
            <div className="libro" onClick={this.addActiveLibro}>
              <h3>Libro</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                omnis?
              </p>
            </div>

            <div className="musica" onClick={this.addActiveMusica}>
              <h3>Musica</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                omnis?
              </p>
            </div>

            <div className="poesia" onClick={this.addActivePoesia}>
              <h3>Poesia</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                omnis?
              </p>
            </div>
          </div>

          <div id="info-select-poesia" ref={this.divRef}>
          <div className="img">
              <img src={botti} alt="" />
            </div>
            <div className="text">
              <i onClick={this.closePoesia} className="fas fa-times" />
              <h3>Musica</h3>

              <br />
              <br />
              <p>
                <span>Autore:</span> asdasd asdasdas
              </p>
              <p>
                <span>Anno:</span> asdasd asdasdas
              </p>
              <br />
              <p>
                <span>Altre informazioni:</span> Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ut, commodi voluptas quidem eaque
                tempora accusantium blanditiis rerum ex explicabo quisquam
                adipisci illum dicta voluptates cum illo velit possimus minus id
                numquam exercitationem nihil excepturi neque reprehenderit!
                Veritatis numquam libero cupiditate? Incidunt modi praesentium
                consequuntur iusto quaerat, quo sed tempore velit?
              </p>

              <br />
              <br />
              <audio src={audio} controls />
            </div>
          </div>
          <div id="info-select-musica" ref={this.divRef}>
            <div className="img">
              <img src={botti} alt="" />
            </div>
            <div className="text">
              <i onClick={this.closeMusica} className="fas fa-times" />
              <h3>Musica</h3>

              <br />
              <br />
              <p>
                <span>Autore:</span> asdasd asdasdas
              </p>
              <p>
                <span>Anno:</span> asdasd asdasdas
              </p>
              <br />
              <p>
                <span>Altre informazioni:</span> Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ut, commodi voluptas quidem eaque
                tempora accusantium blanditiis rerum ex explicabo quisquam
                adipisci illum dicta voluptates cum illo velit possimus minus id
                numquam exercitationem nihil excepturi neque reprehenderit!
                Veritatis numquam libero cupiditate? Incidunt modi praesentium
                consequuntur iusto quaerat, quo sed tempore velit?
              </p>

              <br />
              <br />
              <audio src={audio} controls />
            </div>
          </div>
          <div id="info-select-libro" ref={this.divRef}>
          <div className="img">
              <img src={botti} alt="" />
            </div>
            <div className="text">
              <i onClick={this.closeLibro} className="fas fa-times" />
              <h3>Libro</h3>

              <br />
              <br />
              <p>
                <span>Autore:</span> asdasd asdasdas
              </p>
              <p>
                <span>Anno:</span> asdasd asdasdas
              </p>
              <br />
              <p>
                <span>Altre informazioni:</span> Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ut, commodi voluptas quidem eaque
                tempora accusantium blanditiis rerum ex explicabo quisquam
                adipisci illum dicta voluptates cum illo velit possimus minus id
                numquam exercitationem nihil excepturi neque reprehenderit!
                Veritatis numquam libero cupiditate? Incidunt modi praesentium
                consequuntur iusto quaerat, quo sed tempore velit?
              </p>

              <br />
              <br />
              <audio src={audio} controls />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default Esperienze;
