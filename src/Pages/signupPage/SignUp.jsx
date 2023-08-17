import React, { useState } from "react";
import "./signup.css";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux'
import { addCity } from "../../redux/CitySlice";
import { addLocality, addLocation } from "../../redux/LocationSlice";
import { Dropdowns } from "../../Components/reusableForms/Dropdowns";
export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");
  const [passVisible, setPassVisible] = useState(true);
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState([]);
  const dispatch = useDispatch()
  const store = useSelector((state) => state)

  const submit = (data) => {
    console.log(errors);
    console.log(data);
    axios
      .post("http://localhost:9999/api/v1/signup/adduser", data)
      .then((data) => {
        console.log(data.data.data)
        localStorage.setItem('qwerty', data.data.data)
        navigate('/confirm')
        window.location.reload();
      })
      .catch((error) => {
        setFormError(error.response.data.message);
        console.log(error)
      });
  };


  const getCity = () => {
    if (store.city.value.length <= 0) {
      axios
        .get("http://localhost:9999/api/v1/city/getcity")
        .then((data) => {
          dispatch(addCity(data.data.data))
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getLocality = async (e) => {
    console.log(e)
    setCity(e)
    if (store.location.value.length <= 0) {
      axios.get("http://localhost:9999/api/v1/locality/getlocality").then((data) => {
        console.log(data)
        dispatch(addLocation({ locality: data.data.data, city: e }))
      })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getCity();
  }, []);


  const ValidationSchema = {
    firstName: {
      required: {
        value: true,
        message: "First Name Is required",
      },
      minLength: {
        value: 1,
        message: "should be minimum 1 length",
      },
    },
    lastName: {
      required: {
        value: true,
        message: "Last Name Is required",
      },
      minLength: {
        value: 1,
        message: "should be minimum 1 length",
      },
    },
    city: {
      required: {
        value: 'true',
        message: "City Is required",
      },
    },
    locality: {
      required: {
        value: true,
        message: "locality Is required",
      },
    },
    phoneNumber: {
      required: {
        value: true,
        message: "required",
      },
      pattern: {
        value: /^(0|91)?[6-9][0-9]{9}$/,
        message: "should be in correct format only",
      },
    },
    email: {
      required: {
        value: true,
        message: "required",
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
        message: "required",
      },
    },
  };

  return (
    <div>
      <>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@300&display=swap"
          rel="stylesheet"
        />
        <div className="register">
          <div className="login">
            <div className="content">
              <div className="signupc">
                <span>Sign Up</span>
                <p>
                  Lorem ipsum dolor sit amet, consect adielit integer imperd.
                </p>
              </div>
              <div className="signinc">
                <span>Sign In</span>
                <p>
                  Lorem ipsum dolor vestibu tortor purus, id tristi libero
                  tempus et.
                </p>
              </div>
            </div>
            {formError}
            <div className="inputs">
              <div className="signupi">
                <form className="formup" onSubmit={handleSubmit(submit)}>
                  <div>
                    <span className="material-icons">person</span>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      required=""
                      {...register("firstName", ValidationSchema.firstName)}
                    />
                    {<span>{errors?.firstName?.message}</span>}
                  </div>
                  <div>
                    <span className="material-icons">person</span>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required=""
                      name="lastName"
                      {...register("lastName", ValidationSchema.lastName)}
                    />
                    {<span>{errors?.lastName?.message}</span>}
                  </div>
                  <div>
                    <span className="material-icons">city</span>
                    {
                      console.log(store)
                    }
                    {/* <select
                      name="city"
                      {...register("city", ValidationSchema.city)}
                      onChange={getLocality}
                      required=""
                    >
                      <option >Select City</option>
                      {store.city?.value?.map((cities) => {
                        return (
                          <option value={cities._id}>{cities.cityName}</option>
                        );
                      })}
                    </select> */}
                    <Dropdowns fieldName="city" validations={ValidationSchema.city} firstFieldName="Select City" data={store.city} register={register} onChange={(selected) => { getLocality(selected) }} />
                    {<span>{errors?.city?.message}</span>}
                  </div>
                  <div>
                    <span className="material-icons">city</span>
                    <select
                      required=""
                      name="locality"
                      {...register("locality", ValidationSchema.locality)}
                    >
                      <option>Select Locality</option>
                      {store?.location?.value?.map((localities) => {
                        return (
                          localities.cityId._id == city ?
                            <option value={localities.localityName}>
                              {localities.localityName}
                            </option> : null
                        );
                      })}
                    </select>
                    {/* <Dropdowns fieldName="locality" validations={ValidationSchema.locality} firstFieldName="Select Locality" data={store?.location?.value?.filter((e)=>e.cityId._id==city)} register={register}/> */}
                    {<span>{errors?.locality?.message}</span>}
                  </div>
                  <div>
                    <span className="material-icons">person</span>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      required=""
                      name="phoneNumber"
                      {...register("phoneNumber", ValidationSchema.phoneNumber)}
                    />
                    {<span>{errors?.phoneNumber?.message}</span>}
                  </div>
                  <div>
                    <span className="material-icons">email</span>
                    <input
                      type="email"
                      placeholder="Your email"
                      required=""
                      name="email"
                      {...register("email", ValidationSchema.email)}
                    />
                    {<span>{errors?.email?.message}</span>}
                  </div>
                  <div>
                    <span className="material-icons">password</span>{" "}
                    <input
                      type="password"
                      minLength={5}
                      maxLength={15}
                      className="pswrdup"
                      placeholder="Your password"
                      required=""
                      name="password"
                      {...register("password", ValidationSchema.password)}
                    />
                    <i class="bi bi-eye-slash" id="togglePassword"></i>
                    {<span>{errors?.password?.message}</span>}
                    {/* <span className="material-icons visup" security='true' onclick={()=>passVisible ? setPassVisible(false) : setPassVisible(true)}>
                                            visibility
                                        </span> */}
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="b btn"
                      defaultValue="Sign Up"
                    />
                    <input
                      type="button"
                      className="btn"
                      defaultValue="Sign In"
                      value="Sign In"
                      onClick={() => navigate('/login')}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
