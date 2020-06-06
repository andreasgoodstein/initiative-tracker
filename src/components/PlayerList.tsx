import React from 'react';

import {
  createNewPlayer,
  sortPlayer,
  getOverlappingInitiativeMap,
  movePlayerDown,
  movePlayerUp,
} from '../helpers/playerHelper';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

import { Counter } from './Counter';
import { PlayerListItem } from './PlayerListItem';

import './PlayerList.less';
import { ResetButton } from './Button/ResetButton';
import { AddPlayerButton } from './Button/AddPlayerButton';
import { NextPlayerButton } from './Button/NextPlayerButton';

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

    if (playerTurn + 1 === playerList.length) {
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

    if (playerIndex < 0) {
      return;
    }

    switch (moveDirection) {
      case 'down': {
        if (playerIndex + 1 === playerList.length) {
          return;
        }

        if (
          playerList[playerIndex].initiative !==
          playerList[playerIndex + 1].initiative
        ) {
          return;
        }

        const newPlayerList = movePlayerDown(playerList, playerIndex);

        setPlayerList(newPlayerList);

        return;
      }

      case 'up': {
        if (playerIndex === 0) {
          return;
        }

        if (
          playerList[playerIndex].initiative !==
          playerList[playerIndex - 1].initiative
        ) {
          return;
        }

        const newPlayerList = movePlayerUp(playerList, playerIndex);

        setPlayerList(newPlayerList);

        return;
      }

      default:
        return;
    }
  };

  const initiativeMap = getOverlappingInitiativeMap(playerList);

  const playerElementList = playerList.map((player, index) => {
    const playerInitiativeIsOverlapping = Boolean(
      (initiativeMap.get(player.initiative) || 0) > 1
    );

    return (
      <PlayerListItem
        hasTurn={index === playerTurn}
        player={player}
        movePlayer={playerInitiativeIsOverlapping ? movePlayer : undefined}
        removePlayer={removePlayer}
        updatePlayer={updatePlayer}
        key={`${index}-${player.id}`}
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

        <div className="player-list">{playerElementList}</div>

        <div className="buttons">
          <AddPlayerButton onClick={addPlayer} />
          <NextPlayerButton onClick={nextPlayer} />
        </div>
      </div>
    </>
  );
};
