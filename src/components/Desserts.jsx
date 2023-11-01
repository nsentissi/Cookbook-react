import React, { useState, useEffect } from 'react';
import useContentful from '../hooks/useContentfulDesserts';
import RecipeCard from "./Recipe-card";
import Loading from "./Loading";


const Desserts = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState(null);
 

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div className='main'>
    {!recipes ? (
              <div className="spinner">
              <Loading />
             </div>
    ) : (
      recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
    )}
  </div>
  );
};

export default Desserts;
