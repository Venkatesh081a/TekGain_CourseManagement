import React, { useState } from "react";
import "./Makepayment.modules.css";
const Makepayment = () => {
  const initialValues = {
    registrationId: "",
    courseId: "",
    associateId: "",
    fee: "",
  };
  const [makePayment, setMakePayment] = useState(initialValues);
  const handleChange = (e) => {
    setMakePayment({ ...makePayment, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !makePayment.registrationId &&
      !makePayment.courseId &&
      !makePayment.associateId
    )
      return;
    console.log(makePayment);
    setMakePayment(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">Make Payment For Registered Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Registration Id </label>
          <input
            className="input-box"
            type="text"
            name="registrationId"
            value={makePayment.registrationId}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={makePayment.courseId}
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
            value={makePayment.associateId}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-ele">
          <label className="label">Fees </label>
          <input
            className="input-box"
            type="text"
            name="fee"
            value={makePayment.fee}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Pay Now</button>
      </form>
    </div>
  );
};
export default Makepayment;
