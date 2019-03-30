import React from "react";

import { Link } from 'react-router-dom'

// import ImgLogo from "../../img/logo_trasparente.png";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="menu">
          <div className="left">
          <Link to="/">HOME</Link><br />
            <Link to="/chisiamo">Chi siamo</Link> <br />
            <Link to="/puntivendita">Punti vendita</Link> <br />
            <Link to="/esperienze">Esperienze</Link> <br />
            <Link to="/areapersonale">Area personale</Link> <br />
            <Link to="/pagegenerator">Generator</Link> <br />
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
          {/* <img src={ImgLogo} alt="" /> */}
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
