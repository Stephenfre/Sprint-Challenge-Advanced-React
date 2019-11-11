import React from "react";

import PlayerCards from "./PlayerCards.js";

const Players = props => {
  return (
    <div className="players">
      {props.players.map(player => (
        <PlayerCards
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}
        />
      ))}
    </div>
  );
};
export default Players;
