import React from 'react';
// TO IMPORT recipe.module.css
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {

  const newCalories = calories.toFixed()

  return <div className={style.recipe}>
    {/*  TO IMPORT THE STYLE FROM  */}
      <h1 className={style.recipe}>{title}</h1>
      <p>{newCalories} Calories</p>
      <ol>
        {/* INGREDIENTS HAS ANOTHER ARRAY WITHIN IT SO WE USE MAP FUNCTION */}
      {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
      ))}
      </ol>
      <img className={style.image} src={image} alt="" />
  </div>;
};

export default Recipe;
