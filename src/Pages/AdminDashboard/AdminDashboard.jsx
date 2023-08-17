import React from "react";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import { MdHomeRepairService, MdOutlineQueryStats } from "react-icons/md";
import { RiStore3Fill } from "react-icons/ri";
import img1 from "../../Images/Haircut.jpg";
const AdminDashboard = () => {
  return (
    <>
      {/* <ul className="dashboard__nav">
        <li>Shop</li>
        <li>Employees</li>
        <li>Users</li>
      </ul> */}
      <div className="main__div">
        <ul className="vertical__nav">
          <li>
            <Link to="/">
              <MdHomeRepairService />
              Services
            </Link>
          </li>
          <li>
            <Link to="/">
              <GrUserWorker />
              Employees
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdOutlineQueryStats />
              Details (stats)
            </Link>
          </li>
          <li>
            <Link to="/">
              <RiStore3Fill />
              Store Details
            </Link>
          </li>
        </ul>
        <div className="main__text">
        <div className="img__gallery">
          <img src={img1} alt="img1"  />
        </div>
          <h1>Name of shop</h1>
          <h2>Ratings</h2>
          <h2>List of all service</h2>
          <h2>Timings</h2>
          <h2>Booking Details (upto 3 days) </h2>
          <table >
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Service</th>
                <th>Cname</th>
                <th>Ename</th>
                <th>Income</th>
            </tr>
            <tr>
                <td>1/08/2023</td>
                <td>30 min </td>
                <td>Hair cut</td>
                <td>Viren</td>
                <td>Perin</td>
                <td> &#8377; 10000</td>


            </tr>
          </table>
        </div>

      </div>
    </>
  );
};

export default AdminDashboard;
