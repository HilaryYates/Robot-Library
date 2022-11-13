import React, { Component } from "react";
// import { robots } from "./robots.js";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../actions";
// import "./index.css";
import { render } from "@testing-library/react";
import { searchRobots } from "../reducers";

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => {
      dispatch(requestRobots());
    },
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      // searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading..</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>Search for the name of the Robot</h1>
          <SearchBox searchChange={onSearchChange} />
          {/* <Scroll> */}
          <CardList props={filteredRobots} />
          {/* </Scroll> */}
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
