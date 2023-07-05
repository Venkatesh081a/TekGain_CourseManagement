import React, { useState } from "react";
import axios from "axios";
import "./UpdateCourse.modules.css";
const UpdateCourse = () => {
  const initialValues = {
    courseId: "",
    updateFee: "",
  };
  const [updateCourse, setUpdateCourse] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setUpdateCourse({ ...updateCourse, [e.target.name]: e.target.value });
  };
  const upDateCourse = async (UPDATE_COURSE_URL) => {
    axios
      .put(UPDATE_COURSE_URL)
      .then((response) => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const UPDATE_COURSE_URL =
      "http://localhost:9097/courses/course/update/" +
      updateCourse.courseId +
      "/" +
      updateCourse.updateFee;
    upDateCourse(UPDATE_COURSE_URL);
    if (!updateCourse.courseId && !updateCourse.updateFee) return;
    setMsg("Course Updated Successfully");
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
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
};
export default UpdateCourse;
