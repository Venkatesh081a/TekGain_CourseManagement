import React, { useState } from "react";
const Viewassociate = () => {
  const initialValues = {
    associateId: "",
  };
  const [viewAssociate, setViewAssociate] = useState(initialValues);

  const [isbuttonEnable, setIsButtonEnable] = useState(false);
  let associateData = {
    associateId: "",
    associateName: "",
    associateAddress: "",
    associateEmailId: "",
  };
  const [initialAssociateData, setIntialAssociateData] =
    useState(associateData);
  const handleButtonClick = () => {
    setIsButtonEnable((currentState) => !currentState);
  };

  const handleChange = (e) => {
    setViewAssociate({ ...viewAssociate, [e.target.name]: e.target.value });
  };
  const getAssociateData = async (ASSOCIATE_URL) => {
    let response = await fetch(ASSOCIATE_URL);
    let associate = await response.json();
    // associateData = {
    //   ...associate,
    // };
    setIntialAssociateData(associate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ASSOCIATE_URL =
      "http://localhost:9098/associate/viewAssociate/" +
      viewAssociate.associateId;
    getAssociateData(ASSOCIATE_URL);

    if (!viewAssociate.associateId) return;
    console.log(viewAssociate.associateId);
    console.log(viewAssociate);
    setViewAssociate(initialValues);
  };
  console.log("Associate Email" + initialAssociateData.associateEmailId);
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

        <button class="btn btn-danger m-2" onClick={handleButtonClick}>
          Get Details
        </button>
      </form>
      {isbuttonEnable && (
        <div className="table-container">
          <table className="table">
            <tr>
              <th>Associate Id</th>
              <th>Associate Name</th>
              <th>Associate EmailId</th>
              <th>Associate Address</th>
            </tr>
            <tr>
              <td>{initialAssociateData.associateId}</td>
              <td>{initialAssociateData.associateName}</td>
              <td>{initialAssociateData.associateEmailId}</td>
              <td>{initialAssociateData.associateAddress}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};
export default Viewassociate;
