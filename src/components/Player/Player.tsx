import React from 'react';

import { useUpdateTimeout } from '../../hooks/useUpdateTimeout';

import './Player.less';

type PlayerProps = {
  hasTurn: boolean;
  player: IPlayer;
  updatePlayer: (player: IPlayer) => void;
};
export const Player = ({ hasTurn, player, updatePlayer }: PlayerProps) => {
  const [playerValue, changePlayer] = useUpdateTimeout<IPlayer>(
    player,
    updatePlayer
  );

  const className = hasTurn ? 'player active' : 'player';

  return (
    <div className={className}>
      <input
        className="input-name"
        onChange={({ target }) => {
          changePlayer({ ...playerValue, name: target.value });
        }}
        placeholder="Name"
        value={playerValue.name}
        type="text"
      />

      <input
        className="input-initiative"
        onChange={({ target }) => {
          changePlayer({
            ...playerValue,
            initiative: sanitizeNonNumbers(target.value),
          });
        }}
        pattern="[0-9]"
        placeholder="Init"
        value={playerValue.initiative}
        type="number"
      />
    </div>
  );
};

function sanitizeNonNumbers(initiative: string): string {
  return initiative.replace(/[^0-9]+/g, '');
}
