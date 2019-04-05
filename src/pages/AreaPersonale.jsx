import React from "react";
// import ReactDOM from "react-dom";

import mariorossi from "../img/mariorossi.png";

import bottigliaRI from "../img/bottiglia_RISTORAZIONE.png";
import bottigliaX from "../img/bottiglia_XBACCO.png";

import Footer from "./components/Footer";

class AreaPersonale extends React.Component {
  render() {
    return (
      <>
        <section className="areapersonale">
          <div className="utente">
            <img
              src={mariorossi}
              width="50%"
              alt="logo-home"
              className="logo-home"
            />
            <h3>Mario Rossi</h3>
            <div className="info-user">
              <p>DATA DI NASCITA:</p>
              <p>26/05/1965</p>
              <br />

              <p>INDIRIZZO:</p>
              <p>
                Milano Lambrate (MI) <br /> Via Ventura, 5 <br />
                20134
              </p>
            </div>
          </div>

          <div className="content">
           
              
                <h2>
                  <i className="fas fa-shopping-cart" /> Il tuo ordine
                </h2>
          <div className="elem">
                  <img src={bottigliaRI} alt="" />
                  <div className="text">
                    <p>vino xbacco</p>
                    <p>
                      quantità 1 <br /> 30euro
                    </p>
                    <p>etichetta personalizzata</p>
                  </div>
                  <div className="icone">
                    <i className="fas fa-plus" />
                    <i className="fas fa-trash-alt" />
                  </div>
               
                  </div>
                  <div className="elem">
                  <img src={bottigliaX} alt="" />
                  <div className="text">
                    <p>vino xbacco</p>
                    <p>
                      quantità 1 <br /> 30euro
                    </p>
                    <p>etichetta personalizzata</p>
                  </div>
                  <div className="icone">
                    <i className="fas fa-plus" />
                    <i className="fas fa-trash-alt" />
                  </div>
                  </div>
                  </div>
           
             
        </section>
        {/* <div className="flex two-column">
          <div className="half bgc-blue tac img-center info-puntivendita">
            <img
              src={logoColore}
              width="50%"
              alt="logo-home"
              className="logo-home"
            />
            <h3>Mario Rossi</h3>
            <table>
              <tbody>
                <tr>
                  <td>DATA DI NASCITA</td>
                  <td>26/05/1965</td>
                </tr>
                <tr>
                  <td>INDIRIZZO</td>
                  <td>
                    Milano Lambrate (MI) <br /> Via Ventura, 5 <br />
                    20134
                  </td>
                </tr>
                <tr>
                  <td>PASSWORD</td>
                  <td>*********</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="half bottoniorrizzontali">
            <a href="#link">
              5 acquisti effettuati
              <i className="fas fa-chevron-right" />
            </a>
            <a href="#link">
              3 etichette create
              <i className="fas fa-chevron-right" />
            </a>
            <a href="#link">
              2 esperienze vissute
              <i className="fas fa-chevron-right" />
            </a>
            <a href="#carrello">
              il tuo carrello
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div> */}

        {/* <section id="carrello" className="tac">
          <div className="flex two-column container-carrello">
            <div className="half carrello">
              <h2>
                {" "}
                <i className="fas fa-shopping-basket" /> carrello
              </h2>
              <table>
                <tbody>
                  <tr>
                    <td>Totale:</td>
                    <td>140euro</td>
                  </tr>
                  <tr>
                    <td>Numero articoli:</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>indirizzo:</td>
                    <td>
                      Casirate d’Adda (bg) <br /> Via xxv Aprile, 7 <br />
                      24040
                    </td>
                  </tr>
                  <tr>
                    <td>Pagamento:</td>
                    <td>VISA / *********</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="half elem-carrello">
              <div className="elem">
                <img src={bottigliaRI} alt="" />
                <div className="text">
                  <p>vino xbacco</p>
                  <p>
                    quantità 1 <br /> 30euro
                  </p>
                  <p>etichetta personalizzata</p>
                </div>
                <div className="icone">
                  <i className="fas fa-plus" />
                  <i className="fas fa-trash-alt" />
                </div>
              </div>
              <div className="elem">
                <img src={bottigliaX} alt="" />
                <div className="text">
                  <p>vino xbacco</p>
                  <p>
                    quantità 1 <br /> 30euro
                  </p>
                  <p>etichetta personalizzata</p>
                </div>
                <div className="icone">
                  <i className="fas fa-plus" />
                  <i className="fas fa-trash-alt" />
                </div>
              </div>
            </div>
          </div>
          <button className="btn-dark">
            Procedi <i className="fas fa-chevron-right" />
          </button>
        </section> */}
        <Footer />
      </>
    );
  }
}
export default AreaPersonale;
