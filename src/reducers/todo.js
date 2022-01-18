import { ADD_TO_LIST } from "../actions/types";

const initialState = {
    list: [{ type: "helloworld" }],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            const { payload } = action;
            const { list } = state;
            list.push(payload);
            return {
                ...state,
                list
            };
        default:
            return state;
    }
}

export default todoReducer;