
import { useState, useEffect } from 'react'
import useContentful from './hooks/useContentful'
import EmblaCarousel from './components/EmblaCarousel'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import './App.css'

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function App() {

  const {getRecipes} = useContentful()
  const [recipes, setRecipes] = useState(null)
 
  useEffect(() => {
    getRecipes().then((data) => {
      setRecipes(data)
      console.log(data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
        
    </>
  )
}

export default App
