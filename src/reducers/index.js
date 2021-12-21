import { ADD_PLANT, EDIT_PLANT, DELETE_PLANT } from "../actions";

const initialState = {
    plants: [],
    isFetching: false,
    error:''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_PLANT):
            return ({
                ...state,
                plants: [...state.plants, action.payload]
            });
        case (EDIT_PLANT):
            return ({
                ...state,
                // NOT FINISHED, NEED API ENDPOINT
            });
        case (DELETE_PLANT):
            return ({
                ...state,
                // NOT FINISHED, NEED API ENDPOINT
            })
        default: {
            return state;
        }
    }
};


export default reducer;