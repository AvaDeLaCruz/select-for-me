import React from "react";
import "../styles/BookPage.css";
import "../styles/Loading.css";
import SearchResult from "./SearchResult";

export default class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <div className="bookPage">
        <h1>
          <mark>Recipe Book</mark>
        </h1>
        <h2>
          Browse through your saved recipes, edit recipes, or delete recipes
        </h2>
        <div className="searchResults">
          <SearchResult name="Pizza Dough" author="Martha Stewart" symbol="x" />
          <SearchResult name="Pizza Sauce" author="Lottie + Doof" symbol="x" />
          <SearchResult name="Pizza Pie" author="Saveur" symbol="x" />
        </div>
      </div>
    );
  }
}
