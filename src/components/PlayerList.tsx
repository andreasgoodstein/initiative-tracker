import React, { useState } from 'react';

import { ButtonType } from '../types/enums';
import { createNewPlayer, sortPlayer } from '../helpers/playerHelper';
import { Button } from './Button';
import { Counter } from './Counter';
import { Player } from './Player';

import './PlayerList.less';

export const PlayerList = () => {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [playerTurn, setPlayerTurn] = useState(0);
  const [roundCount, setRoundCount] = useState(1);

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

    if (playerTurn + 1 === playerList.length) {
      setRoundCount(roundCount + 1);
    }

    setPlayerTurn((playerTurn + 1) % playerList.length);
  };

  const resetRoundCount = () => {
    setRoundCount(1);
  };

  const playerElementList = playerList.map((player: Player, index: number) => (
    <span className="player-list-item" key={`${player.id}`}>
      <Player
        hasTurn={index === playerTurn}
        player={player}
        updatePlayer={updatePlayer}
      />

      <Button
        type={ButtonType.RemovePlayer}
        onClick={() => removePlayer(player.id)}
      />
    </span>
  ));

  return (
    <>
      <div className="round-counter">
        <Counter label="Round" count={roundCount} />

        {roundCount !== 1 && (
          <Button type={ButtonType.Reset} onClick={resetRoundCount} />
        )}
      </div>

      <div className="player-list-wrapper">
        <div className="header">
          <span>Name</span>
          <span>Initiative</span>
        </div>

        <div className="player-list">{playerElementList}</div>

        <div className="buttons">
          <Button type={ButtonType.AddPlayer} onClick={addPlayer} />

          <Button type={ButtonType.NextPlayer} onClick={nextPlayer} />
        </div>
      </div>
    </>
  );
};
