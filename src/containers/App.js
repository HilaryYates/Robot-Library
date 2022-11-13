import React, { Component } from "react";
// import { robots } from "./robots.js";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import "./index.css";
import { render } from "@testing-library/react";
class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchField: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading..</h1>
    ) : (
      <div className='tc'>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <Scroll> */}
        <ErrorBoundary>
          <CardList props={filteredRobots} />
        </ErrorBoundary>
        {/* </Scroll> */}
      </div>
    );
  }
}

export default App;
