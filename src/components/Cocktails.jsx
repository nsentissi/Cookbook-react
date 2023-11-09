import React, { useState, useEffect } from "react";
import useContentful from "../hooks/useContentfulCocktails";
import Loading from "./Loading";
import RecipeCard from "./Recipe-card";

const Cocktails = () => {
  const { getRecipes } = useContentful();
  const [recipes, setRecipes] = useState(null);
  const [input, setInput] = useState("");

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

  const handleSearch = (event) => {
    setInput(event.target.value);
  };

  const filteredRecipes = recipes
    ? recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  return (
    <div className="main">
      <form class="form">
        <button>
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <input
          onChange={handleSearch}
          class="input"
          placeholder="Search by title"
          required=""
          type="text"
        />
        <button class="reset" type="reset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </form>
      {!recipes ? (
        <div className="spinner">
          <Loading />
        </div>
      ) : (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      )}
    </div>
  );
};

export default Cocktails;
