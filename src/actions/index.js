export const ADD_PLANT = 'ADD_PLANT';
export const EDIT_PLANT = 'EDIT_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';
export const TOGGLE_REGISTER = 'TOGGLE_REGISTER';

export const addPlant = (newPlant) => {
    return ({
        type: ADD_PLANT, payload: newPlant
    });
};

export const editPlant = (editedPlant) => {
    return ({
        type: ADD_PLANT, payload: editedPlant
    });
};

export const deletePlant = (id) => {
    return ({
        type: ADD_PLANT, payload: id
    });
};

export const toggleRegister = () => {
    return ({
        type: TOGGLE_REGISTER
    });
};


 
 
 