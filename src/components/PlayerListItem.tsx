import React from 'react';

import { ButtonType } from '../../enums';
import { Button } from './Button';
import { Player } from './Player';

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
