import React from 'react';
import Today from './today';

const TodaysPlants = () => {
    return(       
        <div className='todays-plants-wrapper'>
            <h2>Today's Plants</h2>
            <div className='info-wrapper'>
                <Today/>
                {/* array.map(argument => {return(<Today key={prop} prop={prop}/>)}) */}
            </div>
        </div>
    )
}

export default TodaysPlants;