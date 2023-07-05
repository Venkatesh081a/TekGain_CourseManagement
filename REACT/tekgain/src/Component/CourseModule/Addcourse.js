import React, { useState } from "react";
import axios from "axios";

import "./Addcourse.modules.css";

const Addcourse = () => {
  const initialValues = {
    courseId: "",
    courseName: "",
    fees: "",
    durationInMonths: "",
    courseType: "",
  };

  const [addUser, setAddUser] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setAddUser({ ...addUser, [e.target.name]: e.target.value });
  };
  const postAddCourse = async (ADDCOURSE_URL, post) => {
    try {
      const response = await axios.post(ADDCOURSE_URL, post);
      console.log(response.data);
      if (response.data) {
        setMsg("Course has been added Successfully");
      }
    } catch (e) {
      setMsg("Something Went Wrong,Please check it ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ADDCOURSE_URL = "http://localhost:9097/courses/course/addCourse";
    const post = {
      courseName: addUser.courseName,
      fees: addUser.fees,
      duration: addUser.durationInMonths,
      courseType: addUser.courseType,
    };
    postAddCourse(ADDCOURSE_URL, post);

    if (
      !addUser.courseId &&
      !addUser.courseName &&
      !addUser.fees &&
      !addUser.durationInMonths &&
      !addUser.courseType
    )
      return;
    console.log(addUser);
    //setMsg("Course Added Successfully");
    setAddUser(initialValues);
  };
  return (
    <div className="">
      <h3 class="text-light fs-3 p-3">Addcourse</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-element">
          <label className="label">Course Id </label>
          <input
            className="input-box"
            type="text"
            name="courseId"
            value={addUser.courseId}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-element">
          <label className="label">Course Name </label>
          <input
            className="input-box"
            type="text"
            name="courseName"
            value={addUser.courseName}
            onChange={handleChange}
          />
        </div>
        <br />

        <div class="input-element">
          <label className="label">Fees</label>
          <input
            className="input-box"
            type="text"
            name="fees"
            value={addUser.fees}
            onChange={handleChange}
          />
        </div>

        <br />

        <div className="input-element">
          <label className="label">Duration In Months</label>
          <input
            className="input-box"
            type="text"
            name="durationInMonths"
            value={addUser.durationInMonths}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-element">
          <label className="label">Course Type</label>
          <input
            className="input-box"
            type="text"
            name="courseType"
            value={addUser.courseType}
            onChange={handleChange}
          />
        </div>

        <br />
        <button class="btn btn-danger m-2">Add course</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
};
export default Addcourse;
