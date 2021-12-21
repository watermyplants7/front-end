import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditPlant = () => {
    const { push } = useHistory();
    const initialValues = {
        photo: '',
        nickname: '',
        species: '',
        h2oFrequency: '',
        careInstructions: ''
    }

    const [formValues, setFormValues] = useState(initialValues);

    // Call API for specific plant on mount
    // useEffect(() => {
    //     axiosWithAuth()
    //         .get(`PLANT API ENDPOINT HERE`)
    //         .then((resp) => {
    //             setFormValues(resp.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])


    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // API post call here

        // axiosWithAuth()
        // .put(`API ENDPOINT HERE`, formValues)
        // .then((resp) => {
        //     setPlants(resp.data); <-- global state
        // })
        // .catch((err) => {
        //     console.log(err);
        // })

        // Notification on successful update
        push('/home');
    }

    return (
        <div>
            <div className='plant-form-container'>
                <h2>Edit a Plant</h2>
                <form className='plant-form'>
                    <div>
                        <label>Photo URL (Optional)</label>
                        <input type='text' name='photo' onChange={handleChange} value={formValues.photo} />
                    </div>
                    <div>
                        <label>Nickname</label>
                        <input type='text' name='nickname' onChange={handleChange} value={formValues.nickname} />
                    </div>
                    <div>
                        <label>Species</label>
                        <input type='text' name='species' onChange={handleChange} value={formValues.species} />
                    </div>
                    <div>
                        <label>Water Frequency</label>
                        <select name='h2oFrequency' onChange={handleChange} value={formValues.h2oFrequency} >
                            <option value='daily'>Daily</option>
                            <option value='every-other-day'>Every Other Day</option>
                            <option value='twice-weekly'>Twice Weekly</option>
                            <option value='weekly'>Weekly</option>
                            <option value='bi-weekly'>Bi-Weekly</option>
                            <option value='Monthly'>Monthly</option>
                        </select>
                    </div>
                    <div>
                        <label>Care Instructions</label>
                        <input type='text' name='care-instructions' onChange={handleChange} value={formValues.careInstructions} />
                    </div>
                    <button onClick={handleSubmit}>Update Plant</button>
                </form>
            </div>
        </div>
    )
}

export default EditPlant;
