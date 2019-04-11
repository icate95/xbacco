import React from "react";
// import ReactDOM from "react-dom";

import logoColore from "../img/logo1.png";

class Registrati extends React.Component {
  render() {
    return (
      <>
        <section className="bgc-img-registrati" />
        <div className="registrati">
          <h2>Registrati</h2>

          <div className="d-flex">
            <label htmlFor="nome">Nome</label>
            <input type="text" name="name" placeholder="nome" />
          </div>
          <div className="d-flex">
            <label htmlFor="data">Data di nascita</label>
            <input type="text" name="data" placeholder="gg/mm/aaaa" />
          </div>
          <div className="d-flex">
            <label htmlFor="indirizzo">Indirizzo</label>
            <input type="text" name="indirizzo" placeholder="Indirizzo" />
          </div>
          <div className="d-flex">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <p>
            <small>
              Devi essere maggiorenne per iscriverti al nostro servizio
            </small>
          </p>
          <button className="btn-light">Registrati</button>
        </div>
      </>
    );
  }
}
export default Registrati;
