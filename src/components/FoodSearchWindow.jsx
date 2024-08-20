import React, { useEffect, useState } from "react";

const FoodSearchWindow = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  const APP_ID = '7e0463d0';
    const APP_KEY = '04326f8012732143f103c58a17b560be';
    

  useEffect(() => {
    
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const data = json;

        console.log(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [query]);
  return (
    <div>
      <h2>Food Recipe</h2>
      <input
        type="text"
        name="food-name"
        placeholder="type your favourite food"
      ></input>
      <ul></ul>
    </div>
  );
};

export default FoodSearchWindow;
