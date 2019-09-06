import { Action, Dispatch } from "redux";

const multi = ({ dispatch }: { dispatch: Dispatch }) => {
  return (next: Dispatch) => (action: Action) =>
    Array.isArray(action) ? action.filter(Boolean).map(dispatch) : next(action);
};

export default multi;
