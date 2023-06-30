/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import Course from "../CourseModule/Course";
import Associate from "../AssociateModule/Associate";
import Admission from "../AdmissionModule/Admission";
import Login from "../Login/Login";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <>
      <>
        <Router>
          <div class="text-center">
            <nav class="navbar navbar-expand-lg bg-dark ">
              <div class="container-fluid">
                <a class="navbar-brand text-danger fs-3" href="#">
                  TekGain
                </a>
              </div>
              <form class="d-flex">
                {/* Use Link components for navigation */}
                <button class="btn btn-info  me-2 " type="button">
                  <Link to="/Course" class="text-dark text-decoration-none">
                    Course
                  </Link>
                </button>
                &nbsp;
                <button class="btn btn-info  me-2" type="button">
                  <Link
                    to="/Association"
                    class="text-dark text-decoration-none"
                  >
                    Association
                  </Link>
                </button>
                &nbsp;
                <button class="btn btn-info  me-2" type="button">
                  <Link to="/Admission" class="text-dark text-decoration-none">
                    Admission
                  </Link>
                  &nbsp;
                </button>
              </form>
            </nav>

            <Switch>
              {/* Define routes for your components */}
              <Route exact path="/login">
                {isLoggedIn ? (
                  <Redirect to="/" />
                ) : (
                  <Login setIsLoggedIn={setIsLoggedIn} />
                )}
              </Route>
              <Route exact path="/Course">
                {isLoggedIn ? <Course /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/Association">
                {isLoggedIn ? <Associate /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/Admission">
                {isLoggedIn ? <Admission /> : <Redirect to="/login" />}
              </Route>
              {/* <Route path="/Course" exact component={Course} />
              <Route path="/Association" exact component={Associate} />
              <Route path="/Admission" exact component={Admission} /> */}
            </Switch>
          </div>
        </Router>
      </>
    </>
  );
};
export default Navbar;
