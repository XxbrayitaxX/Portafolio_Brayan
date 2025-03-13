import React from 'react'
import { Home } from './Pages/Home/Home'
import { Header } from './Layouts/Header/Header'
import { Routes , Route } from 'react-router-dom'
import { Footer } from './Layouts/Footer/Footer'
import { About } from './Pages/Home/About/About'
import { Portafolio } from './Pages/Home/Portafolio/Portafolio'
import { Educacion } from './Pages/Home/Educacion/Educacion'

export const App = () => {

  return (
    <>
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/educasion" element={<Educacion/>}  />
            <Route path="/About" element={<About/>}  />
            <Route path="/Portafolio" element={<Portafolio/>}  />
        </Routes>
        <Footer/>
    </>
  )
}


