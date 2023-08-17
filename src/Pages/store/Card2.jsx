import React from "react";
import "./Card.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const sUrl = "http://localhost:9999/api/v1/businessform//getAllbusinessdata";

const Card2 = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(sUrl).then((response) => {
      setPost(response.data.data);
    });
  }, []);
  const navigate = useNavigate();
  const buttonClick = (id) => {
    console.log("heelo", id);
    navigate("/demo2",{state:{value:id}});
  };
  return (
    <>
      {console.log(post)}
      {/* {console.log(sData)} */}
      <h1>{post.brandName}</h1>
      <div class="cbody">
        <div class="wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <div class="card mx-30">
                  {post.map((e) => {
                    return (
                      <div class="card-body">
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card2;
