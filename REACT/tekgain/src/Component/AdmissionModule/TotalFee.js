import React, { useState } from "react";
import "./TotalFee.modules.css";
const TotalFee = () => {
  const initialValues = {
    associateId: "",
  };
  const [totalFee, setTotalFee] = useState(initialValues);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setTotalFee({ ...totalFee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!totalFee.associateId) return;
    setMsg("Total Fee:");
    console.log(totalFee);
    setTotalFee(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">Total Fee Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={totalFee.associateId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
};
export default TotalFee;
