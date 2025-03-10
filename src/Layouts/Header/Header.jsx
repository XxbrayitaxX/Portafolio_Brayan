import React from "react"
import { NavBar } from "../Navbar/NavBar"
import { ItemTitles } from "../../Components/ItemTitle/ItemTitle"
import './Header.css'

export const Header = () => {
    return(
        <>
        <header> 
        <ItemTitles class name="portafolio-estudiante" content="portafolio estudiante" />
        <NavBar/>
        </header>
        </>
    )
}