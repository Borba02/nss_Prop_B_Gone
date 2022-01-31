import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/disposal">Disposal List</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/inventory">Inventory</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/history">History</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("pbg_user")
                        }
                    }
                
                >Logout</Link>
            </li>
        </ul>
    )
}