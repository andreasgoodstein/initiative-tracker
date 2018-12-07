import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import IActor from '../../entities/IActor';
import { selectors } from '../../reducers/actor';
import actions from '../../reducers/actor/actions';
import { IApplicationState } from '../../store/state';

interface IMappedState {
    actors: IActor[];
}

interface IDispatchState {
    handleUpdateRolls(actors: IActor[]): void;
}

export type RollInitiativeProps = IMappedState & IDispatchState & {};

export const mapState = (state: IApplicationState): IMappedState => ({
    actors: selectors.selectAllActors(state),
});

export const mapDispatch = (dispatch: Dispatch<AnyAction>): IDispatchState => ({
    handleUpdateRolls: (actors) => {
        dispatch(actions.updateActorRolls(actors));
    },
});

export default (component: React.PureComponent<RollInitiativeProps>) =>
    connect<RollInitiativeProps>(mapState, mapDispatch)(component);
