import React from "react";
// import ReactDOM from "react-dom";

// import logoColore from "../img/logo1.png";
import botti from "../img/botti.png";
import audio from "../audio/You_Never_Can_Tell.mp3";

import SVG from "./SVG";

import Footer from "./components/Footer";

class Esperienze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {
        value: 87654321,
        relative: "custom"
      },

      PrimoPasso: false,
      SecondoPassoRelax: false,
      SecondoPassoCustomMessage: true

    }

   
    // this.xbaccoVivi = this.xbaccoVivi.bind(this);
  }

  // xbaccoVivi() {
  //   document.getElementById("inserisciCodice").classList.remove("active");
  //   document.getElementById("inserisciCodice").classList.add("not-active");
  //   document.getElementById("passo2").classList.add("active");
  //   document.getElementById("passo2").classList.remove("not-active");
  // }
  // checkCode(e) {
  //   e.preventDefault();
  //   if (document.getElementById("#input-code").value === "12345678") {
  //     document.getElementById("inserisciCodice").classList.remove("active");
  //     document.getElementById("inserisciCodice").classList.add("not-active");
  //     document.getElementById("passo2").classList.add("active");
  //     document.getElementById("passo2").classList.remove("not-active");
  //   } else  if (document.getElementById("#input-code").value === "87654321") {

  //   }
  // }

  render() {
    return (
      <>
     
       {this.state.PrimoPasso && <PrimoPasso /> }
       {this.state.SecondoPassoRelax && <SecondoPassoRelax /> }
       {this.state.SecondoPassoCustomMessage && <SecondoPassoCustomMessage /> }

        <Footer />
      </>
    );
  }
}
class PrimoPasso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render( ) {
    return (
      <>
       <h1 className='big-title tac'><span>Vivi</span> <br/>Lorem, ipsum dolor.</h1>
        <div id="inserisciCodice" className="active">
          <section className="hero-vivi">
            <div className="half-30">
              {/* <div className="slogan"> */}
              <p>
                <span className="big-title tac">Come funziona</span>
              </p>
              <div className="info">
                <p>
                  <span>1</span>
                  <span>Inserisci il codice</span>
                </p>
              </div>
            </div>

            <div className="half-70 tac">
              <SVG />
              <form action="" method="get">
                <input type="text" id="input-code" name="input-code" /> <br />
                <button className="btn-light-small" onClick={this.checkCode}>
                  Inserisci codice e procedi{" "}
                  <i className="fas fa-chevron-right" />
                </button>
              </form>
            </div>
          </section>
        </div>
        </>
    )
  }
}
class SecondoPassoRelax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalpoesia: false,
      modallibro: false,
      modalmusica: false,
    }
  }

  modalpoesia() {
    this.setState({
      modalpoesia: true,
      modallibro: false,
      modalmusica: false,
    })
  }
  modallibro() {
    this.setState({
      modalpoesia: false,
      modallibro: true,
      modalmusica: false,
    })
  }
  modalmusica() {
    this.setState({
      modalpoesia: false,
      modallibro: false,
      modalmusica: true,
    })
  }
  close(){
    this.setState({
      modalpoesia: false,
      modallibro: false,
      modalmusica: false,
    })
  }
  
  render() {
    return (
      <>
      <div className="custom" id="passo2">
          <h1 className="big-title tac">
            <span>Relax</span> <br />
            scegli
          </h1>

          <div className="buble-quattro">
            <div className="libro" onClick={this.modallibro.bind(this)}>
              <h3>Libro</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                omnis?
              </p>
            </div>

            <div className="musica" onClick={this.modalmusica.bind(this)}>
              <h3>Musica</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                omnis?
              </p>
            </div>

            <div className="poesia" onClick={this.modalpoesia.bind(this)}>
              <h3>Poesia</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                omnis?
              </p>
            </div>
          </div>

          <div id="info-select-poesia" className={(this.state.modalpoesia ? 'active' : '')}>
            <div className="img">
              <img src={botti} alt="" />
            </div>
            <div className="text">
              <i onClick={this.close.bind(this)} className="fas fa-times" />
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
          <div id="info-select-musica" className={(this.state.modalmusica ? 'active' : '')}>
            <div className="img">
              <img src={botti} alt="" />
            </div>
            <div className="text">
              <i onClick={this.close.bind(this)} className="fas fa-times" />
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
          <div id="info-select-libro" className={(this.state.modallibro ? 'active' : '')}>
            <div className="img">
              <img src={botti} alt="" />
            </div>
            <div className="text">
              <i onClick={this.close.bind(this)} className="fas fa-times" />
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
        </>
    )
  }
}

class SecondoPassoCustomMessage extends React.Component {
  render() {
    return (
      <>
        <div className="custommessage">
          <div className="message">
       <p> Questo messaggio è stato creato da: _____________</p>
        <p>per : _________________</p>
        </div>
        </div>
        <div className="">
          <p>In allegato a questo regalo le esperienze proposte da XBACCO:</p>
        </div>
      <SecondoPassoRelax />
      </>
    )
  }
}
export default Esperienze;
