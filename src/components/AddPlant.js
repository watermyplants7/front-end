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

export default AddPlant;
