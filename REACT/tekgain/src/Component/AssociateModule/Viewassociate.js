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
      <div className="table-container">
        <table className="table">
          <tr>
            <th>Associate Id</th>
            <th>Associate Name</th>
            <th>Associate EmailId</th>
            <th>Associate Address</th>
          </tr>
          <tr>
            <td>C102</td>
            <td>Python</td>
            <td>4</td>
            <td>Full time</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Viewassociate;
