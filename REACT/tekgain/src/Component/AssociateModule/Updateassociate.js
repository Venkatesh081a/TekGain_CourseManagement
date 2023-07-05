import React, { useState } from "react";
import axios from "axios";
import "./Updateassociate.modules.css";
const Updateassociate = () => {
  const initialValues = {
    associateId: "",
    updateEmailId: "",
  };
  const [updateAss, setUpdateAss] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const handleChange = (event) => {
    setUpdateAss({ ...updateAss, [event.target.name]: event.target.value });
  };
  const upDateAssociate = async (UPDATE_ASSOCIATE_URL) => {
    axios
      .put(UPDATE_ASSOCIATE_URL)
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
    const UPDATE_ASSOCIATE_URL =
      "http://localhost:9098/associate/updateAssociateEmailId/" +
      updateAss.associateId +
      "/" +
      updateAss.updateEmailId;
    upDateAssociate(UPDATE_ASSOCIATE_URL);
    if (!updateAss.associateId && !updateAss.updateEmailId) return;
    setMsg("Associate emailId updated successfully");
    console.log(updateAss);
    setUpdateAss(initialValues);
  };

  return (
    <div>
      <h3 class="text-light fs-3 p-2 m-2">Update Associate Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={updateAss.associateId}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-ele">
          <label className="label">Update EmailId</label>
          <input
            className="input-box"
            type="text"
            name="updateEmailId"
            value={updateAss.updateEmailId}
            onChange={handleChange}
          />
        </div>
        <br />

        <button class="btn btn-danger m-2">Update EmailId</button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
};
export default Updateassociate;
