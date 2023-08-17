import { Outlet } from "react-router-dom"
import Login from "./Pages/loginPage/login"

const useAuth=()=>{
    return localStorage.getItem('qwerty') ? true :false
}

const ProtectedRoutes=()=>{
    const flag=useAuth()
    return(
        flag ? <Outlet></Outlet> : <Login></Login>
    )
}

export default ProtectedRoutes
