import "./home.css";
import Carousel from "../../Components/Carousel";
import Homeservice from "../../Components/Homeservice";
import Testimonial from "../../Components/Testimonial";

import { testimonial } from "../../data";
import { carousel } from "../../data";
import React from "react";
import Navbar from "../../Components/Navbar";
const Home = () => {
  return (
    <>
    <section>
      <Carousel images={carousel}></Carousel>
    {/* {
      carousel.map(({id,image,title})=>{
        return <Carousel img={image} caption={title}/>
      })
    } */}
    </section>
      <Homeservice />
      {/* <Carousel /> */}
      <h1 className="text-center mt-5"> TESTIMONIALS </h1>
      <section className="testimonials container">
        {
        testimonial.map(({ id, icon, title, desc })=> {
          return <Testimonial Image={icon} title={title} key={id} desc={desc}/>
        }
         )

        }
      </section>
        {/* <link rel="stylesheet" to='/r' />Register  your business */}
    </>
  );
};

export default Home;
