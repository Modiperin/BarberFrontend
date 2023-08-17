
import React, { useState } from 'react';
import './UserServicePage.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addToService, removeFromService } from '../../redux/ServiceSlice';

const UserServicePage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const value = location.state?.value;
  const [service, setService] = useState([]);
  const dispatch = useDispatch()
  const store = useSelector((state) => state)
  const getData = () => {
    // "http://localhost:9999/api/v1/slot/getspecificstoreemployeesforslot/" + value
    axios.get("http://localhost:9999/api/v1/slot/getspecificstoreserviceforslot/64c21eb6f045e543ef05de28").then((data) => {
      console.log("THE DATA is")
      setService(data.data.data);
      console.log(data);
    })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    getData();
  }, []);
  const [servicedata, setServiceData] = useState([]);

  // const [addService,setAddService]=useState([]);
  const { register, handleSubmit, formState: { errors }, setValue, } = useForm({});

  // const addService=()=>{

  // }

  const submit = (data) => {

    console.log("THE Service id IS")
    console.log(servicedata);
    if (servicedata) {
      navigate("/demo2", { state: { value: value, Id: servicedata } });
    }
  }

  const addService = () => {
    console.log("services", store)
  }
  return (
    <>
      <div class="row">
        <div class="col-3">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Body</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Face</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Hair</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Massage</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Nail</a>
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active " id="list-home" role="tabpanel" aria-labelledby="list-home-list">
              {service.map((e) => {
                return (
                  <>
                    <div className='container-fluid w-100 d-flex p-2'>
                      <p className="col-3">
                        {e.serviceName}
                      </p>
                      <p className="col-3">
                        {e.price}
                      </p>
                      <p className="col-3">
                        {e.time}
                      </p>
                      <button className='btn btn-danger'
                      // onClick={()=>{setServiceData([...servicedata,e]),dispatch(addToService(e))}}
                          onClick={()=>{
                            dispatch(removeFromService(e._id))
                          }}
                      >-</button>
                      <button className='btn btn-danger'
                        onClick={() => {
                          dispatch(addToService(e))
                          addService();
                        }}>
                        +
                      </button>
                    </div>
                  </>
                )
              })}
            </div>
            {/* <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div> */}
            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
          </div>
          <form action="" onSubmit={handleSubmit(submit)}>
            <input type="submit" value="submit" />
            {/* <button type='submit' className='btn btn-primary'>Submit</button> */}
          </form>
        </div>
      </div>
    </>
  );
}


/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */

export default UserServicePage