import React, { Component } from "react";
import "./styles.css";

export default class Mensagem extends Component {
  state = {
    linguagem: "React Js"
  };

  render() {
    return (
      <div className="App">
        <h1>Olá mundo {this.state.linguagem}</h1>
        <h2>Esse é meu componente de classe :] </h2>
      </div>
    );
  }
}
