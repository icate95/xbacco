import React from "react";

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
                </div>
                <div className="contatti">
                    <p>xbacco&#64;gmail.com Verona (VR) 37121 Via xxv Aprile, 7</p>
                </div>
            </section> 
    );
  }
}
export default Footer;
