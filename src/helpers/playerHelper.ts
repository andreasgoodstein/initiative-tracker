import { v1 as uuidv1 } from 'uuid';

export function createNewPlayer(): IPlayer {
  // return new Player object
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
  if (playerIndex >= playerList.length - 1) {
    return playerList;
  }

  const newPlayerList = [...playerList];

  const movedPlayer = newPlayerList.splice(playerIndex, 1)[0];

  newPlayerList.splice(playerIndex + 1, 1, movedPlayer);

  return newPlayerList;
}

export function movePlayerUp(
  playerList: IPlayer[],
  playerIndex: number
): IPlayer[] {
  if (playerIndex > playerList.length - 1 || playerIndex === 0) {
    return playerList;
  }

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
  const p1Initiative = parseStringToNumberOrZero(p1.initiative);
  const p2Initiative = parseStringToNumberOrZero(p2.initiative);

  return p2Initiative - p1Initiative;
}

function parseStringToNumberOrZero(initiative: string): number {
  return parseInt(initiative, 10) || 0;
}
