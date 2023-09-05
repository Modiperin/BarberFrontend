import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/home/Home";
import { SignUp } from "./Pages/signupPage/SignUp";
import { ConfirmationMail } from "./Pages/signupPage/ConfirmationMail";
import Login from "./Pages/loginPage/login";
import { ForgotPassword } from './Pages/loginPage/ForgotPassword';
import { Service } from "./Pages/servicePage/Service";
import { Store } from "./Pages/storePage/Store"
import { Store1 } from "./Pages/store/Store1";
import ProtectedRoutes from "./ProtectedRoutes";
import BussinessForm from "./Pages/businessRegister/BussinessForm";
import { Conform } from "./Pages/conformationPage/Conform";
import { AdminHomePage } from "./Pages/AdminHomePage/AdminHomePage";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import { Error404 } from "./Components/errors/Error404";
import { Error500 } from "./Components/errors/error500/Error500";
import Demo from "./Pages/DemoSlot/Demo";
import Demo1 from "./Pages/DemoSlot/Demo1";


import AdminServicePage from "./Pages/AdminServicePage/AdminServicePage";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import { Children, useState } from "react";
import EnhancedTable from "./Pages/DemoSlot/TabelDemo";
import Demo2 from "./Pages/DemoSlot/Demo2";
import { UserCart } from "./Pages/UserCart/UserCart";
import UserServicePage from "./Pages/UserServicePage/UserServicePage";
import { CurrentAppointments } from "./Pages/Appointments/CurrentAppointments";
// import Businessform from "./Pages/businessRegister/Businessform";
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
