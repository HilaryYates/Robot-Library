import { render } from "@testing-library/react";
import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className='ts dib br3 pa2 ma2 grow bw2 shadow-5  '>
      <img alt='robots' src={`https://robohash.org/${id} ?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
