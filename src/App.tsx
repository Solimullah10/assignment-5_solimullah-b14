import { Suspense, useState } from 'react'
import { Toaster } from 'react-hot-toast'
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
    <Toaster position="top-right" reverseOrder={false} />
     <Navbar/>
     <HeroSection/>
     <Suspense
  fallback={
    <div className="flex flex-col justify-center items-center py-20 space-y-3">
      <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
      <p className="text-slate-500 font-medium text-sm">Loading Technologies...</p>
    </div>
  }
>
  <Cards cardPromise={cardPromise} />
</Suspense>
    </>
  )
}

export default App
