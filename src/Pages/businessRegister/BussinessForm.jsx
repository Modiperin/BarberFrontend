import React, { useEffect, useState } from "react";
import "./Businessform.css";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AdminHomePage } from "../AdminHomePage/AdminHomePage";
import { Error500 } from "../../Components/errors/error500/Error500";

// import Formstep3 from "../../Components/Formstep3";

const BussinessForm = () => {
  const [token, setToken] = useState({});
  const [city, setCity] = useState([]);
  const [locality, setLocality] = useState([]);
  const navigate = useNavigate();
  const checkToken = () => {
    console.log(localStorage.getItem('uuid'))
    if (localStorage.getItem('uuid')) {
      navigate('/adminhomepage')
    }
    if (localStorage.getItem("qwerty") != null) {
      var decoded = jwt_decode(localStorage.getItem("qwerty"))
      setToken(decoded);
      console.log(decoded.role)
    }
    else {
      navigate('/')
    }
    // if(jwt_decode(localStorage.getItem("shopify")).role=='admin')
    // {
    //   navigate('/adminhomepage')
    // }
  };

  const getCity = () => {
    axios
      .get("http://localhost:9999/api/v1/city/getcity")
      .then((data) => {
        setCity(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLocality = (e) => {
    console.log(e.target.value);
    axios
      .get("http://localhost:9999/api/v1/locality/getbyspecificcity/" + e.target.value)
      .then((data) => {
        console.log(data.data.data);
        setLocality(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    checkToken();
    getCity();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      console.log(token)
      return ({
        ownerName: token.fullName,
        email: token.email
      })
    }

  });

  const ValidationSchema = {
    brandName: {
      required: {
        value: true,
        message: "Brand's Name Is Required",
      },
    },
    ownerName: {
      required: {
        value: true,
        message: "OWner's Name Is Required",
      },
    },
    genderServed: {
      required: {
        value: true,
        message: "WHICH GENDER U SERVED",
      },
    },
    email: {
      required: {
        value: true,
        message: "Email Is Required",
      },
    },
    contactNumber: {
      required: {
        value: true,
        message: "Required",
      },
      pattern: {
        value: /^(0|91)?[6-9][0-9]{9}$/,
        message: "Should be in correct format only",
      },
    },
    locality: {
      required: {
        value: true,
        message: "locality is Required",
      },
    },
    city: {
      required: {
        value: true,
        message: "City is Required",
      },
    },
    address: {
      required: {
        value: true,
        message: "Address is Required",
      },
    },
    openingTime: {
      required: {
        value: true,
        message: "openingtime is Required",
      },
    },
    closingTime: {
      required: {
        value: true,
        message: "closingtime is Required",
      },
    },
  };
  const [formError, setFormError] = useState("");
  const submit = (data) => {
    console.log("HERE ISDATA");
    console.log(errors);
    console.log(data);
    const formData = new FormData();
    var keys = Object.keys(data);
    keys?.map((e) => {
      if (data[e] instanceof FileList) {
        console.log(e, data[e][0]);
        formData.append("file", data[e][0]);
      } else formData.append(e, data[e]);
    });
    axios
      .post("http://localhost:9999/api/v1/businessform/addstore", formData, {
        headers: {
          token: localStorage.getItem('qwerty')
        }
      })
      .then((data) => {
        console.log("SUCCESS");
        console.log(data);
        localStorage.setItem('shopify', data.data.data)
        localStorage.setItem('uuid', true)
        navigate('/admindashboard')
      })
      .catch((error) => {
        setFormError(error.response.data.message);
        if (error.response.status === 500)
          // <Error500/>
        console.log(error);
      });
  };

  return (
    <>
      <h1>HELLO</h1>
      <h2 style={{ color: "red" }}>{formError}</h2>
      <form
        onSubmit={handleSubmit(submit)}
        className="container"
        encType="multipart/form-data"
      >
        <h2>Personal Information</h2>
        <div className="part__one">
          <input
            type="text"
            name="brandName"
            id="brand_name"
            placeholder={`name of your brand `}
            {...register("brandName", ValidationSchema.brandName)}
          />
          {<span style={{ color: "red" }}>{errors?.brandName?.message}</span>}
          <input
            type="text"
            name="ownerName"
            defaultValue={token.fullName}
            id="ownername"
            placeholder="ownername"
            {...register("ownerName", ValidationSchema.ownerName)}
          />
          {<span style={{ color: "red" }}>{errors?.ownerName?.message}</span>}
          <select {...register("genderServed", ValidationSchema.genderServed)}>
            <option value="Unisex">Unisex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {<p style={{ color: "red" }}>{errors?.genderServed?.message}</p>}
          <select {...register("storeType")}>
            <option value="SPA">SPA</option>
            <option value="Salon">Salon</option>
            <option value="Parlour">Parlour</option>
          </select>
          {<p style={{ color: "red" }}>{errors?.genderServed?.message}</p>}
        </div>
        <div className="part__two">
          <input
            type="email"
            name="email"
            defaultValue={token.email}
            id="email"
            placeholder="Email"
            {...register("email", ValidationSchema.email)}
          />
          {<div style={{ color: "red" }}>{errors?.email?.message}</div>}
        </div>
        <div className="part__three">
          <p>
            <label htmlFor="ContactNumber">Contact Number</label>
            <input
              type="number"
              name="ContactNumber"
              id="contact"
              placeholder="Contact Number"
              {...register("contactNumber", ValidationSchema.contactNumber)}
            />
            {
              <span style={{ color: "red" }}>
                {errors?.contactNumber?.message}
              </span>
            }
          </p>
        </div>
        <h2>Address Info</h2>
        <div className="part__address">
          <select
            name="city"
            {...register("city", ValidationSchema.city)}
            onChange={getLocality}
            required=""
          >
            <option>Select City</option>
            {city?.map((cities) => {
              return <option value={cities._id}>{cities.cityName}</option>;
            })}
          </select>
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
            {locality?.map((localities) => {
              return (
                <option value={localities.localityName}>
                  {localities.localityName}
                </option>
              );
            })}
          </select>
          <p>
            <textarea
              name="address"
              id="fulladdress"
              cols="30"
              rows="10"
              placeholder="Enter Full Address"
              {...register("address", ValidationSchema.address)}
            ></textarea>
            {<span style={{ color: "red" }}>{errors?.address?.message}</span>}
          </p>
        </div>
        <h2>Profile Information</h2>
        <div className="part__four">
          <p className="left">
            <label htmlFor="openning_time">
              opening time <span className="red-star">*</span>
            </label>
            <input
              type="time"
              name="openingtime"
              id="openning_time"
              className="time"
              {...register("openingTime", ValidationSchema.openingTime)}
            />
            {
              <span style={{ color: "red" }}>
                {errors?.openingTime?.message}
              </span>
            }
          </p>
          <p className="right">
            <label htmlFor="closing_time">
              Closing Time <span className="red-star">*</span>
            </label>
            <input
              type="time"
              name="closingtime"
              id="closing_time"
              className="time"
              {...register("closingTime", ValidationSchema.closingTime)}
            />
            {
              <span style={{ color: "red" }}>
                {errors?.closingTime?.message}
              </span>
            }
          </p>
        </div>
        <div className="days">
          <input
            type="checkbox"
            name="days"
            checked
            value="Monday"
            {...register("daysOpen")}
          />
          <label htmlFor="day1">Monday</label>
          <input
            type="checkbox"
            name="days"
            checked
            value="Tuesday"
            {...register("daysOpen")}
          />
          <label htmlFor="day2">Tuesday</label>

          <input
            type="checkbox"
            name="days"
            checked
            value="Wednesday"
            {...register("daysOpen")}
          />
          <label htmlFor="day3">Wednesday</label>
          <input
            type="checkbox"
            name="days"
            checked
            value="Thursday"
            {...register("daysOpen")}
          />
          <label htmlFor="day4">Thursday</label>
          <input
            type="checkbox"
            name="days"
            checked
            value="Friday"
            {...register("daysOpen")}
          />
          <label htmlFor="day5">Friday</label>
          <input
            type="checkbox"
            name="days"
            checked
            value="Saturday"
            {...register("daysOpen")}
          />
          <label >Saturday</label>
          <input
            type="checkbox"
            name="days"
            checked='true'
            value="Sunday"
            {...register("daysOpen")}
          />
          <label htmlFor="day7">Sunday</label>
        </div>
        <div className="amenities">
          <input type="checkbox" name="" id="cctv" value="cctv" />
          <label htmlFor="cctv">CCTV</label>
          <input
            type="checkbox"
            name=""
            id="card_payment"
            value="card payment"
          />
          <input type="checkbox" name="" id="parking" value="parking" />
          <label htmlFor="parking">parking</label>
          <input type="checkbox" name="" id="tv" value="TV" />
          <label htmlFor="tv">TV</label>
          <input type="checkbox" name="" id="ac" value="AC" />
          <label htmlFor="ac">AC</label>
          <input type="checkbox" name="" id="wifi" value="Wifi" />
          <label htmlFor="wifi">Wifi</label>
        </div>
        <div>
          <input
            type="file"
            name="banner"
            id="banner"
            {...register("banner")}
          />
          <input type="file" name="logo" id="logo" {...register("logo")} />
          <input
            type="file"
            name="certificate"
            id="certificate"
            {...register("certificate")}
          />
        </div>
        {console.log(token)}
        <input type="submit" value="submit" className="btn" />
      </form>
    </>
  );
};

export default BussinessForm;
