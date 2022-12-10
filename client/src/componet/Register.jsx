import React from "react";
import { Link } from "react-router-dom";
import Inputs from "./Inputs";

function Register() {
  return (
    <div class="container p-4 mt-4">
      <div class="row justify-content-evenly mt-4">
        <div class="col-lg-6 col-md-12 mt-4">
          <div class="d-flex">
            <i class="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{" "}
            <h2>Register</h2>
          </div>
          <div
            class="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <form>
              <Inputs
                name="name"
                label="Name"
                type="text"
                icon="fa-solid fa-user"
              />
              <Inputs
                name="email"
                label="Email"
                type="text"
                icon="fa-solid fa-key"
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-user"
              />
              <Inputs
                name="confirm"
                label="Confirm password"
                type="text"
                icon="fa-solid fa-user"
              />
              <div class="d-flex justify-content-between">
                <button type="submit" class="btn btn-outline-primary">
                  Save <i class="fa-solid fa-floppy-disk"></i>
                </button>
                <Link to="/login">I have account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;