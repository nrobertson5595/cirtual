import { ActionType } from "./ActionTypes";
import FormType from "../Types/FormType";

export type ApplicationState = {
    entries: FormType[]
}

const initialState = {
    entries: [],
};

export default function rootReducer(
    state: ApplicationState = initialState,
    action: ActionType
): ApplicationState {
    switch (action.type) {
        case 'SUBMIT_APP':
        return {
            ...state,
            entries: action.payload
        }
        default:
            return state
    }
}