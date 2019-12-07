import React from "react";
import "../styles/AddPage.css";
import Loading from "./Loading";
import "../styles/Loading.css";
import SearchResult from "./SearchResult";

export default class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false
    };
  }

  handleSearch = async event => {
    event.preventDefault();
    // this.setState({ loading: true });
    // let searchTerm = event.target.searchTerm.value;
    // let url =
    //   "https://api.edamam.com/search?app_id=6a7eb714&app_key=2a86ad87280db39e7fb0fadd79840ecf&q=" +
    //   searchTerm;
    // let response = await fetch(url);
    // let json = await response.json();
    // let results = json.hits;
    // console.log(results);
    // this.setState({ results, loading: false });
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
        <div className="searchResults">
          <SearchResult name="Pizza Dough" />
          <SearchResult name="Pizza Sauce" />
          <SearchResult name="Pizza Pie" />
        </div>

        {/* {this.state.loading ? (
          <Loading />
        ) : (
          this.state.results.map(result => {
            return <SearchResult name={result.recipe.label} />;
            // <div key={result.recipe.uri}>{result.recipe.label}</div>;
          })
        )} */}
      </div>
    );
  }
}
