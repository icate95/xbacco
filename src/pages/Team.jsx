import React from "react";
import Footer from "./components/Footer";
import SVG from "./SVG";
import logoColore from "../img/logo1.png";
import { Link } from "react-router-dom";
import foto_CV from "../img/foto_CV.jpg";
import allegra from "../img/allegra.jpg";
import alessia from "../img/alessia.JPG";
import sofia from "../img/sofia.jpg";
import cate from "../img/cate.jpg";
import silvia_foto from "../img/silvia_foto.jpg";

class Team extends React.Component {
  render() {
    return (
      <>
        <h2>Il nostro Team</h2>
        <section className="padding">
            <div className="larghezza">
              <img src={allegra} alt="Allegra Graziani"/>
              <p>Allegra Graziani</p>
              <p>Graphic Designer</p>
              <p>tel. 339 6687475</p>
            </div>
            <div className="larghezza stretch">
              <img src={alessia} alt="Alessia Porro"/>
              <p>Alessia Porro</p>
              <p>Graphic Designer</p>
              <p>tel. 345 4616076</p>
            </div>
            <div className="larghezza stretch">
              <img src={sofia} alt="Sofia Bani"/>
              <p>Sofia Bani</p>
              <p>Graphic Designer</p>
              <p>tel. 380 4317599</p>
            </div>
            <div className="larghezza">
              <img src={cate} alt="Caterina Ianeselli"/>
              <p>Caterina Ianeselli</p>
              <p>Web Developer</p>
              <p>tel. 349 6327898</p>
            </div>
            <div className="larghezza stretch">
              <img src={silvia_foto} alt="Silvia Monzani"/>
              <p>Silvia Monzani</p>
              <p>Graphic Designer</p>
              <p>tel. 334 9294331</p>
            </div>
            <div className="larghezza">
              <img src={foto_CV} alt="Fabio Pergami"/>
              <p>Fabio Pergami Feroldi</p>
              <p>Web Designer</p>
              <p>tel. 346 6194101</p>
            </div>
        </section>
      </>
    );
  }
}
export default Team;
