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
        onChange={({ target }) => {
          changeValueHandler({ ...player, name: target.value, initiative });
        }}
        value={name}
      ></input>
      <input
        className="input-initiative"
        onChange={({ target }) => {
          changeValueHandler({ ...player, name, initiative: target.value });
        }}
        value={initiative}
      ></input>
    </div>
  );
};
