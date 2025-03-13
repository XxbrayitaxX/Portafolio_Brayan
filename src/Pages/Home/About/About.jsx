import React from "react";
import img from "../../../assets/img/profile.jpg";
import "./About.css";

export const About = () => {
    return (
        <>
            <section className="about-container">
                <div className="profile-picture">
                    <img src={img} className="imagenRedonda" alt="Foto de perfil" />
                </div>
                <div className="about">
                    <h1 className="titleAbout">Acerca de mi</h1>

                    <p className="P-Profile1">Hola mi nombre es brayan alexander aguirre castiblanco, Desarrollador Web Frontend.</p>

                    <p className="P-Profile2">Soy un desarrollador web frontend con algo de experiencia, aunque todavía estoy en proceso de crecimiento profesional. No he tenido la oportunidad de participar en proyectos grandes, pero he trabajado en varios proyectos pequeños donde pude aplicar y mejorar mis habilidades. En estos proyectos, me he enfocado en la creación de interfaces limpias, funcionales y atractivas para los usuarios. He aprendido a trabajar con tecnologías como HTML, CSS, JavaScript, y diversos frameworks y librerías como React, Vue y otros.</p>

                    <p className="P-Profile3">a comunicación y el trabajo en equipo es para mí esencial para poder crecer como desarrollador. Soy proactivo y metódico, siempre busco nuevos retos y me adapto fácilmente a los cambios, estoy abierto a aprender nuevas tecnologías y lenguajes.</p>

                    <p className="P-Profile4"></p>
                    <h2>¿Que puedo hacer?</h2>
                </div>
            </section>
        </>
    )
}