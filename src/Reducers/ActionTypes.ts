import { Middleware } from "redux";
import { createLogger } from "redux-logger";

const SharedActions = {


};
export const setAppAction = value => dispatch => {
    dispatch({ type: 'SUBMIT_APP', payload: value})
}

export type ActionType = {
    type: string
    payload: any
};

export const middleware: Middleware[] = [createLogger({ collapsed: true, diff: false })];

export default SharedActions;