import React from "react";
import SearchResult from "./SearchResult";
import RecipeDetails from "./RecipeDetails";
import Loading from "./Loading";
import "../styles/BookPage.css";
import "../styles/Loading.css";

const API = "https://cooking-companion-api.herokuapp.com";

export default class BookPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			favorites: [],
			detailLink: ""
		};
	}

	async retrieveFavorites() {
		let url = `${API}/recipes`;
		console.log(url);
		let response = await fetch(url);
		let favorites = await response.json();
		console.log(favorites);
		return favorites;
	}

	async componentDidMount() {
		this.setState({ loading: true });
		let favorites = await this.retrieveFavorites();
		this.setState({ favorites, loading: false });
	}

	viewDetails = url => {
		url === this.state.detailLink
			? this.setState({ detailView: false, detailLink: "" })
			: this.setState({ detailView: true, detailLink: url });
	};

	unfavorite = async (title, author) => {
		let url = `${API}/recipes/${author}/${title}`;
		const response = await fetch(url, { method: "DELETE" });
		document.getElementById("notif").classList.toggle("visible");
		if (response.ok) {
			document.getElementById("notif").innerText =
				"Recipe successfully removed from favorites. ";
			let favorites = await this.retrieveFavorites();
			this.setState({ favorites });
		} else {
			document.getElementById("notif").innerText =
				"Error: Could not unfavorite this recipe.";
		}
		setTimeout(() => {
			document.getElementById("notif").classList.toggle("visible");
		}, 2500);
	};

	sayHi = () => {
		console.log("hi");
	};

	render() {
		return (
			<div className="bookPage">
				<span id="notif"></span>

				<h1>
					<mark>Recipe Book</mark>
				</h1>
				<h2>
					Browse through your saved recipes, edit recipes, or delete recipes
				</h2>

				{this.state.loading ? (
					<Loading />
				) : (
					<div className="searchResults">
						{this.state.favorites.length === 0 ? (
							<p>
								No favorites found. Add some recipes to your recipe book using
								the Add Recipe page.
							</p>
						) : (
							this.state.favorites.map(favorite => {
								return (
									<React.Fragment key={favorite.url}>
										<SearchResult
											name={favorite.title}
											author={favorite.author}
											symbol="-"
											viewDetails={() => this.viewDetails(favorite.url)}
											favoriteFunction={() =>
												this.unfavorite(favorite.title, favorite.author)
											}
											onClick={() =>
												this.sayHi(favorite.title, favorite.author)
											}
										/>
										{this.state.detailView &&
										this.state.detailLink === favorite.url ? (
											<RecipeDetails
												title={favorite.title}
												author={favorite.author}
												servings={favorite.servings}
												ingredients={favorite.ingredients}
												directions={favorite.directions}
												link={favorite.url}
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
