import React, {useEffect} from 'react'
import PlantList from './plantList';
import TodaysPlants from './todaysPlants';
import { connect } from 'react-redux';
import { addPlant } from '../../actions';

const LandingPage = (props) => {

    useEffect(() => {
        //API CALL
    }, [])

    return (
        <div className='landing-page-wrapper'>
            <h1>Welcome -username-!</h1>
            <h2>Today is -Date-</h2>
            <TodaysPlants />
            <PlantList />
        </div>
    )
};

const mapStateToProps = (state) => {
    return ({
        plants: state.plants
    })
}

export default connect(mapStateToProps, {addPlant})(LandingPage);