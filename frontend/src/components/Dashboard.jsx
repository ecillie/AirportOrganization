/**
 * Holds top of subtree for main portion of the webapp
 * 
 * Author : Evan Cillie
 * Last Edit : 03/21/25
 * Version : 0.1
 */

import Navigation from './Navigation';
import  "../styles/Dashboard.css";


function Dashboard() {
    return (
        <div className='flex-box-row'>
            <Navigation />
            <div style={{ flex: 1, padding: '20px' }}>
                <h1>Airport Dashboard</h1>
                <p>Welcome to the main dashboard area!</p>
            </div>
        </div>
    );
}

export default Dashboard;


