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
        <h2>Browse through your saved recipes or delete recipes</h2>
        <div className="searchResults">
          <SearchResult name="Pizza Dough" source="Martha Stewart" symbol="-" />
          <SearchResult name="Pizza Sauce" source="Lottie + Doof" symbol="-" />
          <SearchResult name="Pizza Pie" source="Saveur" symbol="-" />
        </div>
      </div>
    );
  }
}
