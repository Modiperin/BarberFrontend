import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
export const UserCart = () => {
    const store = useSelector((state) => state.cart)
    const [data,setData]=useState();
    const [cartData,setCartData]=useState({});
    const navigate=useNavigate();
    var price=0
    console.log(store)
    var decoded=null
    const checkToken = () => {
        var token = localStorage.getItem('qwerty');
        if (token != null) {
          decoded = jwt_decode(token);
          console.log(decoded)
        }
      }
    const getData=()=>{
        axios.get('http://localhost:9999/api/v1/cart/getcart/'+decoded?.id).then((data)=>{
            console.log(data)
            if(data!=null)
                setData(data.data.data)
            setCartData(data.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(() => {
        checkToken()
        getData()
    }, [])
    // document.getElementById('success').addEventListener('click', (e) => {
    const f1=()=>{
        Swal.fire({
            icon: "success",
            title: "Success"
        })
        axios.post("http://localhost:9999/api/v1/appointment/addappointment",cartData).then((cartData)=>{
            console.log(cartData);
            navigate("/");
        }).catch((error)=>{
            console.log(error);
        })
    }
    // })
    // 
  return (
    <div>UserCart
        <section className="h-100" style={{ backgroundColor: "#eeeef" }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div class="col-md-4 col-12">
                                            
                                        </div>
                                <div>
                                </div>
                            </div>
                            {
                            console.log(data)
                            }
                            {
                                data?.serviceId?.map((e) => {
                                    {price+=e.price}
                                    return (
                                        <>
                                            <div className="card rounded-3 mb-4 w-100">
                                                <div className="card-body p-4">
                                                    <div className="row d-flex justify-content-between align-items-center">
                                                        <div className="col-md-3 col-lg-3 col-xl-3 ">
                                                            <img
                                                                src={e.image}
                                                                className="img-fluid rounded-3"
                                                                alt="Cotton T-shirt"
                                                                height="100px"
                                                                width="100px"
                                                            />
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <p className="lead fw-normal mb-2">{e.serviceName}</p>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3 d-flex">
                                                            <p className='col-md-3 col-lg-3 col-xl-3'>
                                                                {e.time}
                                                            </p>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                        {/* offset-lg-1 */}
                                                            Total Price of Quantity
                                                            <h5 className="mb-0">₹{e.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            {
                                data!=null ?
                                    <div className="col-md-6 container">
                                        <div className="card mb-4">
                                            <div className="card-header py-3">
                                                <h5 className="mb-0">Summary</h5>

                                            </div>
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                        Products
                                                        <span>₹{data.totalPrice}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                         Time (Approx.)
                                                         <p>
                                                         {data.totalTime} 
                                                         Min
                                                         </p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                        <div>
                                                            <strong>Total amount</strong>
                                                            <strong>
                                                                <p className="mb-0">(including VAT)</p>
                                                            </strong>
                                                        </div>
                                                        <span>
                                                            <strong>₹{price }</strong>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                            <button id="success"
                                                class="btn btn-outline-success btn-lg btn-block"
                                                onClick={f1}>
                                                    Proceed to Pay
                                                </button>
                                                {/* <button type="button" className="btn btn-warning btn-block btn-lg">
                                                    Proceed to Pay
                                                </button> */}
                                            </div>
                                        </div>
                                    </div> : <b>Your Cart is Empty</b>
                            }
                        </div>
                    </div>
                </div >
            </section>
        
    </div>
  )
}
