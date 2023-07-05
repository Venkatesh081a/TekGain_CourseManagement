import React, { useState } from "react";
import axios from "axios";
import "./Deactive.modules.css";
const Deactivate = () => {
  const initialValues = {
    courseId: "",
  };
  const [courseDeactivate, setCourseDeactivate] = useState(initialValues);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setCourseDeactivate({
      ...courseDeactivate,
      [e.target.name]: e.target.value,
    });
  };
  const deactivateCourse = async (DEACTIVE_URL) => {
    axios
      .delete(DEACTIVE_URL)
      .then((response) => {
        console.log(response.status);
      })
      .catch((e) => console.log("something went wrong!", e));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const DEACTIVE_URL =
      "http://localhost:9097/courses/course/deactivate/" +
      courseDeactivate.courseId;
    deactivateCourse(DEACTIVE_URL);
    if (!courseDeactivate.courseId) return;
    setMsg(`Course ${courseDeactivate.courseId} Deactivated Successfully`);
    console.log(courseDeactivate);
    setCourseDeactivate(initialValues);
  };
  return (
    <div class="main">
      <h3 class="text-light fs-3 m-2 ">Course Deactivate</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={courseDeactivate.courseId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Deactivate Course</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
};
export default Deactivate;
