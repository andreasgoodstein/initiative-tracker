import React, { useState } from 'react';

import { createNewPlayer, sortPlayer } from '../helpers/playerHelper';
import { Player } from './Player';

import './PlayerList.less';

export const PlayerList = () => {
  const [playerList, setPlayerList] = useState<Player[]>([]);

  const addPlayer = () => {
    setPlayerList([...playerList, createNewPlayer()]);
  };

  const removePlayer = (id: string) => {
    setPlayerList(playerList.filter(player => player.id !== id));
  };

  const updatePlayer = (player: Player) => {
    const newPlayerList = [
      ...playerList.filter(oldPlayer => oldPlayer.id !== player.id),
      player
    ].sort(sortPlayer);

    setPlayerList(newPlayerList);
  };

  const playerElementList = playerList.map((player: Player, index: number) => (
    <span className="player-list-item" key={`${index}${player.name}`}>
      <Player hasTurn={false} player={player} updatePlayer={updatePlayer} />
      <button onClick={() => removePlayer(player.id)}>x</button>
    </span>
  ));

  return (
    <div className="player-list-wrapper">
      {/* <div className="spacing">
        <label>
          Round <input></input>
        </label>
      </div> */}

      <div className="spacing header">
        <span>Name</span>
        <span>Initiative</span>
      </div>
      <div className="spacing player-list">{playerElementList}</div>

      <div className="spacing">
        <button onClick={addPlayer}>Add</button>
      </div>
    </div>
  );
};
