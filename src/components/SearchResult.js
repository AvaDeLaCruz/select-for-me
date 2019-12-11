import React from "react";
import "../styles/SearchResult.css";

export default function SearchResult(props) {
	return (
		<div className="searchResult" onClick={props.onClick}>
			{props.name}
			<div className="resultAuthor">{props.author}</div>

			<div className="resultButtons">
				<button
					className="favoriteButton"
					title="un/favorite recipe"
					onClick={props.favoriteFunction}
				>
					<img src={require("../images/trash.png")}></img>
				</button>

				<button className="editButton">
					<img src={require("../images/edit.png")}></img>
				</button>
				<button
					className="detailsButton"
					title="more details"
					onClick={props.viewDetails}
				>
					<img src={require("../images/details.png")}></img>
				</button>
			</div>
		</div>
	);
}
