import React, { useEffect, useState } from "react";

import "../App.css";
import Recipe from "./Recipe";

const Home = () => {
  // API'S
  const APP_ID = "ea1457f2";
  const APP_KEY = "f4d5045e5c92dd500e519807416b4600";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      setLoading(false);
      console.log(data.hits);
    };

    getRecipes();
  }, [query]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <section>
        {loading ? <h2>Loading...</h2> : <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>}
      </section>
    </div>
  );
};

export default Home;
