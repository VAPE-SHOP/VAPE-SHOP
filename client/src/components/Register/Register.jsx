import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Inputs from '../../componet/Inputs';
import axios from 'axios';
function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();
    axios
      .post('http://localhost:8080/user/signup', form)
      .then((response) => {
        alert(response.data.message);
        setTimeout(() => {
          setIsLoading(false);
          navigate('/login');
        }, 1000);
      })
      .catch((err) => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
  };
  return (
    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-6 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{' '}
            <h2>Register</h2>
          </div>
          <div
            className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: 'black' }}
          >
            <form onSubmit={onSubmitHandler}>
              <Inputs
                name="name"
                label="Name"
                type="text"
                icon="fa-solid fa-user"
                onChange={onChangeHandler}
              />
              <Inputs
                name="email"
                label="Email"
                type="text"
                icon="fa-solid fa-key"
                onChange={onChangeHandler}
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-user"
                onChange={onChangeHandler}
              />
              <Inputs
                name="confirm"
                label="Confirm password"
                type="text"
                icon="fa-solid fa-user"
                onChange={onChangeHandler}
              />
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">
                  Save <i className="fa-solid fa-floppy-disk"></i>
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
