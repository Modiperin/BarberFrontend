import jwt_decode from "jwt-decode";
import BussinessForm from "./Pages/businessRegister/BussinessForm";
import { Outlet } from "react-router-dom";
const useAdminAuth = () => {
    var token = localStorage.getItem('shopify');
    var token1=localStorage.getItem('qwerty')
    console.log(token)
    if (token != null && token1!=null) {
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        if (currentTime > decoded.exp) {
            return false
        }
        else {
            if (decoded.role === 'admin')
                return true
            else
                return false
        }
    }
    else {
        return false
    }
}

export default useAdminAuth