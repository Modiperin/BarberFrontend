import React, { useState } from "react";
import './Carousel.css'
import {BiSolidLeftArrow,BiSolidRightArrow} from 'react-icons//bi';
import Image1 from "../Images/salon1.png";

const Carousel = ({images}) => {
  const img=images;
  const [currImg,setCurrImg]=useState(0);
  return (
    <>
      <div className="carousel">

        <div className="carousel__item"
        style={{backgroundImage:`url(${images[currImg].image})`}}
        >1
        <div className="left" onClick={()=>{currImg>0 && setCurrImg(currImg-1)}}>
            <BiSolidLeftArrow/>
          </div>
          <div className="caption">
            <p>
            {
              images[currImg].title
            }
            </p>
          </div>
          <div className="right"
          onClick={()=>{currImg<img.length-1 && setCurrImg(currImg+1)}}
          >
          <BiSolidRightArrow/>
            </div>
          {/* <div className="carousel__image ">
            <img src={img} alt="image1" />
          </div> */}
        </div>
        
      </div>
      
          </>
  );
};

export default Carousel;
