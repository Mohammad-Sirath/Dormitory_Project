import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function MyNavbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <img src="https://www.shutterstock.com/image-vector/hostel-logo-hotel-travel-rest-600w-727553260.jpg" />
            </div>
            <nav className="nav-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/view-dorm">View Dorm</Link>
                    </li>
                    <li>
                        <Link to="/member">Member</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MyNavbar;
