import React, { useState } from 'react';

import './Player.less';
import { Jon } from './Jon';

type PlayerProps = {
  hasTurn: boolean;
  player: IPlayer;
  updatePlayer: (player: IPlayer) => void;
};
export const Player = ({ hasTurn, player, updatePlayer }: PlayerProps) => {
  const [name, setName] = useState(player.name);
  const [initiative, setInitiative] = useState(player.initiative);
  const [updateTimeout, setUpdateTimeout] = useState<number>();

  const changeValueHandler = (newPlayer: IPlayer) => {
    clearTimeout(updateTimeout);
    setUpdateTimeout(
      (setTimeout(() => updatePlayer(newPlayer), 300) as unknown) as number
    );

    setName(newPlayer.name);
    setInitiative(newPlayer.initiative);
  };

  const className = hasTurn ? 'player active' : 'player';

  const isJonInput = initiative === '½';

  return isJonInput ? (
    <Jon />
  ) : (
    <div className={className}>
      <input
        className="input-name"
        onChange={({ target }) => {
          changeValueHandler({ ...player, name: target.value, initiative });
        }}
        value={name}
        type="text"
      />

      <input
        className="input-initiative"
        onChange={({ target }) => {
          changeValueHandler({
            ...player,
            name,
            initiative: getSanitizedInitiative(target.value),
          });
        }}
        value={initiative}
        type="number"
      />
    </div>
  );
};

function getSanitizedInitiative(initiative: string): string {
  return initiative.replace(/[^0-9½]+/g, '');
}
