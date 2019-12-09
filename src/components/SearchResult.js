import React from "react";
import "../styles/SearchResult.css";

export default function SearchResult(props) {
	return (
		<div className="searchResult">
			{props.name}
			<button
				className="favoriteButton"
				title="un/favorite recipe"
				onClick={props.favoriteFunction}
			>
				{props.symbol}
			</button>
			<button
				className="detailsButton"
				title="more details"
				onClick={props.viewDetails}
			>
				∙∙∙
			</button>
			<div className="resultAuthor">{props.author}</div>
		</div>
	);
}
