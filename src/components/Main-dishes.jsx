import React, { useState, useEffect } from 'react';
import useContentful from '../hooks/useContentfulMain';
import Loading from './Loading';
import RecipeCard from './Recipe-card';

const Maindishes = () => {
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
    <div>
      {!recipes ? (
        <Loading />
      ) : (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      )}
    </div>
  );
};

    

export default Maindishes;
