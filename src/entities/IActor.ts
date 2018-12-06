import rollForInitiative from '../logic/rollForInitiative';

export default interface IActor {
    readonly id: number;
    readonly name: string;
    readonly initiativeBonus: number;

    readonly initiativeRoll?: number;
    readonly initiativeTotal?: number;

    rollForInitiative(): void;
    clone(id: number | undefined): IActor;
}

export class Actor implements IActor {
    public readonly id: number;
    public readonly name: string;
    public readonly initiativeBonus: number;

    private privateInitiativeRoll?: number;
    private privateInitiativeTotal?: number;

    constructor(id: number, name: string, initiativeBonus: number) {
        this.id = id;
        this.name = name;
        this.initiativeBonus = initiativeBonus;
    }

    get initiativeRoll(): number | undefined {
        return this.privateInitiativeRoll;
    }

    get initiativeTotal(): number | undefined {
        return this.privateInitiativeTotal;
    }

    public rollForInitiative(): void {
        this.privateInitiativeRoll = rollForInitiative();
        this.privateInitiativeTotal = this.privateInitiativeRoll + this.initiativeBonus;
    }

    public clone(id: number | undefined): Actor {
        return new Actor(id || this.id, this.name, this.initiativeBonus);
    }
}
