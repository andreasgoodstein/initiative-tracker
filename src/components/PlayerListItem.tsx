import React from 'react';

import { Button } from './Button';
import { Player } from './Player';
import { ButtonType } from '../types/enums';

import './PlayerListItem.less';

type PlayerListItemProps = {
  hasTurn: boolean;
  player: Player;

  movePlayer?: (id: string, moveDirection: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (player: Player) => void;
};
export const PlayerListItem = ({
  hasTurn,
  movePlayer,
  player,
  removePlayer,
  updatePlayer
}: PlayerListItemProps) => {
  const movePlayerElement = movePlayer ? (
    <div className="player-shift-initiative">
      <Button
        type={ButtonType.MoveUp}
        onClick={() => movePlayer(player.id, 'up')}
      />

      <Button
        type={ButtonType.MoveDown}
        onClick={() => movePlayer(player.id, 'down')}
      />
    </div>
  ) : null;

  return (
    <span className="player-list-item">
      <Player hasTurn={hasTurn} player={player} updatePlayer={updatePlayer} />

      <div className="player-buttons">
        <Button
          type={ButtonType.RemovePlayer}
          onClick={() => removePlayer(player.id)}
        />

        {movePlayerElement}
      </div>
    </span>
  );
};
