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
  // const routerData = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //     errorElement: <Error404 />
  //   },
  //   {
  //     path: '/login',
  //     element: <Login />,
  //     errorElement: <Error404 />,
  //     children: [
  //       {
  //         path: 'forgotpassword',
  //         element: <ForgotPassword />,
  //         errorElement: <Error404 />
  //       }
  //     ]
  //   },
  //   {
  //     path: '/demo123',
  //     element: <Demo />,
  //     errorElement: <Error404 />
  //   },
  //   {
  //     path: '/demo2',
  //     element: <Demo2 />,
  //     errorElement: <Error404 />
  //   },
  //   {
  //     path: '/store',
  //     element: <Store />,
  //     errorElement: <Error404 />
  //   },
  //   {
  //     path: '/adminhomepage',
  //     element: <AdminHomePage />,
  //     errorElement: <Error404 />,
  //     loader: AdminProtectedRoutes
  //   },
  //   {
  //     path: '/confirm',
  //     element: <ConfirmationMail />,
  //     errorElement: <Error404 />
  //   },
  //   {
  //     path: '/gotostore',
  //     element: <BussinessForm />,
  //     errorElement: <Error404 />,
  //     loader: ProtectedRoutes
  //   },
  //   {
  //     path: '/signup',
  //     element: <SignUp />,
  //     errorElement: <Error404 />
  //   }
  // ]);

  return (
    !loader && (
      <>
        <Navbar />
        {/* <Loader/> */}
        <Routes>
          <Route path='/demo123' element={<Demo />}></Route>
          <Route path='/demo1' element={<Demo1 />}></Route>
          <Route path='/demo2' element={<Demo2 />}></Route>
          <Route path="/servicedemo" element={<UserServicePage/>}></Route>
          <Route element={<ProtectedRoutes></ProtectedRoutes>}>
            <Route path='/gotostore' element={<BussinessForm />}></Route>
            <Route path='/cart' element={<UserCart />} />
            <Route path='currentappointment' element={<CurrentAppointments/>}/>
          </Route>
          <Route element={<AdminProtectedRoutes />}>
            <Route path='/adminhomepage' element={<AdminHomePage />} />
          </Route>
          <Route path="/confirm" element={<ConfirmationMail />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/login/forgotPassword' element={<ForgotPassword />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/store1" element={<Store1 />}></Route>
          <Route path="/conformation" element={<Conform />}></Route>
          <Route path='/userservice' element={<UserServicePage/>}></Route>
          <Route path="/error500" element={<Error500 />} />
          <Route path='/*' element={<Error404 />} />

          <Route path='/login/forgotPassword' element={<ForgotPassword />}></Route>
          <Route path="/admin/service" element={<AdminServicePage />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        </Routes>
        <Footer />
        {/* <EnhancedTable/> */}

      </>
    )
    // <>
    //   <Navbar />
    //   <RouterProvider router={routerData}>{Children}</RouterProvider>
    //   <Footer/>
    // </>
  );
};

export default App;
