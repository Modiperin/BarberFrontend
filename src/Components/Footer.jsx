import React from 'react'

import { Link } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram,BsTwitter,BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import logo from '../Images/logo_demo.jpg'


const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer__container">
            <article>
            <img src={logo} alt="logo" />
            </article>
            <article >
                <h4>Learn More</h4>
                <Link to='/about' className='footer-text'>About Us</Link>
                <Link to='/Contact'className='footer-text'>Contact Us</Link>
                <Link to='/' className='footer-text'> Privacy Policy </Link>
            </article>
            <article>
                <h4>Contact Us</h4>
                <Link to='/' className='footer-text'>Company : +7228806111</Link>
                <Link to='/' className='footer-text'>Office : +9876543210</Link>                
            </article>
            <div className="footer__socials">
                <a href='http://instagram.com' target='_blank'  rel='noreferrer noopener'  ><BsInstagram/></a>  
                <a href='http://facebook.com' target='_blank'  rel='noreferrer noopener' ><BsFacebook/></a>  
                <a href='http://twitter.com' target='_blank'  rel='noreferrer noopener' ><BsTwitter/></a>  
                <a href='https://wa.me/7228806111' target='_blank' rel='noreferrer noopener' ><BsWhatsapp/></a>  
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer