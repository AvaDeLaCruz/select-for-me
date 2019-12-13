import React from "react";
import "../styles/PickPage.css";
import Loading from "./Loading";
import "../styles/Loading.css";
import RecipeDetails from "./RecipeDetails";
import DocumentTitle from "react-document-title";

const API = "https://cooking-companion-api.herokuapp.com";

export default class PickPage extends React.Component {
	_isMounted = false;

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			randomRecipe: {}
		};
	}

	componentDidMount = async () => {
		this._isMounted = true;

		let url = `${API}/recipes/random`;
		let response = await fetch(url);
		if (response.status === 404) {
			if (this._isMounted) {
				this.setState({ loading: false });
				this.showNotification("Error: Could not generate a random recipe.");
			}
		} else {
			let randomRecipe = await response.json();
			if (this._isMounted) {
				this.setState({ randomRecipe, loading: false });
				this.showNotification("Successfully generated a new recipe.");
			}
		}
	};

	showNotification = message => {
		document.getElementById("notif").classList.toggle("visible");
		document.getElementById("notif").innerText = message;
		setTimeout(() => {
			document.getElementById("notif").classList.toggle("visible");
		}, 2500);
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	};

	render() {
		return (
			<DocumentTitle title="Pick For Me">
				<div className="pickPage">
					<span id="notif"></span>

					<h1 className="pageTitle">
						<mark>Recipe Generator</mark>
					</h1>
					<h2>Refresh the page to randomly generate a new recipe</h2>
					{this.state.loading ? (
						<Loading />
					) : Object.entries(this.state.randomRecipe).length === 0 ? (
						<p data-testid="cant-pick">
							You don't have any saved recipes. Add some recipes to your recipe
							book to use this feature.
						</p>
					) : (
						<RecipeDetails
							title={this.state.randomRecipe.title}
							author={this.state.randomRecipe.author}
							servings={this.state.randomRecipe.servings}
							ingredients={this.state.randomRecipe.ingredients}
							directions={this.state.randomRecipe.directions}
							link={this.state.randomRecipe.url}
							canEdit={true}
							data-testid="random-recipe"
						/>
					)}
				</div>
			</DocumentTitle>
		);
	}
}
