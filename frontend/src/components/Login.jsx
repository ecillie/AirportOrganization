/**
 * Allows user to login into account
 * 
 * Author : Evan Cillie
 * Last Edit : 03/21/25
 * Version : 0.1
 */

import { useState } from "react";

/**
 * Handles interaction for when user submits the login information
 * 
 * @param {*} setUserInfo -> sets user's info
 * @returns -> HTML code for login
 */
function handleLogIn(setUserInfo) {
    const [airportCode, setAirportCode] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();     
        setUserInfo(airportCode);
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
                <h2 className="text-center mb-4">Login</h2>

                <div className="form-group mb-3">
                    <label htmlFor="airportCode" className="form-label">Enter Airport Code</label>
                    <input
                        type="text"
                        name="airportCode"
                        className="form-control"
                        id="airportCode"
                        placeholder="Enter airport code"
                        value={airportCode}
                        onChange={(e) => setAirportCode(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Log In</button>
            </form>
        </div>
    );
}

/**
 * Allows user to login
 * 
 * @param {*} param0 -> Object containing setUserInfo function
 * @returns -> JSX for login page
 */
function Login({ setUserInfo }) {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center">
                <h1 className="mb-4">Airport Web App Login Page</h1>
                {handleLogIn(setUserInfo)}
            </div>
        </div>
    );
}

export default Login;
