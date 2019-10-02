import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import IActor from "../../entities/IActor";
import { selectors } from "../../reducers/actor";
import actions from "../../reducers/actor/actions";
import { IApplicationState } from "../../store/state";

interface IMappedState {
    actorList: IActor[];
}

interface IDispatchState {
    handleUpdateRolls(actorList: IActor[]): void;
}

export type RollInitiativeProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
    actorList: selectors.selectAllActors(state),
});

export const mapDispatch = (dispatch: Dispatch<Action>): IDispatchState => ({
    handleUpdateRolls: (actorList) => {
        dispatch(actions.updateActorRolls(actorList));
    },
});

export default (component: React.ComponentClass<RollInitiativeProps>) => connect(mapState, mapDispatch)(component);
