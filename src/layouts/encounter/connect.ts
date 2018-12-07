import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import IActor from '../../entities/IActor';
import { actions, selectors } from '../../reducers/actor';
import { IApplicationState } from '../../store/state';

interface IMappedState {
    items: IActor[];
}

interface IDispatchState {
    handleAddActorAction(actor: IActor): void;
    handleRemoveActorAction(actor: IActor): void;
    handleRollForInitiative(): void;
    handleHighlightNextActor(): void;
}

export type EncounterLayoutProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
    items: selectors.selectAllActors(state),
});

export const mapDispatch = (dispatch: Dispatch<AnyAction>): IDispatchState => ({
    handleAddActorAction: () => {
        dispatch(actions.tryAddActorAction());
    },
    handleHighlightNextActor: () => {
        dispatch(actions.highlightNextActor());
    },
    handleRemoveActorAction: (actor) => {
        dispatch(actions.removeActorAction(actor));
    },
    handleRollForInitiative: () => {
        dispatch(actions.rollAllActors());
    },
});

export default (component: React.SFC<EncounterLayoutProps>) => connect(mapState, mapDispatch)(component);
