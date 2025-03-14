import React from "react";
import img1 from "../../../assets/img/RPAintro.png"
import img2 from "../../../assets/img/RPAbasico.png"
import './Educacion.css'

export const Educacion = () => {
    return (
        <>
        <section className="sectionE">
        <h3 className="titleE">Mis Estudios</h3>
        <div className="DivCertificado">
        <a href="https://drive.google.com/file/d/1qspOqA4JHShcHlxIJl_HCLJrRe4wqPXy/view?usp=sharing">
            <img className="imgCertificados" src={img1} alt="" />
        </a>
        <a href="https://drive.google.com/file/d/18h9T-B1t8M6j6LKlF1r4buQf5PCV6XdV/view?usp=sharing">
            <img className="imgCertificados" src={img2} alt="" />
        </a>
        </div>
        </section>
        </>
    )
}