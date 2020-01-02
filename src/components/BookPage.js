import React from "react";
import SearchResult from "./SearchResult";
import RecipeDetails from "./RecipeDetails";
import Loading from "./Loading";
import "../styles/BookPage.css";
import "../styles/Loading.css";
import DocumentTitle from "react-document-title";

const API = "https://cooking-companion-api.herokuapp.com";

export default class BookPage extends React.Component {
  _isMounted = false;

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
    let response = await fetch(url);
    let favorites = await response.json();
    return favorites;
  }

  async componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.setState({ loading: true });
    }
    let favorites = await this.retrieveFavorites();
    if (this._isMounted) {
      this.setState({ favorites, loading: false });
    }
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  viewDetails = url => {
    if (this._isMounted) {
      url === this.state.detailLink
        ? this.setState({ detailView: false, detailLink: "" })
        : this.setState({ detailView: true, detailLink: url });
    }
  };

  unfavorite = async (title, author) => {
    let url = `${API}/recipes/${author}/${title}`;
    const response = await fetch(url, { method: "DELETE" });
    if (response.ok) {
      this.showNotification("Recipe successfully removed from favorites.");
      this.reloadFavorites();
    } else {
      this.showNotification("Error: Could not unfavorite this recipe.");
    }
  };

  reloadFavorites = async () => {
    let favorites = await this.retrieveFavorites();
    if (this._isMounted) {
      this.setState({ favorites });
    }
  };

  showNotification = message => {
    document.getElementById("notif").classList.toggle("visible");
    document.getElementById("notif").innerText = message;
    setTimeout(() => {
      document.getElementById("notif").classList.toggle("visible");
    }, 2500);
  };

  render() {
    return (
      <DocumentTitle title="Recipe Book">
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
                <p data-testid="no-book-results">
                  No favorites found. Add some recipes to your recipe book using
                  the Add Recipe page.
                </p>
              ) : (
                <div data-testid="favorited-recipes">
                  {this.state.favorites.map(favorite => {
                    return (
                      <React.Fragment key={favorite.url}>
                        <SearchResult
                          name={favorite.title}
                          author={favorite.author}
                          favorited={true}
                          viewDetails={() => this.viewDetails(favorite.url)}
                          favoriteFunction={() =>
                            this.unfavorite(favorite.title, favorite.author)
                          }
                          canEdit={true}
                          showNotification={this.showNotification}
                          reloadFavorites={this.reloadFavorites}
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
                            canEdit={true}
                          />
                        ) : (
                          undefined
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </DocumentTitle>
    );
  }
}
