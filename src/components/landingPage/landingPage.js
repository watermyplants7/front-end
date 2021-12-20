import React from 'react'
import PlantList from './plantList';
import TodaysPlants from './todaysPlants';

const LandingPage = () => {
    return (
        <div className='landing-page-wrapper'>
            <h1>Welcome -username-!</h1>
            <h2>Today is -Date-</h2>
            <TodaysPlants/>
            <PlantList/>
        </div>
    )
}

export default LandingPage;