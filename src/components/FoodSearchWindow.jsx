import React, { useEffect, useState } from "react";
import "./FoodSearchWindow.css";

const FoodSearchWindow = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  const APP_ID = "7e0463d0";
  const APP_KEY = "04326f8012732143f103c58a17b560be";

  useEffect(() => {
    if(!query) return;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setRecipes(json.hits)
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value)
  }

  return (
    <div>
      <h2>Food Recipe</h2>
      <input
        type="text"
        name="food-name"
        placeholder="type your favourite food"
        onChange={handleChange}
        value = {query}
      />
      <br />
      <br />
      <ul className="food-recipe-container">
        {
          recipes.map((recipe,index) => (
            <li key={index} className="food-recipe">
              <h3>{recipe.recipe.label}</h3>
              <img src={recipe.recipe.image} alt={recipe.recipe.image}/>
              Calories : <span>{recipe.recipe.calories.toFixed(2)}</span>
              <a href={recipe.recipe.uri}>Recipe Link</a>
            </li>
          ))
        }
      </ul>
      <ul></ul>
    </div>
  );
};

export default FoodSearchWindow;
