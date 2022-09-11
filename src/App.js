import React from "react";
import { robots } from "./robots.js";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className='tc'>
      <h1>Robots</h1>
      <SearchBox />
      <CardList props={robots} />
    </div>
  );
};

export default App;
