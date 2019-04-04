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
        <section className="padding">
          <h2>Il nostro Team</h2>
          <div className="padding">
            <img src={allegra} alt="Allegra Graziani"/>
            <img src={alessia} alt="Alessia Porro"/>
            <img src={sofia} alt="Sofia Bani"/>
          </div>
          <div className="padding">
            <img src={cate} alt="Caterina Ianeselli"/>
            <img src={silvia_foto} alt="Silvia Monzani"/>
            <img src={foto_CV} alt="Fabio Pergami"/>
          </div>
        </section>
      </>
    );
  }
}
export default Team;
