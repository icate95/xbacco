import React from "react";
// import ReactDOM from "react-dom";

import logoColore from "../img/logo1.png";

import bottigliaRI from "../img/bottiglia_RISTORAZIONE.png";
import bottigliaX from "../img/bottiglia_XBACCO.png";

class AreaPersonale extends React.Component {
  render() {
    return (
      <>
        <section className="areapersonale" id="slogan">
          <div className="content">
            <h3>xbacco, dillo con il vino!</h3>
          </div>
        </section>

        <div className="flex two-column">
          <div className="half bgc-blue tac img-center info-puntivendita">
            <img
              src={logoColore}
              width="50%"
              alt="logo-home"
              className="logo-home"
            />
            <h3>Sofia bani</h3>
            <table>
              <tr>
                <td>DATA DI NASCITA</td>
                <td>26/05/1998</td>
              </tr>
              <tr>
                <td>INDIRIZZO</td>
                <td>
                  Casirate d’Adda (bg) <br /> Via xxv Aprile, 7 <br />
                  24040
                </td>
              </tr>
              <tr>
                <td>PASSWORD</td>
                <td>*********</td>
              </tr>
            </table>
          </div>
          <div className="half bottoniorrizzontali">
            <a href="">
              milano
              <i className="fas fa-chevron-right" />
            </a>
            <a href="">
              brescia
              <i className="fas fa-chevron-right" />
            </a>
            <a href="">
              bergamo
              <i className="fas fa-chevron-right" />
            </a>
            <a href="">
              Torino
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>

        <section id='carrello'>
          <div className="flex two-column container-carrello">
            <div className="half carrello">
              <h2> <i class="fas fa-shopping-basket"></i> carrello</h2>
              <table>
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
              </table>
            </div>
            <div className="half elem-carrello">
              <div className="elem">
                <img src={bottigliaRI} alt=""/>
                <div className="text">
                  <p>vino xbacco</p>
                  <p>quantità 1 <br/> 30euro</p>
                  <p>etichetta personalizzata</p>
                </div>
                <div className="icone">
                <i className="fas fa-plus" />
                <i class="fas fa-trash-alt"></i>
                </div>
              </div>
              <div className="elem">
                <img src={bottigliaX} alt=""/>
                <div className="text">
                  <p>vino xbacco</p>
                  <p>quantità 1 <br/> 30euro</p>
                  <p>etichetta personalizzata</p>
                </div>
                <div className="icone">
                <i className="fas fa-plus" />
                <i class="fas fa-trash-alt"></i>
                </div>
              </div>
             
            </div>
          </div>
          <button className='btn-dark'>Procedi <i className="fas fa-chevron-right" /></button>
        </section>
      </>
    );
  }
}
export default AreaPersonale;
