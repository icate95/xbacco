import React from "react";
import fabio from "../img/team/foto_CV.jpg";
import allegra from "../img/team/allegra.jpg";
import alessia from "../img/team/alessia.jpg";
import sofia from "../img/team/sofia.jpg";
import cate from "../img/team/cate.jpg";
import silvia from "../img/team/silvia_foto.jpg";

import Footer from "./components/Footer";

class Team extends React.Component {
  render() {
    return (
      <>
        <section className="team">

        <div className="hero-team">
          <h1>
            <span>il team</span>
          </h1>
          </div>
          <div className="group">
            <div className="persona">
              <img src={silvia} alt="Allegra" />
              <h3>Silvia Monzani</h3>
              <p>Graphic Designer</p>
              <p>tel. 334 9294331</p>
            </div>
            <div className="persona">
              <img src={allegra} alt="Allegra" />
              <h3>Allegra Graziani</h3>
              <p>Graphic Designer</p>
              <p>tel. 339 6687475</p>
            </div>
            <div className="persona">
              <img src={alessia} alt="Allegra" />
              <h3>Alessia Porro</h3>
              <p>Graphic Designer</p>
              <p>tel. 345 4616076</p>
            </div>
            <div className="persona">
              <img src={sofia} alt="Allegra" />
              <h3>Sofia <br/> Bani</h3>
              <p>Graphic Designer</p>
              <p>tel. 380 4317599</p>
            </div>
            <div className="persona">
              <img src={cate} alt="Allegra" />
              <h3>Caterina Ianeselli</h3>
              <p>Web Developer</p>
              <p>tel. 349 6327898</p>
            </div>
            <div className="persona">
              <img src={fabio} alt="Allegra" />
              <h3>Fabio Pergami Feroldi</h3>
              <p>Web Designer</p>
              <p>tel. 346 6194101</p>
            </div>
          </div>
        </section>
        {/* <h2 className='team' >Il nostro Team</h2>
        <section className="padding">
            <div className="larghezza">
              <img src={allegra} alt="Allegra Graziani"/>
              <h3>Allegra Graziani</h3>
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
        </section> */}
        <Footer />
      </>
    );
  }
}
export default Team;
