import { v1 as uuidv1 } from 'uuid';

export function createNewPlayer(): IPlayer {
  //return new Player object
  return {
    id: uuidv1(),
    name: '',
    initiative: '',
  };
}

export function getOverlappingInitiativeMap(
  playerList: IPlayer[]
): Map<string, number> {
  return playerList.reduce((initiativeMap, player) => {
    return player.initiative
      ? initiativeMap.set(
          player.initiative,
          (initiativeMap.get(player.initiative) || 0) + 1
        )
      : initiativeMap;
  }, new Map<string, number>());
}

export function movePlayerDown(
  playerList: IPlayer[],
  playerIndex: number
): IPlayer[] {
  const newPlayerList = [...playerList];

  const movedPlayer = newPlayerList.splice(
    playerIndex,
    1,
    newPlayerList[playerIndex + 1]
  )[0];

  newPlayerList.splice(playerIndex + 1, 1, movedPlayer);

  return newPlayerList;
}

export function movePlayerUp(
  playerList: IPlayer[],
  playerIndex: number
): IPlayer[] {
  const newPlayerList = [...playerList];

  const movedPlayer = newPlayerList.splice(
    playerIndex,
    1,
    newPlayerList[playerIndex - 1]
  )[0];

  newPlayerList.splice(playerIndex - 1, 1, movedPlayer);

  return newPlayerList;
}

export function sortPlayer(p1: IPlayer, p2: IPlayer): number {
  const p1Initiative = parseInt(p1.initiative, 10) || 0;
  const p2Initiative = parseInt(p2.initiative, 10) || 0;

  return p1Initiative === p2Initiative
    ? 0
    : p1Initiative > p2Initiative
    ? -1
    : 1;
}
