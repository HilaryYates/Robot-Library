import React, { Component } from "react";
import { robots } from "./robots.js";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = { robots, searchField: "" };
  }
  render() {
    return (
      <div className='tc'>
        <h1>Robots</h1>
        <SearchBox />
        <CardList props={robots} />
      </div>
    );
  }
}

export default App;
