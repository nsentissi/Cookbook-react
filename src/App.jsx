
import { useState, useEffect } from 'react'
import useContentful from './hooks/useContentful'
import EmblaCarousel from './components/EmblaCarousel'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import './App.css'
import Navbar from './components/Navbar'
import Maindishes from './components/main-dishes'
import Cocktails from './components/Cocktails'
import Desserts from './components/desserts'


const OPTIONS = {}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


function App() {

  return (
    <>
    <Navbar className="nav"/>
  <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>

    <div className='main'>
     <Maindishes/>
     <Cocktails/>
     <Desserts/>
        
     </div>
    </>
  )
}

export default App
