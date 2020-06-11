import {
  createNewPlayer,
  getOverlappingInitiativeMap,
  movePlayerDown,
  movePlayerUp,
  sortPlayer,
} from '../helpers/playerHelper';

import { useLocalStorageState } from './useLocalStorageState';

export const usePlayerList = (): IUsePlayerList => {
  const [playerList, setPlayerList] = useLocalStorageState<IPlayer[]>(
    'playerList',
    []
  );
  const [playerTurn, setPlayerTurn] = useLocalStorageState('playerTurn', 0);
  const [roundCount, setRoundCount] = useLocalStorageState('roundCount', 1);

  const addPlayer = () => {
    setPlayerList([...playerList, createNewPlayer()]);
  };

  const removePlayer = (id: string) => {
    const playerIndex = playerList.findIndex((player) => player.id === id);

    const playerNotInList = playerIndex < 0;
    if (playerNotInList) {
      return;
    }

    if (playerList.length <= 2) {
      setPlayerTurn(0);
    } else if (playerIndex < playerTurn) {
      setPlayerTurn(Math.max(playerTurn - 1, 0));
    } else if (playerTurn === playerList.length - 1) {
      setPlayerTurn(playerList.length - 2);
    }

    setPlayerList(playerList.filter((player) => player.id !== id));
  };

  const updatePlayer = (player: IPlayer) => {
    const updatedPlayer = { ...player };

    const indexOfPlayer = playerList.findIndex(
      (oldPlayer) => oldPlayer.id === updatedPlayer.id
    );

    let newPlayerList = [...playerList];
    newPlayerList.splice(indexOfPlayer, 1, updatedPlayer);
    newPlayerList.sort(sortPlayer);

    const initiativeMap = getOverlappingInitiativeMap(newPlayerList);
    newPlayerList = newPlayerList.map((playerItem) => ({
      ...playerItem,
      canMove: (initiativeMap.get(playerItem.initiative) || 0) > 1,
    }));

    setPlayerList(newPlayerList);
  };

  const nextPlayer = () => {
    if (playerList.length < 1) {
      return;
    }

    const isNewRound = playerTurn + 1 === playerList.length;
    if (isNewRound) {
      setRoundCount(roundCount + 1);
    }

    setPlayerTurn((playerTurn + 1) % playerList.length);
  };

  const resetRoundCount = () => {
    setRoundCount(1);
  };

  const movePlayer = (playerId: string, moveDirection: string) => {
    const playerIndex = playerList.findIndex(
      (player) => player.id === playerId
    );

    const playerNotInList = playerIndex < 0;
    if (playerNotInList) {
      return;
    }

    if (moveDirection === 'down') {
      const playerAlreadyLast = playerIndex + 1 >= playerList.length;
      if (playerAlreadyLast) {
        return;
      }

      const playerCantMoveDown =
        playerList[playerIndex].initiative !==
        playerList[playerIndex + 1].initiative;
      if (playerCantMoveDown) {
        return;
      }

      const newPlayerList = movePlayerDown(playerList, playerIndex);

      setPlayerList(newPlayerList);
    }

    if (moveDirection === 'up') {
      const playerAlreadyFirst = playerIndex === 0;
      if (playerAlreadyFirst) {
        return;
      }

      const playerCantMoveUp =
        playerList[playerIndex].initiative !==
        playerList[playerIndex - 1].initiative;
      if (playerCantMoveUp) {
        return;
      }

      const newPlayerList = movePlayerUp(playerList, playerIndex);

      setPlayerList(newPlayerList);
    }
  };

  return {
    playerList,
    playerTurn,
    roundCount,
    addPlayer,
    movePlayer,
    nextPlayer,
    removePlayer,
    resetRoundCount,
    updatePlayer,
  };
};
