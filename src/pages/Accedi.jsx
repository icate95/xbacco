import React from "react";
// import ReactDOM from "react-dom";


import logoColore from "../img/logo1.png";

class Accedi extends React.Component {
  render() {
    return (
      <>
      <section className='bgc-img-accedi'>
          <h1>--</h1>
      </section>
      <div className="registrati modal">
          <h2>Login</h2>
          <div className="d-flex">
          <label htmlFor="nome">Nome</label>
          <input type="text" name='name' placeholder='name'/>
          </div>
          <div className="d-flex">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' placeholder='password'/>
          </div>
          <button className="btn-light">Login</button>
      </div>
      </>
    );
  }
}
export default Accedi;
