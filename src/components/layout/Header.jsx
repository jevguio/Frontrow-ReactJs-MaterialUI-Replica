import React, { useEffect, useState } from "react";
import './Header.css';

import logo from '../../assets/Frontrow_logo.png';
function App({cart}) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timerID);
    }, []);
    return (
        <>
            <nav>
                <span><a href="./home"><img src={"./"+logo} className="logo" /></a></span>
                <span>
                    <button className="btn btn-default center" type="button">
                        <i className="bi bi-globe">Map | Philippines</i> 
                    </button>

                    <div className="center">PHT|{time.toLocaleTimeString()}</div>
                </span>
                <span >
                    <a href="./home">HOME</a>
                    <a href="./SHOP">SHOP</a>
                    <a href="./ABOUT">ABOUT</a>
                    <a href="./">BELIEVERS</a>
                    <a href="./">CONTACTS</a>
                </span>
                <span>
                    <button className="btn btn-default center" type="button">
                        <i className="bi bi-cart">{cart} Cart</i>
                    </button>

                    <a href="./" className="Login" type="button">
                        Logout
                    </a>
                </span>
            </nav>
        </>
    )
}
export default App;