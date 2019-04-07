import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    originalUrl: "",
    arrayLinks: [],
    isLoaded: false
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://short-url-max-gavanon.herokuapp.com/api/links"
      );
      this.setState({ arrayLinks: response.data, isLoaded: true });
    } catch (error) {
      alert(error);
    }
  }

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
                  value={this.state.originalUrl}
                  onChange={e => this.setState({ originalUrl: e.target.value })}
                />
                <input
                  className="btn-default"
                  type="button"
                  onClick={() =>
                    axios.get({
                      url: "/api/shorten",
                      data: { originalUrl: this.state.originalUrl }
                    })
                  }
                />
              </form>
            </div>
          </div>
        </div>
        <div className="bodyMain">
          <div className="centerMain">
            {this.state.arrayLinks.map((link, index) => {
              return (
                <div key={index} className="linklist">
                  <div>{console.log(link)} Lien Original</div>
                  <div> Short URL </div>
                  <div> Visites </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
