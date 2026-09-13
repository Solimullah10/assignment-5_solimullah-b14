import { Suspense} from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Cards from './components/card/Cards'
import type { Icard } from './types/card'
import SectionHeader from './components/SectionHeader'
import Footer from './components/Footer'



const cardFetch = async (): Promise<Icard[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const cardPromise = cardFetch();
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <HeroSection />
      <SectionHeader />
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
      <Footer />
    </>
  )
}

export default App
