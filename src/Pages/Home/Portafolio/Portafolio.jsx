import React from "react";
import imgLibreria from "../../../assets/imagesPortafolio/libreria.png"
import imgBleux from "../../../assets/imagesPortafolio/bleux.png"
import imgBuscador from "../../../assets/imagesPortafolio/buscador.png"
import imgDiseño from "../../../assets/imagesPortafolio/diseño.png"
import imgFinal from "../../../assets/imagesPortafolio/final.png"
import imgNotas from "../../../assets/imagesPortafolio/notas.png"
import imgMusic from "../../../assets/imagesPortafolio/music.png"
import imgBlueasy from "../../../assets/imagesPortafolio/blueasy.png"
import imgAtlas from "../../../assets/imagesPortafolio/atlas.png"
import './Portafolio.css'

export const Portafolio = () => {
    return (
        <>
        <section className="sectionP">
        <h1 className="titleP">Portafolio</h1>
        <div className="DivPortafolio">
                <a href="https://libreria-1313.github.io/libreria_1313/">
                    <img className="imgP" src={imgLibreria} alt="" />
                </a>
                <a href="https://xxbrayitaxx.github.io/henry-atlas-pagina/">
                    <img className="imgP" src={imgAtlas} alt="" />
                </a>
                <a href="https://xxbrayitaxx.github.io/BLUEASY/">
                    <img className="imgP" src={imgBlueasy} alt="" />
                </a>
                <a href="https://xxbrayitaxx.github.io/rick_and_morty_brayan/">
                    <img className="imgP" src={imgBuscador} alt="" />
                </a>
                <a href="https://xxbrayitaxx.github.io/black-music/">
                    <img className="imgP" src={imgMusic} alt="" />
                </a>
                <a href="https://xxbrayitaxx.github.io/calculate-notes-brayan/">
                    <img className="imgP" src={imgNotas} alt="" />
                </a>
                <a href="https://xxbrayitaxx.github.io/taller-final-h/">
                    <img className="imgP" src={imgFinal} alt="" />
                </a>
                <a href="https://xxbrayitaxx.github.io/Bleux/">
                    <img className="imgP" src={imgBleux} alt="" />
                </a>
                <a href="https://xxbrayitaxx.github.io/Dise-oMultimedia-Proyect/index.html">
                    <img className="imgP" src={imgDiseño} alt="" />
                </a>

                </div>
        </section>
        </>
    )
}