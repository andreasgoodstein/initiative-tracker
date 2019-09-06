export interface IGameState {
    readonly roundCount: number;
}

const initialGameState: IGameState = {
    roundCount: 0,
};

export default initialGameState;
