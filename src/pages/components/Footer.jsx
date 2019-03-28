import React from "react";

import ImgLogo from "../../img/logo_trasparente.png";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="menu">
          <div className="left">
            <a href="/Home">Home</a> <br />
            <a href="/ChiSiamo">Chi siamo</a> <br />
            <a href="/Esperienze">Esperienze</a> <br />
            <a href="/Generator">Generator</a> <br />
            <a href="/PuntiVendita">Punti vendita</a> <br />
          </div>

          <ul className="social">
            <li>
              <i className="fab fa-instagram fa-2x" />
            </li>
            <li>
              <i className="fab fa-facebook-square fa-2x" />
            </li>
            <li>
              <i className="fab fa-twitter fa-2x" />
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={ImgLogo} alt="" />
          <h1>xbacco</h1>
        </div>
        <div className="contatti">
          <p>
            xbacco&#64;gmail.com <br /> Verona (VR) 37121 <br /> Via xxv Aprile,
            7
          </p>

          <br />
          <br />
          <label htmlFor="center-input">Contattaci:</label> <br/>
          <input type="text" className="" />
        </div>
      </section>
    );
  }
}
export default Footer;
