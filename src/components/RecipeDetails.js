import React from "react";
import "../styles/RecipeDetails.css";

export default function RecipeDetails(props) {
  return (
    <div className="recipeDetails">
      <div className="recipeCard">
        <span className="servings">Servings: {props.servings}</span>
        <h1>{props.title}</h1>
        <div className="resultAuthor">{props.author}</div>
        <hr></hr>
        <table>
          <thead>
            <tr>
              <td className="firstCol">
                <h2>Ingredients</h2>
                {props.ingredients.length === 0 ? (
                  <p className="noIngredients">No ingredients found.</p>
                ) : (
                  <ol className="ingredientsList">
                    {props.ingredients.map(ingredient => {
                      return <li key={ingredient}>{ingredient}</li>;
                    })}
                  </ol>
                )}
              </td>
              <td className="secondCol">
                <h2>Directions</h2>
                {props.directions.length === 0 ? (
                  <p className="noDirections">No directions found.</p>
                ) : (
                  <ol className="directions">
                    {props.directions.map(direction => {
                      return <li key={direction}>{direction}</li>;
                    })}
                  </ol>
                )}
              </td>
            </tr>
          </thead>
        </table>
        <p className="linkText">
          {" "}
          Link:
          <a target="_blank" rel="noopener noreferrer" href={props.link}>
            {props.link}
          </a>
        </p>
      </div>
    </div>
  );
}
