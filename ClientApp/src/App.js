import React, { Component } from "react";

import "./App.css";

import Index from "./components/Index";
import SinglePage from "./components/SinglePage";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    page: "Home",
  };

  changePage = (newPage) => {
    this.setState({ page: newPage });
    console.log(this.state.page);
  };

  render() {
    var page;

    switch (this.state.page) {
      case "Home":
        page = <Index changePage={this.changePage} />;
        break;

      case "Single":
        page = <SinglePage changePage={this.changePage} />;
        break;

      case "Contact":
        page = <Contact changePage={this.changePage} />;
        break;

      default:
           page = <Index changePage={this.changePage} />
    }

    return <div className="App">{page}</div>;
  }
}

export default App;
