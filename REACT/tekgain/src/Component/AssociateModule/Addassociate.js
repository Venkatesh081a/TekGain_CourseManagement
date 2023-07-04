import React, { useState } from "react";
import "./Addassociate.modules.css";
const Addassociate = () => {
  const initialValues = {
    associateId: "",
    name: "",
    address: "",
    emailId: "",
  };
  const [addAssociate, setAddAssociate] = useState(initialValues);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setAddAssociate({ ...addAssociate, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !addAssociate.associateId &&
      !addAssociate.name &&
      !addAssociate.address &&
      !addAssociate.emailId
    )
      return;
    setMsg("Associate has been added Successfully");
    console.log(addAssociate);
    setAddAssociate(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 p-3">Add Associate Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>
          <input
            className="input-box"
            type="text"
            name="associateId"
            value={addAssociate.associateId}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-ele">
          <label className="label">Name </label>
          <input
            className="input-box"
            type="text"
            name="name"
            value={addAssociate.name}
            onChange={handleChange}
          />
        </div>
        <br />

        <div class="input-ele">
          <label className="label">Address</label>
          <input
            className="input-box"
            type="text"
            name="address"
            value={addAssociate.address}
            onChange={handleChange}
          />
        </div>

        <br />

        <div className="input-ele">
          <label className="label">Email Id</label>
          <input
            className="input-box"
            type="text"
            name="emailId"
            value={addAssociate.emailId}
            onChange={handleChange}
          />
        </div>
        <br />

        <br />
        <button class="btn btn-danger m-2">Add </button>
        <p className="msg">{msg}</p>
      </form>
    </div>
  );
};
export default Addassociate;
