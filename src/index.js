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

import Footer from "./pages/components/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            {/* <div className="logo">
          <Link to="/"><img src={ImgLogo} alt="xbacco"/></Link>
          </div> */}

            <ul className="menu-container">
              {/* <li>
                Home
              </li> */}
              <li>
                <Link className="menu-item" to="/ChiSiamo">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link className="menu-item" to="/puntivendita">
                  Punti vendita
                </Link>
              </li>
              <li>
                <Link className="menu-item" to="/esperienze">
                  Esperienze
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={ImgLogo} alt="xbacco" />
                </Link>
              </li>
              <li>
                <Link className="menu-item" to="/areapersonale">
                  Area personale
                </Link>
              </li>

              <li>
                <Link className="menu-item" to="/pagegenerator">
                  Generator
                </Link>
              </li>
            </ul>
          </nav>

          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/chisiamo" component={ChiSiamo} />
            <Route path="/puntivendita" component={PuntiVendita} />
            <Route path="/esperienze" component={Esperienze} />
            <Route path="/pagegenerator" component={PageGenerator} />
            <Route path="/areapersonale" component={AreaPersonale} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
