import rollDice from '../logic/rollDice';

export default interface IActor {
    readonly id: number;
    readonly name: string;
    readonly initiativeBonus: number;

    readonly initiativeRoll?: number;
    readonly initiativeTotal?: number;

    hasActiveTurn: boolean;

    rollForInitiative(): void;
    clone(id: number | undefined): IActor;
    sort(a: IActor, b: IActor): number;
}

export class Actor implements IActor {
    public readonly id: number;
    public readonly name: string;
    public readonly initiativeBonus: number;

    public hasActiveTurn: boolean;

    private privateInitiativeRoll?: number;
    private privateInitiativeTotal?: number;

    constructor(id: number, name: string, initiativeBonus: number) {
        this.id = id;
        this.name = name;
        this.initiativeBonus = initiativeBonus;

        this.hasActiveTurn = false;
    }

    get initiativeRoll(): number | undefined {
        return this.privateInitiativeRoll;
    }

    get initiativeTotal(): number | undefined {
        return this.privateInitiativeTotal;
    }

    public rollForInitiative(): void {
        this.privateInitiativeRoll = rollDice(20);
        this.privateInitiativeTotal = this.privateInitiativeRoll + this.initiativeBonus;
    }

    public clone(id: number | undefined): Actor {
        return new Actor(id || this.id, this.name, this.initiativeBonus);
    }

    public sort(a: Actor, b: Actor): number {
        return (b.initiativeTotal || 0) - (a.initiativeTotal || 0);
    }
}
