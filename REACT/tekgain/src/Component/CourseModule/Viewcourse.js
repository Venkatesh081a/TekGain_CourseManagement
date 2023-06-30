import React, { useState } from "react";
import "./Viewcourse.modules.css";
const ViewCourse = () => {
  const initialValues = {
    courseId: "",
  };
  const [ViewCourse, setViewCourse] = useState(initialValues);

  const handleChange = (e) => {
    setViewCourse({ ...ViewCourse, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ViewCourse.courseId) return;
    console.log(ViewCourse);
    setViewCourse(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2">View Course By Id</h3>
      <form onSubmit={handleSubmit}>
        <div className="div-ele">
          <label className="label">Course Id </label>

          <input
            className="input-box"
            type="text"
            name="courseId"
            value={ViewCourse.courseId}
            onChange={handleChange}
          />
        </div>

        <br />
        <button class="btn btn-danger m-2">View Course</button>
      </form>
      <div className="table-container">
        <table className="table">
          <tr>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Course Type</th>
            <th>Fees</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>C102</td>
            <td>Python</td>
            <td>4</td>
            <td>Full time</td>
            <td>2000</td>
            <td>4</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default ViewCourse;
