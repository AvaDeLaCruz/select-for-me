import React from "react";
import "../styles/RecipeDetails.css";

export default function RecipeDetails(props) {
  return (
    <div className="recipeDetails">
      <h1>{props.title}</h1>
      <span className="servings">Servings: 4</span>
      <hr></hr>
      <table>
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
            <p className="noDirections">No directions found.</p>
            <ol className="directions"></ol>
          </td>
        </tr>
      </table>
    </div>
  );
}
