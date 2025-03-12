import React from 'react'
import { Home } from './Pages/Home/Home'
import { Header } from './Layouts/Header/Header'
import { SectionP } from './Layouts/SectionP/SectionP'
import { Routes , Route } from 'react-router-dom'
import { Footer } from './Layouts/Footer/Footer'

export const App = () => {

  return (
    <>
    <div>
      <Header/>
      <SectionP/>
        <Routes>
            <Route path="/" element="" />
            <Route path="/acerca de mi"  />
        </Routes>
        <Footer/>
    </div>
    </>
  )
}


