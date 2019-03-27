import React from "react";

import ImgLogo from '../../img/logo_trasparente.png';

class Footer extends React.Component {
  render() {
    return (
        <section id="footer">
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>Chi siamo</li>
                        <li>Esperienze</li>
                        <li>Genera la tua etichetta</li>
                        <li>Punti vendita</li>
                    </ul>
                    <ul className='social'>
                      <li><i className="fab fa-instagram fa-2x"></i></li>
                      <li><i className="fab fa-facebook-square fa-2x"></i></li>
                      <li><i className="fab fa-twitter fa-2x"></i></li>
                    </ul>
                </div>
                <div className='logo'>
                  <img src={ImgLogo} alt=""/>
                  <h1>xbacco</h1>
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
