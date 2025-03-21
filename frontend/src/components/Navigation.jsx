/**
 * 
 * Hold top of subtree for navigation side bar
 * Author : Evan Cillie
 * Last Edit : 3 / 21 / 25
 * Version 0.1
 * 
 */

import React from 'react';
import Static from './Static';
import Dynamic from './Dynamic';
import "../styles/Navigation.css"

function Navigation() {
    return (
        <div className='flex-box-column'>
            <Static />
            <Dynamic />
        </div>
    );
}

export default Navigation;

