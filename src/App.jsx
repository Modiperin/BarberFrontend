import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/home/Home";
import { Children, useState } from "react";
const App = () => {
  const [loader, setLoader] = useState(true);
  const spinner = document.getElementById("preloader");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoader(false);
    },1000);
  }
  
  return (
    !loader && (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </>
    )
  );
};

export default App;
