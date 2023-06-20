import React, { useState } from "react";
import "./ViewFeedback.modules.css";
const ViewFeedback = () => {
  const initialValues = {
    courseId: "",
  };
  const [viewFeedback, setViewFeedback] = useState(initialValues);
  const handleChange = (e) => {
    setViewFeedback({ ...viewFeedback, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!viewFeedback.courseId) return;
    console.log(viewFeedback);
    setViewFeedback(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2 ">View Course Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={viewFeedback.courseId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Get FeedBack</button>
      </form>
    </div>
  );
};
export default ViewFeedback;
