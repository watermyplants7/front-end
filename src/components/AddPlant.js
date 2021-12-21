<<<<<<< HEAD
import React, { useState } from 'react';

const AddPlant = () => {
    const initialValues = {
        photo: '',
        nickname: '',
        species: '',
        h2oFrequency: '',
        careInstructions: ''
    }

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // API post call here
        // Notification on successful post
        setFormValues(initialValues);
    }

    return (
        <div>
            <div className='plant-form-container'>
                <h2>Add a New Plant</h2>
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
                    <button onClick={handleSubmit}>Add Plant</button>
                </form>
            </div>
        </div>
    )
}
=======
import React from "react";

const AddPlant = () => {
  return (
    <div>
      <div className="plant-form-container">
        <h2>Add a New Plant</h2>
        <form className="plant-form">
          <div>
            <label>Photo URL (Optional)</label>
            <input type="text" name="photo" />
          </div>
          <div>
            <label>Nickname</label>
            <input type="text" name="nickname" />
          </div>
          <div>
            <label>Species</label>
            <input type="text" name="species" />
          </div>
          <div>
            <label>Water Frequency</label>
            <select>
              <option value="daily">Daily</option>
              <option value="every-other-day">Every Other Day</option>
              <option value="twice-weekly">Twice Weekly</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div>
            <label>Care Instructions</label>
            <input type="text" name="care-instructions" />
          </div>
          <button>Add Plant</button>
        </form>
      </div>
    </div>
  );
};
>>>>>>> 1d2433f807bfed46b75545276135363829af87c4

export default AddPlant;
