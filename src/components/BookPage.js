import React from "react";
import "../styles/BookPage.css";
import Loading from "./Loading";
import "../styles/Loading.css";

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
        <h2>Search through your saved recipes</h2>
      </div>
    );
  }
}
