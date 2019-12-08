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

  componentDidMount = async () => {
    // set loading to true
    // fetch random recipe
    // set state with recipe data
    // set loading to false
  };

  render() {
    return (
      <div className="pickPage">
        <h1>
          <mark>Recipe Generator</mark>
        </h1>
        <h2>Refresh the page to randomly generate a new recipe</h2>
        <RecipeDetails
          title="Margherita Pizza"
          author="Martha Stewart"
          ingredients={["dough", "sauce", "basil", "olive oil"]}
          directions={[
            "Place a pizza stone under the broiler; heat for 30 minutes. Working in 4 batches, dust 1 ball dough with semolina.",
            "transfer to a semolina-dusted pizza peel.",
            "Spread 1⁄2 cup sauce over dough, and distribute a quarter each of the cheese and basil leaves"
          ]}
          link="https://www.saveur.com/article/Recipes/Pizza-Margherita-Tomato-Basil-and-Mozzarella-Pizza/"
        ></RecipeDetails>
      </div>
    );
  }
}
