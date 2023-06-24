import React, { useState } from "react";
import "./HighestFeeDetails.modules.css";
const HighestFeeDetails = () => {
  const initialValues = {
    associateId: "",
  };
  const [highestFee, setHighestFee] = useState(initialValues);
  const handleChange = (e) => {
    setHighestFee({ ...highestFee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!highestFee.associateId) return;
    console.log(highestFee);
    setHighestFee(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">Associate Highest Fee</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={highestFee.associateId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
      </form>
    </div>
  );
};
export default HighestFeeDetails;
