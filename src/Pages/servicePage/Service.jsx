import "./service.css";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import Button from "./Button"
import ServiceBar from "./ServiceBar";
import Accordian2 from "./Accordian2";


export const Service = () => {
  return (
    <>
        <Button />
        {/* <Carousel /> */}
        <section className="services">

        <ServiceBar />
        <Accordian2/>
        </section>
        <Footer/>
    </>
  )
}




