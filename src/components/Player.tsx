import React from 'react';
import { debounce } from 'throttle-debounce';

import './Player.less';

type PlayerProps = {
  hasTurn: boolean;
  player: Player;
  updatePlayer: (player: Player) => void;
};
export const Player = ({ hasTurn, player, updatePlayer }: PlayerProps) => {
  const className = hasTurn ? 'player active' : 'player';

  const debounceUpdate = debounce(200, false, updatePlayer);

  return (
    <div className={className}>
      <input
        onChange={({ target }) =>
          debounceUpdate({ ...player, name: target.value })
        }
        value={player.name}
      ></input>
      <input
        className="input-initiative"
        onChange={({ target }) => {
          debounceUpdate({ ...player, initiative: target.value });
        }}
        value={player.initiative}
      ></input>
    </div>
  );
};
