import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";

import IActor from "../../entities/IActor";
import actions from "../../reducers/actor/actions";

interface IDispatchState {
    handleAddActor(actor: IActor): void;
}

export type AddActorProps = IDispatchState;

export const mapDispatch = (dispatch: Dispatch<AnyAction>): IDispatchState => ({
    handleAddActor: (actor) => {
        dispatch(actions.addActorAction(actor));
    },
});

export default (component: React.ComponentClass<AddActorProps>) => connect(null, mapDispatch)(component);
