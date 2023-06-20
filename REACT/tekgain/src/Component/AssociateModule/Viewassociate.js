import React, { useState } from "react";
const Viewassociate = () => {
  const initialValues = {
    associateId: "",
  };
  const [viewAssociate, setViewAssociate] = useState(initialValues);

  const handleChange = (e) => {
    setViewAssociate({ ...viewAssociate, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!viewAssociate.associateId) return;
    console.log(viewAssociate);
    setViewAssociate(initialValues);
  };
  return (
    <div>
      <h3 class="text-light fs-3 m-2">View Associate By Associate Id</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-ele">
          <label className="label">Associate Id </label>

          <input
            className="input-box"
            type="text"
            name="associateId"
            value={viewAssociate.associateId}
            onChange={handleChange}
          />
        </div>
        <br />

        <button class="btn btn-danger m-2">Get Details</button>
      </form>
    </div>
  );
};
export default Viewassociate;
