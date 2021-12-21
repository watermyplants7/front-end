import React from 'react';

const handleClick = () => {
    //open viewPlants modal
    console.log('hi')
}

const Plant = () => {
    return(
        <div className='plant-info'>
            <img className='plant-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pilea-_miami_jungle.jpg/160px-Pilea-_miami_jungle.jpg' alt='houseplant name'/>
            <h3 onClick={handleClick}>Name- link to individual plant</h3>
        </div>
    )
}

export default Plant;