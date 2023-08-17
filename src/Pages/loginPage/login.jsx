import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Error500 } from "../../Components/errors/error500/Error500";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const submit = (data) => {
    console.log(errors);
    console.log(data);
    axios.post("http://localhost:9999/api/v1/login/getUser", data).then((data) => {
      setFormError('')
      localStorage.setItem('qwerty',data.data.userToken)
      if(data.data.adminToken!=null)
      {
        localStorage.setItem('shopify',data.data.adminToken)
        localStorage.setItem('uuid',true)
      }
      console.log(data);
      navigate("/")
    window.location.reload();
    
    }).catch((error) => {
      setFormError(error.response.data.message)
      if (error.response.status === 500)
          navigate('/error500')
        console.log(error);
    })
  }
  const ValidateSchema = {
    email: {
      required: {
        value: true,
        message: "Email is Required",
      },
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Email should be in proper format",
      },
    },
    password: {
      required: {
        value: true,
        message: "Passsword is required",
      },
    },
  };
  return (
    <>
      {/* react hook form use karjo na avde to me signup page ma use karelu che joi lejo */}
      {/* and ha tme email nu je karvana cho to ema generalize email ni api banavjo kmk forgot password ma bhi same email ni jarur padse etle api ekaj but khali template alag alag */}
      <div className="login__main">
        <div className="login__left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          obcaecati ipsum consequuntur pariatur voluptatum maiores fugiat quas
          aliquid, tempore dolore voluptatem nemo. Natus ab dolore voluptas aut
          quis labore fugiat omnis quasi
        </div>
        <div className="login__right">
          {formError}
          <form action="" method="post" onSubmit={handleSubmit(submit)}>
            <div className="email__main">
              <label htmlFor="email_id">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email_id"
                className="email"
                placeholder="Enter Your Mail"
                required=""
                {...register("email", ValidateSchema.email)}
              />
              {<span>{errors?.email?.message}</span>}
            </div>
            <div className="password__main">
              <label htmlFor="pswd">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="pswd"
                className="email"
                placeholder="Enter Your Password"
                required=""
                {...register("password", ValidateSchema.password)}
              />
              {<span>{errors?.password?.message}</span>}
            </div>
            <span>
              <Link to="forgotPassword" className="Forgot">
                forgot password
              </Link>
            </span>
            <span className="buttons">
              <button className="submit" type="submit">
                Submit
              </button>
              <button className="submit" type="reset">
                Reset
              </button>
            </span>
            <div>
              New Customer? <Link to="/signup">SignUp Now</Link> {" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
