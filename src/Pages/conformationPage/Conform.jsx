import React from 'react';
import './Conform.css';

export const Conform = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Kindly conform your order details.</h1>
            <br />
            <br />
            <br />
            <h1 style={{ textAlign: 'center' }}>ORDER SUMMARY</h1>

            <div className="tablecss">
                <table>
                    <tr>
                        <th>Date-Time</th>
                        <th>Employee</th>
                        <th>Service</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <th>Date-Time</th>
                        <th>Employee</th>
                        <th>Service</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>

                </table>
            </div>

        </div>
    )
}
