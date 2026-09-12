import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


function App() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
    </>
  )
}

export default App
