import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { BsCartPlusFill } from 'react-icons/bs'
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../redux/CartSlice';
// import {Link} from 'react-router-dom'

const Navbar = () => {

  const [token, setToken] = useState(true)
  const [admin,setAdmin]=useState(false)
  const navigate = useNavigate();
  var decoded = null
  const dispatch = useDispatch()
  // const [cart,setCart]=useState({})
  const store = useSelector((state) => state.cart)
  console.log(store.value?.serviceId)
  const logout = () => {
    console.log('hhhh')
    localStorage.removeItem('qwerty')
    localStorage.removeItem('shopify')
    localStorage.removeItem('uuid')
    window.location.reload();
    navigate('/')
  }

  const checkToken = () => {
    var token = localStorage.getItem('qwerty');
    console.log(token)
    if (token != null) {
      try {
        decoded = jwt_decode(token);
        console.log(decoded)
        const currentTime = Date.now() / 1000;
        console.log(currentTime)
        console.log(decoded.exp)
        if (currentTime > decoded.exp) {
          setToken(false)
          logout()
        }
      }
      catch (error) {
        console.log(error)
        setToken(false)
        logout()
      }

    }
    else {
      setToken(false)
    }

  }
  const checkAdmin=()=>{
    var token=localStorage.getItem('shopify')
    try{
      if(token!=null)
      {
        var dec=jwt_decode(token)
        if(!dec.message)
        {
          console.log("here")
          setAdmin(true)
        }
        else
          setAdmin(false)
      }
    }
    catch(error)
    {
      console.log(error)
    }
  }
  const getCart = () => {
    try{
      axios.get('http://localhost:9999/api/v1/cart/getusercart/' + decoded.id).then((data) => {
        console.log(new Date().getTime())
        console.log(new Date(data.data.data.createdAt).getTime() + 5 * 60 * 1000)
        if (new Date().getTime() <= new Date(data.data.data.createdAt).getTime() + 5 * 60 * 1000)
          dispatch(addToCart(data.data.data))
        else
          dispatch(addToCart(null))
      }).catch((error) => {
        console.log(error)
      })
    }
    catch(error)
    {
      console.log(error)
    }
  }

  useEffect(() => {
    checkToken()
    checkAdmin()
    getCart()
  }, [])

  const handleStorageChange = () => {
    checkAdmin()
    checkToken();
  };


  React.useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [logout]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#" rel='noreferrer noopener' >Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <form className="col-xl-4 nav-left " role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <ul className="navbar-nav nav-right">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/#">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/cart">
                  <BsCartPlusFill />
                  <span>{store.value?.serviceId?.length}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/#">Contact Us</Link>
              </li>
              <li className="nav-item">
                {
                  admin ? <Link className="nav-link active" to="/adminhomepage"><button class="btn  mr-3 btn-indigo">Admin Home Page</button></Link> :
                  <Link className="nav-link active" to="/gotostore"><button class="btn  mr-3 btn-indigo">Go To Store</button></Link>
                }
              </li>
              <li className="nav-item">
                <button>
                  {
                    token ? <button className='login' rel='noreferrer noopener' onClick={logout}>Logout</button> : <Link className='login' to="/login" rel='noreferrer noopener' >Login/Signup</Link>
                  }

                </button>
              </li>
              {/* <li className='nav-item'>
          <div>
            <Link className="nav-link active" aria-current="page" to="/#"></Link>
          </div>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="container">
</div> */}
    </>
  )
}

export default Navbar