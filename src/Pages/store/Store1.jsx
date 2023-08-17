import React from "react";
import "./Store1.css";
import Footer from "../../Components/Footer";
// import Card2 from "./Card2";
import Testimonial from "../../Components/Testimonial";
import img from "../../Images/beauty_parlour.png"
import { Left } from "./Left";
import Right from "./Right";
import { useLocation } from "react-router-dom";

export const Store1 = () => {
    const location = useLocation()
    const value = location.state?.value
    console.log(value)
    // console.log(location)
    return (
        <>
            <section className="stores">
                <Left />
                <Right />
            </section>
            <h2 style={{ textAlign: "center" }}>SERVICE SECTION</h2>
            <h6 style={{ textAlign: "center" }}>(Inside Card, display service details including name, description and time.)</h6>
            <h2 style={{ textAlign: "center" }}>EMPLOYEE SECTION</h2>
            <h6 style={{ textAlign: "center" }}>(Inside Card, display employee details including name and specialization.)</h6>
            <Testimonial Image={img} title={"Review_one"} desc={"ThikThik"} />
            <br></br>
            {/* <Card2/> */}
            <a href="/review"><button style={{ marginLeft: "auto" }}>Write a review</button></a>
            <Footer />
        </>
    )
}