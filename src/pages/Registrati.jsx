import React from "react";
// import ReactDOM from "react-dom";


import logoColore from "../img/logo1.png";

class Registrati extends React.Component {
  render() {
    return (
      <>
        <section className='bgc-img-registrati'>
            <h1>--</h1>
        </section>
        <div className="modal">
            <h2>Registrati</h2>
            <label htmlFor="nome">Nome</label>
            <input type="text" name='name' placeholder='nome'/>
            <label htmlFor="data">Data di nascita <br/><small>devi essere maggiorenne per iscriverti al nostro servizio</small></label>
            <input type="date" name='data'/>
            <label htmlFor="indirizzo">Indirizzo</label>
            <input type="text" name='indirizzo' placeholder='Indirizzo'/>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='password'/>
            <button className="btn-light">Registrati</button>
        </div>
      </>
    );
  }
}
export default Registrati;
