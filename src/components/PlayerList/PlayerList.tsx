import React from 'react';

import {
  createNewPlayer,
  sortPlayer,
  getOverlappingInitiativeMap,
  movePlayerDown,
  movePlayerUp,
} from '../../helpers/playerHelper';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

import { Counter } from '../Counter/Counter';
import { PlayerListItem } from './PlayerListItem';
import { ResetButton } from '../Button/ResetButton';
import { AddPlayerButton } from '../Button/AddPlayerButton';
import { NextPlayerButton } from '../Button/NextPlayerButton';

import './PlayerList.less';

export const PlayerList = () => {
  const [playerList, setPlayerList] = useLocalStorageState<IPlayer[]>(
    'playerList',
    []
  );
  const [playerTurn, setPlayerTurn] = useLocalStorageState('playerTurn', 0);
  const [roundCount, setRoundCount] = useLocalStorageState('roundCount', 1);

  const addPlayer = () => {
    setPlayerList([...playerList, createNewPlayer()]);
  };

  const removePlayer = (id: string) => {
    const playerIndex = playerList.findIndex((player) => player.id === id);

    const playerNotInList = playerIndex < 0;
    if (playerNotInList) {
      return;
    }

    if (playerList.length <= 2) {
      setPlayerTurn(0);
    } else if (playerIndex < playerTurn) {
      setPlayerTurn(Math.max(playerTurn - 1, 0));
    } else if (playerTurn === playerList.length - 1) {
      setPlayerTurn(playerList.length - 2);
    }

    setPlayerList(playerList.filter((player) => player.id !== id));
  };

  const updatePlayer = (player: IPlayer) => {
    const indexOfPlayer = playerList.findIndex(
      (oldPlayer) => oldPlayer.id === player.id
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

    const isNewRound = playerTurn + 1 === playerList.length;
    if (isNewRound) {
      setRoundCount(roundCount + 1);
    }

    setPlayerTurn((playerTurn + 1) % playerList.length);
  };

  const resetRoundCount = () => {
    setRoundCount(1);
  };

  const movePlayer = (playerId: string, moveDirection: string) => {
    const playerIndex = playerList.findIndex(
      (player) => player.id === playerId
    );

    const playerNotInList = playerIndex < 0;
    if (playerNotInList) {
      return;
    }

    if (moveDirection === 'down') {
      const playerAlreadyLast = playerIndex + 1 >= playerList.length;
      if (playerAlreadyLast) {
        return;
      }

      const playerCantMoveDown =
        playerList[playerIndex].initiative !==
        playerList[playerIndex + 1].initiative;
      if (playerCantMoveDown) {
        return;
      }

      const newPlayerList = movePlayerDown(playerList, playerIndex);

      setPlayerList(newPlayerList);
      return;
    }

    if (moveDirection === 'up') {
      const playerAlreadyFirst = playerIndex === 0;
      if (playerAlreadyFirst) {
        return;
      }

      const playerCantMoveUp =
        playerList[playerIndex].initiative !==
        playerList[playerIndex - 1].initiative;
      if (playerCantMoveUp) {
        return;
      }

      const newPlayerList = movePlayerUp(playerList, playerIndex);

      setPlayerList(newPlayerList);
    }
  };

  const initiativeMap = getOverlappingInitiativeMap(playerList);

  const playerElementList = playerList.map((player, index) => {
    const playerInitiativeIsOverlapping = Boolean(
      (initiativeMap.get(player.initiative) || 0) > 1
    );

    const playerItemKey = `${index}-${player.id}`;

    return (
      <PlayerListItem
        hasTurn={index === playerTurn}
        player={player}
        movePlayer={playerInitiativeIsOverlapping ? movePlayer : undefined}
        removePlayer={removePlayer}
        updatePlayer={updatePlayer}
        key={playerItemKey}
      />
    );
  });

  return (
    <>
      <div className="round-counter">
        <Counter label="Round" count={roundCount} />

        {roundCount !== 1 && <ResetButton onClick={resetRoundCount} />}
      </div>

      <div className="player-list-wrapper">
        <div className="header">
          <span>Name</span>
          <span>Initiative</span>
        </div>

        <ul className="player-list">{playerElementList}</ul>

        <div className="buttons">
          <AddPlayerButton onClick={addPlayer} />
          <NextPlayerButton onClick={nextPlayer} />
        </div>
      </div>
    </>
  );
};
