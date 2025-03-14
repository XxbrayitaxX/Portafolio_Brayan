import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import './Footer.css';
export const Footer = () => {
    return(
        <>
            <footer className="footer">    
            <p className='Pfooter'>skills</p>
            <p className="Skills" ><FaHtml5 /></p>
            <p className="Skills" ><FaCss3Alt /></p>
            <p className="Skills" >< FaJs /></p>
            <p className="Skills" ><SiMysql /></p>
            <p className="Skills" ><RiReactjsLine/></p>
            <p className="Skills" ><TbBrandMongodb /></p>
            </footer>
        </>
    )
}