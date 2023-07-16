import React, { useState } from "react";
import { makePayment } from "../Service/AdmissionService";
import "../App.css";

function MakePayment() {
  //  Create state variableas and event handing functions
  const initialValues = {
    registrationId: "",
    courseId: "",
    associateId: "",
    fee: "",
  };
  const [makePayment, setMakePayment] = useState(initialValues);
  const [msg, setMsg] = useState("");

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
    makePayment(makePayment.registrationId, makePayment.fee);
    setMsg("Payment Successful");
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
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
}
export default MakePayment;
