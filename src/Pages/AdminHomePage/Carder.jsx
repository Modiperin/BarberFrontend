import React from 'react'
import img1 from '../../Images/Shaving.png'
import './Carder.css'
    
const Carder = () => {
    return (
        <>
            <div class="cbody">
                <div class="wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <div class="card mx-30">
                                    <img src={img1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Store Name</h5>
                                        <h6>
                                            <h6>Rating</h6>
                                            <h6>Working Hours</h6>
                                            Address</h6>
                                        <p class="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse amet repellat, eaque aliquid similique eius alias facilis quisquam, ipsa dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}
export default Carder