import IActor from "../../entities/IActor";

interface IParty {
  members: IActor[];
}

export interface IPartyState {
  readonly party: IParty;
}

const initialPartyState: IPartyState = {
  party: {
    members: []
  }
};

export default initialPartyState;
