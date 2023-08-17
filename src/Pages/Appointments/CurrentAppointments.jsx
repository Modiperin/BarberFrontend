import React, { useEffect, useState } from 'react'
import { useTokenCheckerLogout } from '../../useTokenCheckerLogout'
import axios from 'axios'
import { useError } from '../../useError'
import { Link, useNavigate } from 'react-router-dom'
// import QRCode from "react-qr-code";
import QRCode from 'qrcode'

export const CurrentAppointments = () => {
    const decoded = useTokenCheckerLogout()
    const useerror = useError()
    const navigate = useNavigate()
    const [current, setCurrent] = useState()
    const [imgURL, setImgURL] = useState()
    const errorss = (error) => {
        if (error.response) {
            // The request was made, but the server responded with an error status code
            console.log("Status Code:", error.response.status);
            if (error.response.status === 500) navigate("/error500");
            console.log("Response Data:", error.response.data);
        } else if (error.request) {
            // The request was made, but no response was received
            console.log("No response received:", error.request);
            navigate("/error500");
        } else {
            // Something else happened while setting up the request
            console.log("Error:", error.message);
        }
    }

    const generateQr = async (id) => {
        const response = await QRCode.toDataURL('http://192.168.1.50:9999/api/v1/appointment/checkedin/' + id)
        console.log(response)
        setImgURL(response)
    }
    const getAllCurrent = () => {
        console.log("decoat current ",decoded)
        try {
            axios.get('http://localhost:9999/api/v1/appointment/getcurrentuserappointment/' + decoded.id).then((data) => {
                console.log(data)
                setCurrent(data.data.data)
            }).catch((error) => {
                errorss(error)
            })
        }
        catch (error) {
            alert("Please login to view your appointments")
        }
    }
    useEffect(() => {
        getAllCurrent()
    }, [])

    return (
        <div>
            {console.log(current)}
            {current!=null && current.length>0 ? 
            
            current?.map((e) => {
                return (
                    <>
                        <h1>{e._id}</h1>
                        <button className='btn btn-warn' onClick={() => generateQr(e._id)}>Click Here To Generate QR Code For Futher Validations</button>
                        {
                            imgURL && <div className='mt-4'><img src={imgURL} alt='QR code' /></div>
                        }
                    </>
                )
            })
                : <><h1>You Don't have any Current Appointments
                </h1>
                    <Link to='/store'><button className='btn btn-warning'>Click Here to visit Saloons near your locality</button></Link>
                </>
            }
        </div>
    )
}
