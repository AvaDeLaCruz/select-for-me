import React from "react";
import "../styles/SearchResult.css";

export default function SearchResult(props) {
  return <div className="searchResult">{props.name}</div>;
}
