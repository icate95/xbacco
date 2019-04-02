import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ScrollManager, WindowScroller, ElementScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import "./styles.scss";

import ImgLogo from "../src/img/logo_trasparente.png";

import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
// import PuntiVendita from "./pages/PuntiVendita";
import Esperienze from "./pages/Esperienze";
import PageGenerator from "./pages/PageGenerator";
import AreaPersonale from "./pages/AreaPersonale";
import SelezionaEsperienza from "./pages/SelezionaEsperienza";
import Registrati from "./pages/Registrati";
import Accedi from "./pages/Accedi";
import Team from "./pages/Team";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.history = createHistory();
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: true
    };
  }


  addActiveClass() {
    console.log("click");
    this.setState({ active: !this.state.active });
    console.log(this.state.active);
    if (this.state.active) {
      document
        .getElementsByClassName("hamburger")[0]
        .classList.add("is-active");
      document
        .getElementsByClassName("menu-expanded")[0]
        .classList.add("is-active");
    } else {
      document
        .getElementsByClassName("hamburger")[0]
        .classList.remove("is-active");
      document
        .getElementsByClassName("menu-expanded")[0]
        .classList.remove("is-active");
      document
        .getElementsByClassName("menu-expanded")[0]
        .classList.add("change-page");
      setTimeout(
        document
          .getElementsByClassName("menu-expanded")[0]
          .classList.remove("change-page"),
        5000
      );
    }
  }
  // Sliders(){
  //   let sliders = document.getElementsById('sliders');
  //   setTimeout( 
  //     sliders.style.height = "100vh"
  //   ), 5000;
  // }

  render() {
    return (
    <ScrollManager history={this.history}>
      <Router history={this.history}>
        <div>
          <div id="sliders"></div>
          <nav id="main-nav">
            <div className="nav-bar">
              <div className="logo">
                <Link to="/">
                  <img src={ImgLogo} alt="xbacco" />
                  <h1 className="titolo-logo">xbacco</h1>
                </Link>
              </div>

              {/* <div className={{active: this.state.active ? 'hamburger is-active' : 'hamburger'}} onClick={this.addActiveClass} > */}
              <div className="hamburger" onClick={this.addActiveClass}>
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </div>
            </div>
            <div className="menu-expanded">
              <ul className="menu-container">
                <li onClick={this.addActiveClass} >
                  <Link className="menu-item" to="/crea">
                    Crea
                  </Link>
                </li>
                <li onClick={this.addActiveClass}>
                  <Link className="menu-item" to="/vivi">
                    Vivi
                  </Link>
                </li>
                {/* <li onClick={this.addActiveClass}>
                  <Link className="menu-item" to="/puntivendita">
                    Punti vendita
                  </Link>
                </li> */}
                <li onClick={this.addActiveClass}>
                  <Link to="/inseriscicodice" className="menu-item">
                    Inserisci codice
                  </Link>
                </li>

                <li onClick={this.addActiveClass}>
                  <Link className="menu-item" to="/chisiamo">
                    Chi siamo
                  </Link>
                </li>
              </ul>
              <ul className="menu-container">
                <li className="has-children">
                  <Link className="menu-item" to="/areapersonale">
                    <i className="fas fa-user" />
                    Area personale
                  </Link>
                </li>
                <li onClick={this.addActiveClass}>
                  <Link className="menu-item" to="/registrati">
                    Registrati
                  </Link>
                </li>
                <li onClick={this.addActiveClass}>
                  <Link className="menu-item" to="/accedi">
                    Accedi
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/chisiamo" component={ChiSiamo} />
            {/* <Route exact path="/puntivendita" component={PuntiVendita} /> */}
            <Route exact path="/vivi" component={Esperienze} />
            <Route exact path="/crea" component={PageGenerator} />
            <Route exact path="/areapersonale" component={AreaPersonale} />
            <Route exact path="/team" component={Team} />
            <Route
              path="/inseriscicodice"
              component={SelezionaEsperienza}
            />
            <Route path="/registrati" component={Registrati} />
            <Route path="/accedi" component={Accedi} />
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
      </ScrollManager>
    
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
