import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.scss";

import ImgLogo from "../src/img/logo_trasparente.png";

import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import PuntiVendita from "./pages/PuntiVendita";
import Esperienze from "./pages/Esperienze";
import PageGenerator from "./pages/PageGenerator";
import AreaPersonale from "./pages/AreaPersonale";
import SelezionaEsperienza from "./pages/SelezionaEsperienza";
import Registrati from "./pages/Registrati";
import Accedi from "./pages/Accedi";

import Footer from "./pages/components/Footer";

class App extends React.Component {
  // addActive(){
  //   this.classlist.toggle('is-active');
  //   console.log('click');
  // }
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: true
    };
  }
  addActiveClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    console.log("click");
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="nav-flex">
              {/* <div className="logo-mobile">
                <Link to="/">
                  <img src={ImgLogo} alt="xbacco" />
                </Link>
              </div> */}

              {/* <div className="three" >
                <div
                  id="hamburger-9"
                  onClick={this.toggleClass}
                  className={
                    this.state.active ? "hamburger is-active" : "hamburger"
                  }
                >
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </div>
              </div> */}
            </div>
            <ul className="menu-container">
              <li>
                <Link to="/">
                  <img src={ImgLogo} alt="xbacco" />
                  <h1 className="titolo-logo">xbacco</h1>
                </Link>
              </li>
              <li>
                <Link className="menu-item" to="/pagegenerator">
                  Crea
                </Link>
              </li>
              <li>
                <Link className="menu-item" to="/esperienze">
                  Vivi
                </Link>
              </li>
              <li>
                <Link className="menu-item" to="/puntivendita">
                  Punti vendita
                </Link>
              </li>
              <li>
                <Link to="/selezionaesperienza" className="menu-item">
                  inserisci codice
                </Link>
              </li>

              <li>
                <Link className="menu-item" to="/ChiSiamo">
                  Chi siamo
                </Link>
              </li>

              <li className="has-children">
                <Link className="menu-item" to="/areapersonale">
                  <i class="fas fa-user fa-2x" />
                </Link>
                <ul className="sub-menu">
                  <Link className="menu-item" to="/registrati">
                    Registrati
                  </Link>
                  <Link className="menu-item" to="/accedi">
                    Accedi
                  </Link>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/chisiamo" component={ChiSiamo} />
            <Route exact path="/puntivendita" component={PuntiVendita} />
            <Route exact path="/esperienze" component={Esperienze} />
            <Route exact path="/pagegenerator" component={PageGenerator} />
            <Route exact path="/areapersonale" component={AreaPersonale} />
            <Route
              path="/selezionaesperienza"
              component={SelezionaEsperienza}
            />
            <Route path="/registrati" component={Registrati} />
            <Route path="/accedi" component={Accedi} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
