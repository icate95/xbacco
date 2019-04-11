import React from "react";

import { Link } from "react-router-dom";

import ImgLogo from "../../img/logo_trasparente.png";

class Footer extends React.Component {
  toTop() {
    if (this.state.location === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <section id="footer">
        <div className="menu-flex">
          <div className="menu">
            <div className="left">
              <Link onClick={this.toTop.bind(this)}  className="link-light" to="/">Home</Link>
              <br />

              <Link onClick={this.toTop.bind(this)}  className="link-light" to="/crea">Crea</Link> <br />
              <Link onClick={this.toTop.bind(this)}  className="link-light" to="/vivi">Vivi</Link> <br />
              {/* <Link className="link-light" to="/puntivendita">Punti vendita</Link> <br /> */}
              {/* <Link className="link-light" to="/selezionaesperienza">Inserisci codice</Link> <br/> */}
              <Link onClick={this.toTop.bind(this)}  className="link-light" to="/chisiamo">Chi siamo</Link> <br />
              <Link onClick={this.toTop.bind(this)}  className="link-light" to="/team">Team</Link> <br />
              {/* <Link to="/areapersonale">Area personale</Link> <br /> */}
            </div>
          </div>
          <img src={ImgLogo} alt="logo xbacco"/>
          <div className="contatti">
            <p>
              Via xxv Aprile, 7, <br /> Verona (VR), Italia <br /> CAP 37121{" "}
              <br />
              P.IVA 05649200960
              {/* <i className="fas fa-phone" /> 0442 123456 -{" "}
              <i className="fas fa-envelope-open-text" /> xbacco@gmail.com */}
            </p>
            <ul className="social">
              <li>
                <a href="https://www.instagram.com/?hl=it">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=it">
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="menu-flex">
          <div className="bt">
            <p>
              <small>
                {" "}
                <i className="fas fa-asterisk" /> Questo sito è stato creato a
                scopo didattico presso la <a href="https://scuola.mohole.it/">Scuola Mohole</a>, dagli studenti 
                di Grafica e Web&App per il
                progetto <a href="http://metaproject.xyz/">Metaproject</a>.
               <br/> Alcuni contenuti e riferimenti aziendali sono di fantasia.
              </small>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
