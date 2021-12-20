import React from 'react';
import Plant from './plant';

const PlantList = () => {
    return(
        <div className='plant-list-wrapper'>
            <h2>Plant List</h2>
            <div className='plants-wrapper'>
                <div className='plant-wrapper'>
                    {/* array.map(argument => {return(<Plant key={prop} prop={prop}/>)}) */}
                    <Plant/>
                </div>
            </div>
        </div>  
    )
}

export default PlantList;