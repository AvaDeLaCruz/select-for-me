import React from "react";
import "../styles/RecipeDetails.css";

export default function RecipeDetails(props) {
  return (
    <div className="recipeDetails">
      <div className="recipeCard">
        <span className="servings">Servings: 4</span>
        <h1>{props.title}</h1>
        <div className="resultAuthor">{props.author}</div>
        <hr></hr>
        <table>
          <thead>
            <tr>
              <td className="firstCol">
                <h2>Ingredients</h2>
                <ul className="ingredientsList">
                  <li>1 recipe Naples-style pizza dough</li>
                  <li>Fine semolina, for dusting</li>
                  <li>1 recipe Naples-style pizza sauce</li>
                  <li>1 lb. fresh mozzarella, thinly sliced</li>
                  <li>16 fresh basil leaves</li>
                  <li>Olive oil, to taste</li>
                </ul>
              </td>
              <td className="secondCol">
                <h2>Directions</h2>
                {props.ingredients.length === 0 ? (
                  <p className="noDirections">No directions found.</p>
                ) : (
                  <ol className="directions">
                    {props.ingredients.map(ingredient => {
                      return <li key={ingredient}>{ingredient}</li>;
                    })}
                  </ol>
                )}
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <p className="linkText">
        {" "}
        Link:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.saveur.com/article/Recipes/Pizza-Margherita-Tomato-Basil-and-Mozzarella-Pizza/"
        >
          https://www.saveur.com/article/Recipes/Pizza-Margherita-Tomato-Basil-and-Mozzarella-Pizza/
        </a>
      </p>
    </div>
  );
}
