import { ADD_TO_LIST } from './types';

export const addToList = (payload) => {
    console.log(payload);
    return dispatch => {
        console.log("dispatching")
        return dispatch({ type: ADD_TO_LIST, payload });
    }
}