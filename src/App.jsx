import React from 'react'
import { Home } from './Pages/Home/Home'
import { Header } from './Layouts/Header/Header'
import { Routes , Route } from 'react-router-dom'
import { Footer } from './Layouts/Footer/Footer'

export const App = () => {

  return (
    <>
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/acerca de mi"  />
        </Routes>
        <Footer/>
    </>
  )
}


