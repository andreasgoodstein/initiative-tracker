import React, { useState } from 'react';

import './Player.less';

type PlayerProps = {
  hasTurn: boolean;
  player: Player;
  updatePlayer: (player: Player) => void;
};
export const Player = ({ hasTurn, player, updatePlayer }: PlayerProps) => {
  const [name, setName] = useState(player.name);
  const [initiative, setInitiative] = useState(player.initiative);
  const [updateTimeout, setUpdateTimeout] = useState();

  const changeValueHandler = (newPlayer: Player) => {
    clearTimeout(updateTimeout);
    setUpdateTimeout(setTimeout(() => updatePlayer(newPlayer), 300));

    setName(newPlayer.name);
    setInitiative(newPlayer.initiative);
  };

  const className = hasTurn ? 'player active' : 'player';

  return (
    <div className={className}>
      <input
        className="input-name"
        onChange={({ target }) => {
          changeValueHandler({ ...player, name: target.value, initiative });
        }}
        value={name}
        type="text"
      ></input>
      <input
        className="input-initiative"
        onChange={({ target }) => {
          changeValueHandler({ ...player, name, initiative: target.value });
        }}
        pattern="[0-9\/]*"
        value={initiative}
        type="number"
      ></input>
    </div>
  );
};