import React from "react";
// import img1 from "../../Images/Shaving.png";
import "./Card.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Store } from "./Store";
import { useNavigate } from "react-router-dom";
const sUrl = "http://localhost:9999/api/v1/businessform/getAllbusinessdata";

const Card1 = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(sUrl).then((response) => {
      setPost(response.data.data);
    });
  }, []);
  const navigate = useNavigate();
  const buttonClick = (id) => {
    console.log("heelo", id);
    navigate("/servicedemo",{state:{value:id}});
  };
  return (
    <>
      {console.log(post)}
      {/* {console.log(sData)} */}
      <h1>{post.brandName}</h1>
      <div class="cbody1">
        <div class="wrapper">
          <div class="container-fluid ">
            {/* <div class="row w-100"> */}
              <div class="rowdf ">
                {/* <div class="card col"> */}
                {/* col col-md-6 col-lg-6 col-xl-6 */}
                {/* mx-30 */}
                <div className=" row">
                  {post.map((e) => {
                    return (
                      <div className="card col col-md-6 col-lg-3 col-xl-4 col-sm-12">
                      <div class="card-body  ">
                        <img src={e.logo} class="card-img-top" alt="..." />
                        <h5 class="card-title">{e.brandName}</h5>
                        <h6>
                          <h6>Rating: </h6>
                          <h6>Gender Served: {e.genderServed}</h6>
                          <h6>Locality: {e.locality}</h6>
                          <h6>
                            Working Hours: {e.openingTime} to {e.closingTime}
                          </h6>
                          Address: {e.address}
                        </h6>
                        <p class="card-text">Lorem .</p>
                        <button
                          onClick={() => {
                            buttonClick(e._id);
                          }}
                        >
                          button
                        </button>
                      </div>
                      </div>
                    );
                  })}
                {/* </div> */}
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card1;
