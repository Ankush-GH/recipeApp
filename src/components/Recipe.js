import React from "react";
import style from "../recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  // TO CONVERT THE CALORIE COUNT IN TWO DIGITS
  const newCalories = calories.toFixed();

  return (
    <div className={style.recipe}>
      <h1 className={style.recipe}>{title}</h1>
      <p>{newCalories} Calories</p>
      <ol>
        {/* INGREDIENTS HAS ANOTHER ARRAY WITHIN IT SO WE USE MAP FUNCTION */}
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={image} alt="FOOD" />
    </div>
  );
};

export default Recipe;
