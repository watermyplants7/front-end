import { ADD_PLANT, EDIT_PLANT, DELETE_PLANT, TOGGLE_REGISTER } from "../actions";

const initialState = {
    plants: [],
    isFetching: false,
    error: '',
    openRegister: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_PLANT):
            console.log('Reducer case: ADD_PLANT triggered')
            return ({
                ...state,
                plants: [...state.plants, action.payload]
            });
        case (EDIT_PLANT):
            console.log('Reducer case: EDIT_PLANT triggered')
            return ({
                ...state,
                // NOT FINISHED, NEED API ENDPOINT
            });
        case (DELETE_PLANT):
            console.log('Reducer case: DELETE_PLANT triggered')
            return ({
                ...state,
                // NOT FINISHED, NEED API ENDPOINT
            });
        case TOGGLE_REGISTER:
            return ({
                ...state,
               openRegister: !state.openRegister 
            });
        default: {
            return state;
        }
    }
};


export default reducer;