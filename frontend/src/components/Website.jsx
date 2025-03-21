/**
 * 
 * Hold the top of the website jsx tree files
 * 
 * Author : Evan Cillie
 * Last Edit 03 / 21 /25
 * Version 0.1
 * 
 */

import { useState } from "react"
import Login from "./Login"
import Dashboard from "./Dashboard"

function Website(){
    const [userInfo, setUserInfo] = useState(null);
    if (userInfo === null){
        return <Login setUserInfo={setUserInfo} />;
    } else {
        return <Dashboard userInfo = {userInfo} />;
    }
}

export default Website