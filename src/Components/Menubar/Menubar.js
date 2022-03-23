import React from 'react';
import './Mrnubar.css'
const Menubar = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">logo</div>
                </div>
                <div className="col-md-10 menu-container d-flex " >
                    <li className='items me-4 p-2'>Home</li>
                    <li className='items me-4 p-2'>Contact</li>
                    <li className='items me-4 p-2'>Cart</li>
                    <li className='items me-4 p-2'>Log in</li>
                </div>
            </div>
        </div>

    );
};

export default Menubar;