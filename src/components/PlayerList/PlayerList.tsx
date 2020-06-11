import React from 'react';

import { usePlayerList } from '../../hooks/usePlayerList';

import { Counter } from '../Counter/Counter';
import { PlayerListItem } from './PlayerListItem';
import { ResetButton } from '../Button/ResetButton';
import { AddPlayerButton } from '../Button/AddPlayerButton';
import { NextPlayerButton } from '../Button/NextPlayerButton';

import './PlayerList.less';

export const PlayerList = () => {
  const {
    playerList,
    playerTurn,
    roundCount,
    addPlayer,
    movePlayer,
    nextPlayer,
    removePlayer,
    resetRoundCount,
    updatePlayer,
  } = usePlayerList();

  const playerItemList = playerList.map((player, index) => (
    <PlayerListItem
      hasTurn={index === playerTurn}
      player={player}
      movePlayer={player.canMove ? movePlayer : undefined}
      removePlayer={removePlayer}
      updatePlayer={updatePlayer}
      key={`${player.id}-${player.initiative}`}
    />
  ));

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

        <ul className="player-list">{playerItemList}</ul>

        <div className="buttons">
          <AddPlayerButton onClick={addPlayer} />
          <NextPlayerButton onClick={nextPlayer} />
        </div>
      </div>
    </>
  );
};
