export default interface IActor {
  readonly id: number;
  readonly name: string;

  initiative?: number;

  hasActiveTurn: boolean;

  clone(id: number | undefined): IActor;
  sort(a: IActor, b: IActor): number;
}

export class Actor implements IActor {
  public readonly id: number;
  public readonly name: string;

  public hasActiveTurn: boolean;

  public initiative?: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;

    this.hasActiveTurn = false;
  }

  public clone(id: number | undefined): Actor {
    return new Actor(id || this.id, this.name);
  }

  public sort(a: Actor, b: Actor): number {
    return (b.initiative || 0) - (a.initiative || 0);
  }
}
