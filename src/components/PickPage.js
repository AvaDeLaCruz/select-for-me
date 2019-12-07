import React from "react";
import "../styles/PickPage.css";
import Loading from "./Loading";
import "../styles/Loading.css";
import RecipeDetails from "./RecipeDetails";

export default class PickPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <div className="pickPage">
        <h1>
          <mark>Recipe Generator</mark>
        </h1>
        <h2>Refresh the page to randomly generate a new recipe</h2>
        <RecipeDetails title="Margherita Pizza"></RecipeDetails>
      </div>
    );
  }
}
