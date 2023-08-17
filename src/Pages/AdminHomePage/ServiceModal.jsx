import React from 'react'
import './ServiceModal.css'

const ServiceModal = () => {
    return (
        <div>
            {/* <div class="container">
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Large Modal</button>

                <div class="modal fade modal-fullscreen" id="myModal" role="dialog">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">SERVICES</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
            <div
                class="modal fade"
                id="myModal"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabindex="-1"
            >
                {/* // modal-dialog-scrollable */}
                <div class="modal-dialog 
                modal-xl
                "
                >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" >
                                Modal 1
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                        <div className="Table table-responsive">
                                    <table className='table table-striped table-hover'>
                                        <tr >
                                            <th>Service</th>
                                            <th>Duration(in mins)</th>
                                            <th>Price(in ₹)</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>Gender</th>
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td className='p-0'><input type='text' defaultValu6e="ServiceName"/></td>
                                            <td className='p-0'><select>
                                                    <option>30</option>
                                                    <option>60</option>
                                                </select></td>
                                            <td  className='p-0' ><input type='number' defaultValue="50"/></td>
                                            <td  className='p-0'><input type='textarea' defaultValue="description"/></td>
                                            <td className='p-0'>
                                                {/* <input type="file"/> */}
                                                </td>
                                            <td>
                                                <button>+Add</button>
                                            </td>
                                            <td>
                                                <button>Delete
                                                </button>
                                            </td>
                                        </tr>
                                        {/* 
                                        <tr>
                                            <td><input type='text' defaultValue="ServiceName"/></td>
                                            <td><select>
                                                    <option>30</option>
                                                    <option>60</option>
                                                </select></td>
                                            <td><input type='number' defaultValue="50"/></td>
                                            <td><input type='textarea' defaultValue="description"/></td>
                                            <td><input src="https://res.cloudinary.com/dpoecdktk/image/upload/v1690551191/nmxzmpv5gyx56uvhc62l.png" alt="" type="image" width="50px" height="50px"/></td>
                                            <td>6</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td><input type='text' defaultValue="ServiceName"/></td>
                                            <td><select>
                                                    <option>30</option>
                                                    <option>60</option>
                                                </select></td>
                                            <td><input type='number' defaultValue="50"/></td>
                                            <td><input type='textarea' defaultValue="description"/></td>
                                            <td><input src="https://res.cloudinary.com/dpoecdktk/image/upload/v1690551191/nmxzmpv5gyx56uvhc62l.png" alt="" type="image" width="50px" height="50px"/></td>
                                            <td>6</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td><input type='text' defaultValue="ServiceName"/></td>
                                            <td><select>
                                                    <option>30</option>
                                                    <option>60</option>
                                                </select></td>
                                            <td><input type='number' defaultValue="50"/></td>
                                            <td><input type='textarea' defaultValue="description"/></td>
                                            <td><input src="https://res.cloudinary.com/dpoecdktk/image/upload/v1690551191/nmxzmpv5gyx56uvhc62l.png" alt="" type="image" width="50px" height="50px"/></td>
                                            <td>6</td>
                                            <td>6</td>
                                        </tr> */}
                                        {/* <tr>
                                            <td><input type='text' defaultValue="ServiceName"/></td>
                                            <td><select>
                                                    <option>30</option>
                                                    <option>60</option>
                                                </select></td>
                                            <td><input type='number' defaultValue="50"/></td>
                                            <td><input type='textarea' defaultValue="description"/></td>
                                            <td><input src="https://res.cloudinary.com/dpoecdktk/image/upload/v1690551191/nmxzmpv5gyx56uvhc62l.png" alt="" type="image" width="50px" height="50px"/></td>
                                            <td>6</td>
                                            <td>6</td>
                                        </tr><tr>
                                            <td><input type='text' defaultValue="ServiceName"/></td>
                                            <td><select>
                                                    <option>30</option>
                                                    <option>60</option>
                                                </select></td>
                                            <td><input type='number' defaultValue="50"/></td>
                                            <td><input type='textarea' defaultValue="description"/></td>
                                            <td><input src="https://res.cloudinary.com/dpoecdktk/image/upload/v1690551191/nmxzmpv5gyx56uvhc62l.png" alt="" type="image" width="50px" height="50px"/></td>
                                            <td>6</td>
                                            <td>6</td>
                                        </tr> */}

                                    </table>
                                </div>
                        </div>
                        <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                            </div>

                    </div>
                </div>
            </div>

            {/* <button
                class="btn btn-primary"
                data-bs-target="#myModal"
                data-bs-toggle="modal"
            >
                Open first modal
            </button> */}


        </div>
    )
}

export default ServiceModal