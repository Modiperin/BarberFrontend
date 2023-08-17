import React from 'react'
import { useNavigate } from 'react-router-dom';

export const useError = () => {
    const navigate=useNavigate()
    const errors=(error)=>{
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
    
}
