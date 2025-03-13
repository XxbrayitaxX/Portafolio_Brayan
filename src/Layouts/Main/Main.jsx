import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import './Main.css'

export const Main = () => {
  return (
    <main>
      <section className='main'>
      <h1>Brayan Aguirre</h1>
      <p>Desarrollador Web Frontend</p>
      <p>Html | Css | JavaScript | React JS | | MySQL | MongoDB </p>
      <p>_________________________________</p>
      <div className='social'>
      <a className='icons' href="https://www.linkedin.com/in/brayan-aguirre-sena-64b87932a/"><CiLinkedin /></a>
      <a className='icons' href="https://github.com/XxbrayitaxX"><FaGithub /></a>
      <a className='icons' href="https://x.com/BrayanAguiSena"><FaXTwitter /></a>
      <a className='icons' href="https://discord.com/channels/@me"><BsDiscord /></a>
      </div>
      </section>
    </main>
  )
}