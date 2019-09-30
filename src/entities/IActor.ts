export default interface IActor {
  readonly id: number;
  readonly name: string;

  hasActiveTurn: boolean;
  initiative: number;
}

export class Actor implements IActor {
  public readonly id: number;
  public readonly name: string;

  public hasActiveTurn: boolean;
  public initiative: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;

    this.hasActiveTurn = false;
    this.initiative = 0;
  }
}

export const sortActors = (firstActor: Actor, secondActor: Actor): number =>
  secondActor.initiative - firstActor.initiative;
