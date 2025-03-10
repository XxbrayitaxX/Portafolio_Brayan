import React from "react"
import { ItemNavBar } from "../../Components/ItemNavBar/ItemNavBar"
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
        <nav>
            <ul className="navbar-links">
                <ItemNavBar route='/' content='inicio' />
                <ItemNavBar route='/class1' content='acerca de mi' />
                <ItemNavBar route='/class2' content='estudios' />
                <ItemNavBar route='/class3' content='portafolio' />
            </ul>
        </nav>
        </>
    )
}