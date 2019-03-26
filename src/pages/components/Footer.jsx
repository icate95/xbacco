import React from "react";

import ImgLogo from '../../img/logo_trasparente.png';

class Footer extends React.Component {
  render() {
    return (
        <section id="footer">
                <div className="menu">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">Chi siamo</a></li>
                        <li><a href="esperienze.html">Esperienze</a></li>
                        <li><a href="etichetta.html">Genera la tua etichetta</a></li>
                        <li><a href="cantine.html">Punti vendita</a></li>
                    </ul>
                    <ul className='social'>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                </div>
                <div className='logo'>
                  <img src={ImgLogo} alt=""/>
                </div>
                <div className="contatti">
                    <p>xbacco&#64;gmail.com <br/> Verona (VR) 37121 <br/> Via xxv Aprile, 7</p>
                    
                    <input type="text" className='center-input'/>
                </div>

            </section> 
    );
  }
}
export default Footer;
