import React, { Component } from "react";

import "./App.css";

import Index from "./components/Index";
import SinglePage from "./components/SinglePage";

class App extends Component {
  state = {
    page: "Home",
  };

  changePage = (newPage) => {
    this.setState({ page: newPage });
    console.log(this.state.page);
  };

  render() {
    switch (this.state.page) {
      case "Home":
        return (
          <div className="App">
            <Index changePage={this.changePage} />
          </div>
        );
      case "Single":
        return (
          <div className="App">
            <SinglePage changePage={this.changePage} />
          </div>
        );

      default:
        return (
          <div className="App">
            <h1>default</h1>
          </div>
        );
    }
  }
}

export default App;
