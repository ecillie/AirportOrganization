/**
 * 
 * Holds compenent for changing portion of side bar
 * 
 * Author : Evan Cillie
 * Last Edit : 3 / 21 / 25
 * Version 0.1
 * 
 */

import React from 'react';

function Dynamic() {
    return (
        <div className='flex-box-column' >
            <button>Planes</button>
            <button>Parking</button>
            <button>Fuel</button>
            <button>Services</button>
            <button>Workers</button>
        </div>
    );
}

export default Dynamic;
