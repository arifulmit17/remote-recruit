import React from 'react';
import logo from '../assets/Logo.png'

const navbar = () => {
    return (
        <div className="w-full flex items-center justify-between p-4">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-22 h-auto" />
            </div>
            <div className="flex items-center gap-5">
               <h5>Sign In</h5>
               <button>Sign up</button>
            </div>

            
        </div>
    );
};

export default navbar;