/**
 * 
 * Holds portion of navigation bar that does not change or move
 * 
 * Author : Evan Cillie
 * Last Edit : 03 / 21 / 25
 * Version 0.1
 * 
 */

import React from 'react';

function Static() {
    return (
        <div className="flex-box-column">
            <button >Log Out</button>
            <button >Profile</button>
            <button>Settings</button>
            <button>Home</button>
        </div>
    );
}

export default Static;



