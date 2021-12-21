import React from 'react';
import deletePlant from '../../actions';

const handleEditClick = () => {
    //redirect to edit plant page for specific plant
}

const viewPlant = () => {
    return(
        <div className='view-plant-wrapper'>
            <img />
            <div className='view-plant-info'>
                <h2>Plant Name</h2>
                <h3>Species</h3>
                <p>Watering Frequency</p>
                <p>Care Instructions</p>
            </div>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={deletePlant}>Delete</button>
        </div>
    )
}

export const viewPlant;