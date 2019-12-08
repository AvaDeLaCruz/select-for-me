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
      details: {},
      detailLink: ""
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
    let json = await response.json();
    let results = json.hits;
    console.log(results);
    this.setState({ results, loading: false, userHasSearched: true });
  };

  viewDetails = url => {
    url === this.state.detailLink
      ? this.setState({ detailView: false, detailLink: "" })
      : this.setState({ detailView: true, detailLink: url });
  };

  render() {
    return (
      <div className="addPage">
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
                  <React.Fragment key={result.recipe.uri}>
                    <SearchResult
                      name={result.recipe.label}
                      author={result.recipe.source}
                      symbol="+"
                      viewDetails={() => this.viewDetails(result.recipe.url)}
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
                      ></RecipeDetails>
                    ) : (
                      console.log("bye")
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
