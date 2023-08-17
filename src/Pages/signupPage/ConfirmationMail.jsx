import React, { useEffect, useState } from 'react'
import './conformationMail.css'
import { useForm } from 'react-hook-form';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const ConfirmationMail = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();
  const navigate=useNavigate()
  const [otpError,setOtpError]=useState('')
  const [email,setEmail]=useState("")
  const token = localStorage.getItem('qwerty');
  const submit=(data)=>{
    if (token != null) {
      const decoded = jwt_decode(token);
      console.log(decoded)
      axios.post(`http://localhost:9999/api/v1/signup/checkOtp/${decoded.email}`,data).then((data)=>{
        navigate('/')
      }).catch((error)=>{
        setOtpError(error.response.data.message)
      })
    }
  }
  useEffect(() => {
    const decoded = jwt_decode(token);
    setEmail(decoded.email)
  }, [])
  
  const resend=()=>{
    const token = localStorage.getItem('qwerty');
    if (token != null) {
      const decoded = jwt_decode(token);
      console.log(decoded)
      axios.get(`http://localhost:9999/api/v1/signup/resendEmail/${decoded.email}`)
    }
  }
  return (
    <div>
      <div className="email-verification">
        <h1>Email Verification</h1>
        <p>Thank you for signing up for a Cloudinary account.</p>
        <p>Verify your email address</p>
        <p>Verification email has been sent to:</p>
        <p className="email">{email}</p>
        <p>
          <h4>Please Enter Your Otp Here</h4>
          {otpError}
          <form onSubmit={handleSubmit(submit)}>
            <input type='text' name='otp' required {...register('otp')}></input><br></br>
            <button className='btn btn'>Activate</button>
          </form>
        </p>
        <p>
          <button className="button" onClick={()=>resend()}>
            Resend email
          </button>
        </p>
      </div>
    </div>
  )
}
