export default interface IActor {
    readonly name: string;
    readonly initiativeBonus: number;

    initiativeTotal?: number;
    initiativeRoll?: number;
}
