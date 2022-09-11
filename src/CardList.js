import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const robots = props.props;
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;

// import React from "react";
// import Card from "./Card";

// const CardList = (props) => {
//   const cardComponent = props.props.map((user, i) => {
//     return (
//       <Card
//         key={i}
//         id={props.props[i].id}
//         name={props.props[i].name}
//         email={props.props[i].email}
//       />
//     );
//   });
//   return <div>{cardComponent}</div>;
// };

// export default CardList;
