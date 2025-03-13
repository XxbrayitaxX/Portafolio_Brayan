import React from "react"
import { ItemNavBar } from "../../Components/ItemNavBar/ItemNavBar"
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
        <nav>
            <ul className="navbar-links">
                <ItemNavBar route='/' content='inicio' />
                <ItemNavBar route='/About' content='acerca de mi' />
                <ItemNavBar route='/educasion' content='Educasion' />
                <ItemNavBar route='/Portafolio' content='portafolio' />
            </ul>
        </nav>
        </>
    )
}