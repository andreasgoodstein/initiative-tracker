import uuid from 'uuid/v1';

export const createNewPlayer = (): Player => {
  const player = {
    id: uuid(),
    name: '',
    initiative: ''
  };

  return player;
};

export const getOverlappingInitiativeMap = (
  playerList: Player[]
): Map<string, number> => {
  return playerList.reduce((initiativeMap, player) => {
    return player.initiative
      ? initiativeMap.set(
          player.initiative,
          (initiativeMap.get(player.initiative) || 0) + 1
        )
      : initiativeMap;
  }, new Map<string, number>());
};

export const movePlayerDown = (
  playerList: Player[],
  playerIndex: number
): Player[] => {
  const newPlayerList = [...playerList];

  const movedPlayer = newPlayerList.splice(
    playerIndex,
    1,
    newPlayerList[playerIndex + 1]
  )[0];

  newPlayerList.splice(playerIndex + 1, 1, movedPlayer);

  return newPlayerList;
};

export const movePlayerUp = (
  playerList: Player[],
  playerIndex: number
): Player[] => {
  const newPlayerList = [...playerList];

  const movedPlayer = newPlayerList.splice(
    playerIndex,
    1,
    newPlayerList[playerIndex - 1]
  )[0];

  newPlayerList.splice(playerIndex - 1, 1, movedPlayer);

  return newPlayerList;
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
