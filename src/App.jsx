
import { useState, useEffect } from 'react'
import useContentful from './hooks/useContentful'

import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

import './App.css'
import Maindishes from './components/main-dishes'
import Cocktails from './components/Cocktails'
import Desserts from './components/desserts'


function App() {



  return (

    <>
      
    <Navbar />
    <Carousel />
    

    <div className='main'>
     <Maindishes/>
     <Cocktails/>
     <Desserts/>
        
     </div>
    </>
  )
}

export default App
