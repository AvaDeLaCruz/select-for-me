import React from "react";
import "../styles/AddPage.css";
import Loading from "./Loading";
import "../styles/Loading.css";
import SearchResult from "./SearchResult";
import RecipeDetails from "./RecipeDetails";

export default class AddPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			loading: false,
			userHasSearched: false,
			detailLink: "",
			db: []
		};
	}

	handleSearch = async event => {
		event.preventDefault();
		this.setState({ loading: true });
		let searchTerm = event.target.searchTerm.value;
		let url =
			"https://api.edamam.com/search?app_id=6a7eb714&app_key=2a86ad87280db39e7fb0fadd79840ecf&q=" +
			searchTerm;
		let response = await fetch(url);

		if (response.ok) {
			console.log("good");

			let json = await response.json();
			let results = json.hits;
			console.log(results);
			this.props.history.push(`/add/${searchTerm}`);
			this.setState({ results, userHasSearched: true });
		} else {
			console.log("other error");
			document.getElementById("notif").classList.toggle("visible");
			document.getElementById("notif").innerText =
				"Error: Could not complete search.";
			setTimeout(() => {
				document.getElementById("notif").classList.toggle("visible");
			}, 2500);
		}

		this.setState({ loading: false });
	};

	viewDetails = url => {
		url === this.state.detailLink
			? this.setState({ detailView: false, detailLink: "" })
			: this.setState({ detailView: true, detailLink: url });
	};

	favorite = async (title, author, servings, ingredients, directions, url) => {
		let data = {
			title: title,
			author: author,
			servings: servings,
			ingredients: ingredients,
			directions: directions,
			url: url
		};

		let apiURL = "https://cooking-companion-api.herokuapp.com/recipes";

		const response = await fetch(apiURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});

		document.getElementById("notif").classList.toggle("visible");

		if (response.ok) {
			let json = await response.json();
			console.log(json);
			document.getElementById("notif").innerText =
				"Recipe successfully added to favorites. ";
		} else {
			document.getElementById("notif").innerText =
				"Error: Could not add recipe to favorites. ";
		}

		setTimeout(() => {
			document.getElementById("notif").classList.toggle("visible");
		}, 2500);
	};

	render() {
		return (
			<div className="addPage">
				<span id="notif"></span>
				<h1>
					<mark>Add a Recipe</mark>
				</h1>
				<h2>Type a food name in the box below to search for a recipe</h2>
				<form className="searchForm" onSubmit={this.handleSearch}>
					<input
						type="search"
						className="searchBar"
						placeholder="Search for pizza, pasta, or other recipes..."
						name="searchTerm"
					></input>
					<input type="submit" className="searchButton" value="Search"></input>
				</form>
				{this.state.loading ? (
					<Loading />
				) : (
					<div className="searchResults">
						{this.state.results.length === 0 && this.state.userHasSearched ? (
							<p>No results found.</p>
						) : (
							this.state.results.map(result => {
								return (
									<React.Fragment key={result.recipe.url}>
										<SearchResult
											name={result.recipe.label}
											author={result.recipe.source}
											favorited={false}
											viewDetails={() => this.viewDetails(result.recipe.url)}
											favoriteFunction={() =>
												this.favorite(
													result.recipe.label,
													result.recipe.source,
													result.recipe.yield,
													result.recipe.ingredientLines,
													[],
													result.recipe.url
												)
											}
											canEdit={false}
										/>
										{this.state.detailView &&
										this.state.detailLink === result.recipe.url ? (
											<RecipeDetails
												title={result.recipe.label}
												author={result.recipe.source}
												servings={result.recipe.yield}
												ingredients={result.recipe.ingredientLines}
												directions={[]}
												link={result.recipe.url}
												canEdit={false}
											></RecipeDetails>
										) : (
											undefined
										)}
									</React.Fragment>
								);
							})
						)}
					</div>
				)}
			</div>
		);
	}
}
