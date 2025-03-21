/**
 * Holds top of subtree for main portion of the webapp
 * 
 * Author : Evan Cillie
 * Last Edit : 03/21/25
 * Version : 0.1
 */

import Navigation from './Navigation';
import "../styles/Dashboard.css";  // Direct import without using 'style from'

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Navigation />
            <div className="dashboard-content">
                <h1>Airport Dashboard</h1>
                <p>Welcome to the main dashboard area!</p>
            </div>
        </div>
    );
}

export default Dashboard;



