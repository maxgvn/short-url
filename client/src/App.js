import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    input: ""
  };

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
                  value={this.state.input}
                  onChange={e => this.setState({ input: e.target.value })}
                />
                <input className="btn-default" type="button" />
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
