import React, { useState } from "react";
//import './ViewFeedbacktracking.modules.css'
const ViewFedbacktracking = () => {
  const initialValues = {
    courseId: "",
  };
  const [viewFeedBack, setViewFeedback] = useState(initialValues);
  const handleChange = (e) => {
    setViewFeedback({ ...viewFeedBack, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!viewFeedBack.courseId) return;
    console.log(viewFeedBack);
    setViewFeedback(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2">Course FeedBack Rating</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={viewFeedBack.courseId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Submit</button>
      </form>
    </div>
  );
};
export default ViewFedbacktracking;
