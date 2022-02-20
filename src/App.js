import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css"

const App = () => {
  const APP_ID = "ea1457f2";
  const APP_KEY = "f4d5045e5c92dd500e519807416b4600";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
    // QUERY ADDED BECAUSE WHEN WE HIT THE SEARCH BUTTON ONLY THEN THE PAGE WILL RELOAD
  }, [query]);

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  const getSearch = (e)=>{
    e.preventDefault()
    setQuery(search)
    // TO CLEAR THE SEARCH INPUT ATER THE SEARCH IS DONE AND WE GET THE RESULTS 
    setSearch('')
  }

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // WE DONT KNOW WHEN THIS DATA WILL ARRIVE AS WE ARE REQUESTING IT FROM AN EXXTERNAL API
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={handleSearch}/>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
          // TO REMOVE THE ERROR OF EACH CHILD SHOULD HAVE A DIFFERENT KEY 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
