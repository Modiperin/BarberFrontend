import React from 'react'
import './Sidebar.css'

const ServiceBar = () => {
    return (
        <React.Fragment>
            <div className="sbody">
            <nav className="menu">
                <header>Sidebar</header>
                <ul className='sub-menu'>
                    <li class="menu-item"><a href="#myModal" data-bs-toggle="modal" data-bs-target="#myModal">Services</a></li>
                    <li class="menu-item"><a href="#face">Employees</a></li>
                    <li class="menu-item"><a href="#body">Statistics</a></li>
                    <li class="menu-item"><a href="#arms">Store Details</a></li>
                    <li class="menu-item"><a href="#feet">Reviews</a></li>
                </ul>
            </nav>

                
            </div>
        </React.Fragment>
    )
}

export default ServiceBar