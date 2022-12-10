import React,{useState} from 'react';
import axios from 'axios'; 
import Inputs from '../../../componet/Inputs';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  console.log(form,"<------->");

  //User signin
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    
    event.preventDefault();
    axios
      .post("http://localhost:8080/user/login", form)
      .then((response) => {
        console.log('====================================');
       alert(response.data.message)
        console.log('====================================');
        const token = response.data.token;
        // Save token to localStorage
        localStorage.setItem("user-token", JSON.stringify(token));
        localStorage.setItem("role", JSON.stringify(response.data.role));

        window.location.reload(false);
     
       
      })
      .catch((err) => {
        setErrors(err.response.data);
      });
    }
  
  
  
  return(  
  
  
  
    <div class="container p-4 mt-4">
      <div class="row justify-content-evenly mt-4">
        <div class="col-lg-6 col-md-12 mt-4">
          <div class="d-flex">
            <i class="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{" "}
            <h2>Login</h2>
          </div>
          <div
            class="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <form onSubmit={onSubmitHandler}> 
              <Inputs
                name="email"
                label="Email"
                type="text"
                icon="fa-solid fa-key"
                errors={errors.email}
                onChange={onChangeHandler}
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-user"
                errors={errors.password}
                
                onChange={onChangeHandler}
              />
              <div class="d-flex justify-content-between">
                <button type="submit" class="btn btn-outline-primary">
                  Save <i class="fa-solid fa-floppy-disk"></i>
                </button>
                <Link to="/register">I don't have account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>)
};

export default Login;
