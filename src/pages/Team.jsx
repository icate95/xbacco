import React from "react";
import Footer from "./components/Footer";
import SVG from "./SVG";
import logoColore from "../img/logo1.png";
import { Link } from "react-router-dom";
import foto_CV from "../img/foto_CV.jpg";

class Team extends React.Component {
  render() {
    return (
      <>
        <section className="padding">
          <h2>Il nostro Team</h2>
          <div className="padding photo-container">
            <img src={foto_CV} alt="Fabio Pergami"/>
            <img src={foto_CV} alt="Fabio Pergami"/>
            <img src={foto_CV} alt="Fabio Pergami"/>
          </div>
          <div className="padding">
            <img src={foto_CV} alt="Fabio Pergami"/>
            <img src={foto_CV} alt="Fabio Pergami"/>
            <img src={foto_CV} alt="Fabio Pergami"/>
          </div>
        </section>
      </>
    );
  }
}
export default Team;
