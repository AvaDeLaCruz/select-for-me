import React from "react";
import "../styles/PickPage.css";
import Loading from "./Loading";
import "../styles/Loading.css";
import RecipeDetails from "./RecipeDetails";

const API = "https://cooking-companion-api.herokuapp.com";

export default class PickPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			randomRecipe: {}
		};
	}

	componentDidMount = async () => {
		let url = `${API}/recipes/random`;
		console.log(url);
		let response = await fetch(url);
		let randomRecipe = await response.json();
		console.log(randomRecipe);
		this.setState({ randomRecipe, loading: false });
		console.log(this.state.randomRecipe.ingredients);
	};

	render() {
		return (
			<div className="pickPage">
				<h1 className="pageTitle">
					<mark>Recipe Generator</mark>
				</h1>
				<h2>Refresh the page to randomly generate a new recipe</h2>
				{this.state.loading ? (
					<Loading />
				) : (
					<RecipeDetails
						title={this.state.randomRecipe.title}
						author={this.state.randomRecipe.author}
						ingredients={this.state.randomRecipe.ingredients}
						directions={this.state.randomRecipe.directions}
						link={this.state.randomRecipe.url}
					/>
				)}
			</div>
		);
	}
}
