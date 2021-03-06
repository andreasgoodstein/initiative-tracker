import React from 'react';

import { Player } from '../Player/Player';

import { MoveUpButton } from '../Button/MoveUpButton';
import { MoveDownButton } from '../Button/MoveDownButton';
import { RemovePlayerButton } from '../Button/RemovePlayerButton';

import './PlayerListItem.less';

type PlayerListItemProps = {
  hasTurn: boolean;
  player: IPlayer;

  movePlayer?: (id: string, moveDirection: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (player: IPlayer) => void;
};
export const PlayerListItem = ({
  hasTurn,
  movePlayer,
  player,
  removePlayer,
  updatePlayer,
}: PlayerListItemProps) => {
  const movePlayerElement = movePlayer ? (
    <div className="player-shift-initiative">
      <MoveUpButton onClick={() => movePlayer(player.id, 'up')} />

      <MoveDownButton onClick={() => movePlayer(player.id, 'down')} />
    </div>
  ) : null;

  return (
    <li className="player-list-item">
      <Player hasTurn={hasTurn} player={player} updatePlayer={updatePlayer} />

      <div className="player-buttons">
        <RemovePlayerButton onClick={() => removePlayer(player.id)} />

        {movePlayerElement}
      </div>
    </li>
  );
};
