import React from 'react'
import { useState, useEffect } from 'react'
import useContentful from '../hooks/useContentfulDesserts'

const Desserts = () => {

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
      {!recipes ? <p>Loading...</p> : recipes.map((recipe) => {
        return (
          <div className="card">
            <img src={recipe.img} alt={recipe.title} />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.ingredients}</p>
              <p className="card-text">{recipe.recipe}</p>
              
            </div>
          </div>
        )
      })}
    
    </>
    

  )
}

export default Desserts
