import React from "react";
import Footer from "./components/Footer";
import SVG from "./SVG";
import logoColore from "../img/logo1.png";
import { Link } from "react-router-dom";
import foto_CV from "../img/foto-CV.jpg";

class Team extends React.Component {
  render() {
    return (
      <>
        <h2>Il nostro Team</h2>
        <div className="photo-container">
          <img src={foto_CV} alt="Fabio Pergami"/>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
        <div className="photo-container">
          <img src={foto_CV} alt="Fabio Pergami"/>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
      </>
    );
  }
}
export default Team;
