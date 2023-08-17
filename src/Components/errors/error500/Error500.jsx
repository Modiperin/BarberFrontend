import React from 'react'
import './error500.css'
import { Link } from 'react-router-dom'

export const Error500 = () => {
    return (
        <div className='mainBody'>
            <div className="container">
                <img src="https://i.imgur.com/qIufhof.png" className='image' />
                <h1>
                    <span>500</span> <br />
                    Internal server error
                </h1>
                <p>We are currently trying to fix the problem.</p>
                <Link to='/' className="link_404">
                    Go to Home
                </Link>
            </div>
        </div>
    )
}
