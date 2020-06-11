/* istanbul ignore file */

interface IPlayer {
  canMove: boolean;
  id: string;
  initiative: string;
  name: string;
}

interface IButtonProps {
  onClick: () => void;
}

interface ITextButtonProps extends IButtonProps {
  text: string;
}

interface IStorageProvider {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}

interface IUsePlayerList {
  playerList: IPlayer[];
  playerTurn: number;
  roundCount: number;
  addPlayer: () => void;
  movePlayer: (playerId: string, moveDirection: string) => void;
  nextPlayer: () => void;
  removePlayer: (id: string) => void;
  resetRoundCount: () => void;
  updatePlayer: (player: IPlayer) => void;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
