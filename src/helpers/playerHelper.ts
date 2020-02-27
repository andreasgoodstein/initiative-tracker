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
  const p1Initiative = parseInt(p1.initiative, 10) || 0;
  const p2Initiative = parseInt(p2.initiative, 10) || 0;

  return p1Initiative === p2Initiative
    ? 0
    : p1Initiative > p2Initiative
    ? -1
    : 1;
};
