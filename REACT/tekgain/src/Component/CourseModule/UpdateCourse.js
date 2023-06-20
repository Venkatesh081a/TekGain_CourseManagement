import React, { useState } from "react";
import "./UpdateCourse.modules.css";
const UpdateCourse = () => {
  const initialValues = {
    courseId: "",
    updateFee: "",
  };
  const [updateCourse, setUpdateCourse] = useState(initialValues);
  const handleChange = (e) => {
    setUpdateCourse({ ...updateCourse, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updateCourse.courseId && !updateCourse.updateFee) return;
    console.log(updateCourse);
    setUpdateCourse(initialValues);
  };

  return (
    <div>
      <h3 class="text-light fs-3 p-2 m-2">Update Course Fee</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={updateCourse.courseId}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="div-ele">
          <label className="label">Update Fee</label>
          <input
            className="input-box"
            type="text"
            name="updateFee"
            value={updateCourse.updateFee}
            onChange={handleChange}
          />
        </div>

        <br />
        <button class="btn btn-danger m-2">Update Course</button>
      </form>
    </div>
  );
};
export default UpdateCourse;
