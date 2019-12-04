import React from "react";
import "./AddPage.css";

export default class AddPage extends React.Component {
  handleSearch = event => {
    event.preventDefault();
    console.log(event.target.searchTerm.value);
  };

  render() {
    return (
      <div className="addPage">
        <h1>Add a Recipe</h1>
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
      </div>
    );
  }
}
