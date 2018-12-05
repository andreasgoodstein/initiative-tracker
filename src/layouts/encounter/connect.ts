import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import IActor from '../../entities/IActor';
import { actions, IActorAction, selectors } from '../../reducers/actor';
import { IApplicationState } from '../../store/state';

interface IMappedState {
    items: IActor[];
}

interface IDispatchState {
    handleAddActorAction(actor: IActor): void;
    handleRemoveActorAction(actor: IActor): void;
}

export type EncounterLayoutProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
    items: selectors.selectAllActors(state),
});

export const mapDispatch = (dispatch: Dispatch<IActorAction>): IDispatchState => ({
    handleAddActorAction: (actor) => {
        dispatch(actions.addActorAction(actor));
    },
    handleRemoveActorAction: (actor) => {
        dispatch(actions.removeActorAction(actor));
    },
});

export default (component: React.SFC<EncounterLayoutProps>) => connect(mapState, mapDispatch)(component);
