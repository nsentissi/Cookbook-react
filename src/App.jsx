
import { useState, useEffect } from 'react'
import useContentful from './hooks/useContentful'
import EmblaCarousel from './components/EmblaCarousel'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import './App.css'

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function App() {

  return (
    <>
  <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
    </>
  )
}

export default App
