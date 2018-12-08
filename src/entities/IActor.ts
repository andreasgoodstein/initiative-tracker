export default interface IActor {
    readonly id: number;
    readonly name: string;
    readonly initiativeBonus: number;

    initiativeRoll?: number;
    readonly initiativeTotal?: number;

    hasActiveTurn: boolean;

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

    set initiativeRoll(roll) {
        this.privateInitiativeRoll = roll;
        this.privateInitiativeTotal = parseInt(this.initiativeBonus, 10) + parseInt((roll || 0), 10);
    }

    get initiativeTotal(): number | undefined {
        return this.privateInitiativeTotal;
    }

    public clone(id: number | undefined): Actor {
        return new Actor(id || this.id, this.name, this.initiativeBonus);
    }

    public sort(a: Actor, b: Actor): number {
        return (b.initiativeTotal || 0) - (a.initiativeTotal || 0);
    }
}
