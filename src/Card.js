import React from "react";

const Card = (props) => {
  return (
    <div className='ts bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <h1>Robots</h1>
      <img
        alt='robots'
        src={`https://robohash.org/${props.id} ?size=200x200`}
      />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
