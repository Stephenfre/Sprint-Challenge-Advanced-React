import React from "react";

const PlayerCards = props => {
  return (
    <div className="PlayersCard">
      <div></div>
      <h1>{props.name}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed
        viverra ipsum. Et netus et malesuada fames ac turpis egestas maecenas
        pharetra. Viverra justo nec ultrices dui sapien.
      </p>
      <p>Country: {props.country}</p>
      <p>Searched: {props.searches}</p>
    </div>
  );
};

export default PlayerCards;
