import uuid from 'uuid/v1';

export const createNewPlayer = (): Player => {
  const player = {
    id: uuid(),
    name: '',
    initiative: ''
  };

  return player;
};

export const sortPlayer = (p1: Player, p2: Player): number => {
  return p1.initiative === p2.initiative
    ? 0
    : p1.initiative > p2.initiative
    ? -1
    : 1;
};
