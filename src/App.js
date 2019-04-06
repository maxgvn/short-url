import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerTop">
          <div className="centerMain">
            <div className="title-div">
              <h1> Simplify your links</h1>
            </div>
            <div>
              <form className="input-form">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Votre URL à raccourcir"
                />
                <input className="btn-default" type="submit" />
              </form>
            </div>
          </div>
        </div>
        <div className="bodyMain">
          <div className="centerMain">
            <p> MAP COMPOSANT </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
