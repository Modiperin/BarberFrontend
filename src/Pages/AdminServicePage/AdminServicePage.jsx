import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const AdminServicePage = () => {
    const [token,setToken]=useState([]);
    const [service,setService]=useState('');
    const [newserice,addNewSerice]=useState([]);
    const checkToken=()=>{
        // console.log(localStorage.getItem('qwerty'));
        // console.log(localStorage.getItem('shopify'));
        if(localStorage.getItem('qwerty') && localStorage.getItem('shopify'))
        {
            var user=jwt_decode(localStorage.getItem('qwerty'));
            var admin=jwt_decode(localStorage.getItem('shopify'));
            // setT(user)
            // if(user && admin)
                setToken([...token,user]);
                setToken([...token,admin]);
            }
        else
        {
            console.log(1);
            alert("SORRY YOU DON'T have credentials");
        }
    }
    // console.log(token);
    // const getService=()=>{
    //     axios.get(`http://localhost:9999/api/v1/admin/service/:${admin.id}`);
    // }
    useEffect(()=>{
        checkToken();
    })
    const submit=(data)=>{
        console.log(data);
        axios
        .post("http://localhost:9999/api/v1/admin/service",data,
        {headers:{
            userToken: localStorage.getItem('qwerty'),
            adminToken: localStorage.getItem('shopify')
        }})
        .then((data)=>{
            console.log("SUCCESS");
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <>
    <h2>Services</h2>
         <input type="text" 
         placeholder='Enter Service Name'
        name="service"
         id="service"
         />
    <button type='submit' onClick={()=>{submit("s")}}>+Add</button>
        </>
  )
}

export default AdminServicePage