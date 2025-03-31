import { Fragment, useState } from "react";
import "./Login.modules.css";

const Login = ({ setIsLoggedIn }) => {
  const initialValues = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    //e.preventDeafult();
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");

    if (!user.username && !user.password) return;

    setUser(initialValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-element">
          <label className="label">UserName </label>
          <input
            className="input-box"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-element">
          <label className="label">Password </label>
          <input
            className="input-box"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <br />
        <button class="btn btn-danger m-2">Login</button>
      </form>
    </>
  );
};
export default Login;
