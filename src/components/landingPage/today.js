import React from 'react';

const handleClick = () => {
    //open viewPlants modal
    console.log('hi')
}

const Today = () => {
    return(
        <div className='today-wrapper'>
            <img className='todays-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pilea-_miami_jungle.jpg/160px-Pilea-_miami_jungle.jpg' alt='houseplant name'/>
            <div className='plant-info-wrapper'>
                <h3 onClick={handleClick}>Name -link to individual plant</h3>
                <p>Watering Frequency</p>
            </div>
        </div>
    )
}

export default Today;