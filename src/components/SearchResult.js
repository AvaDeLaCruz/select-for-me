import React from "react";
import "../styles/SearchResult.css";

export default function SearchResult(props) {
  return (
    <div className="searchResult">
      {props.name}
      <button className="favoriteButton" title="un/favorite recipe">
        {props.symbol}
      </button>
      <button className="detailsButton" title="more details">
        ∙∙∙
      </button>
      <div className="resultSource">{props.source}</div>
    </div>
  );
}
