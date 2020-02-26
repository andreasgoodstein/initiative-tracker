import React, { useState } from 'react';

import { createNewPlayer, sortPlayer } from '../helpers/playerHelper';
import { Player } from './Player';

import AddPlayerIcon from '../../assets/person-add.svg';
import NextPlayerIcon from '../../assets/arrow-forward-circle.svg';
import DeletePlayerIcon from '../../assets/close.svg';

import './PlayerList.less';

export const PlayerList = () => {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [playerTurn, setPlayerTurn] = useState(0);

  const addPlayer = () => {
    setPlayerList([...playerList, createNewPlayer()]);
  };

  const removePlayer = (id: string) => {
    const playerIndex = playerList.findIndex(player => player.id === id);

    if (playerList.length <= 2) {
      setPlayerTurn(0);
    } else if (playerIndex < playerTurn) {
      setPlayerTurn(Math.max(playerTurn - 1, 0));
    } else if (playerTurn === playerList.length - 1) {
      setPlayerTurn(playerList.length - 2);
    }

    setPlayerList(playerList.filter(player => player.id !== id));
  };

  const updatePlayer = (player: Player) => {
    const indexOfPlayer = playerList.findIndex(
      oldPlayer => oldPlayer.id === player.id
    );

    const newPlayerList = [...playerList];
    newPlayerList.splice(indexOfPlayer, 1, player);
    newPlayerList.sort(sortPlayer);

    setPlayerList(newPlayerList);
  };

  const nextPlayer = () => {
    if (playerList.length < 1) {
      return;
    }

    setPlayerTurn((playerTurn + 1) % playerList.length);
  };

  const playerElementList = playerList.map((player: Player, index: number) => (
    <span className="player-list-item" key={`${player.id}`}>
      <Player
        hasTurn={index === playerTurn}
        player={player}
        updatePlayer={updatePlayer}
      />
      <button className="delete-btn" onClick={() => removePlayer(player.id)}>
        <img src={DeletePlayerIcon} />
      </button>
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

      <div className="spacing buttons">
        <button onClick={addPlayer}>
          <img src={AddPlayerIcon} />
        </button>
        <button onClick={nextPlayer}>
          <img src={NextPlayerIcon} />
        </button>
      </div>
    </div>
  );
};
