import GameScreen from "../../entities/GameScreenEnum";

export interface IGameState {
  readonly gameScreen: GameScreen;
  readonly roundCount: number;
}

const initialGameState: IGameState = {
  gameScreen: GameScreen.Encounter,
  roundCount: 0
};

export default initialGameState;
