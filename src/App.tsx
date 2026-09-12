import { Suspense, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Cards from './components/card/Cards'
import type { Icard } from './types/card'



const cardFetch = async ():Promise<Icard[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const cardPromise = cardFetch();
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Suspense fallback={<h2>Loading....</h2>}>

     <Cards cardPromise={cardPromise}/>
     </Suspense>
    </>
  )
}

export default App
