import React from "react";
import Card from "./Card";

const CardList = (props) => {
  console.log(props.props);
  const cardComponent = props.props.map((user, i) => {
    return (
      <Card
        id={props.props[i].id}
        name={props.props[i].name}
        email={props.props[i].email}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
