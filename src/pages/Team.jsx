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
            <div className="">
              <img src={allegra} alt="Allegra Graziani"/>
            </div>
            <div>
              <img src={alessia} alt="Alessia Porro"/>
            </div>
            <div>
              <img src={sofia} alt="Sofia Bani"/>
            </div>
          </div>
          <div className="padding">
            <div>
              <img src={cate} alt="Caterina Ianeselli"/>
            </div>
            <div>
              <img src={silvia_foto} alt="Silvia Monzani"/>
            </div>
            <div>
              <img src={foto_CV} alt="Fabio Pergami"/>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Team;
