import React, { useState } from "react";
import "./AssociateRegistration.modules.css";
const AssociateRegistration = () => {
  const initialValues = {
    courseId: "",
    associateId: "",
  };
  const [asscoiatReg, setAssociateReg] = useState(initialValues);
  const handleChange = (e) => {
    setAssociateReg({ ...asscoiatReg, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!asscoiatReg.courseId && !asscoiatReg.associateId) return;
    console.log(asscoiatReg);
    setAssociateReg(initialValues);
  };
  return (
    <div>
      <div>
        <h3 class="text-light fs-3 m-2 ">Associate Registration Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-ele">
            <label className="label">Course Id </label>
            <input
              className="input-box"
              type="text"
              name="courseId"
              value={asscoiatReg.courseId}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="input-ele">
            <label className="label">Associate Id </label>
            <input
              className="input-box"
              type="text"
              name="associateId"
              value={asscoiatReg.associateId}
              onChange={handleChange}
            />
          </div>
          <br />
          <button class="btn btn-danger m-2">Register Now</button>
        </form>
      </div>
    </div>
  );
};
export default AssociateRegistration;
