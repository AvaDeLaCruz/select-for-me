import React from "react";
import "../styles/HomeAndNotFound.css";
import DocumentTitle from "react-document-title";

export default function HomePage() {
	return (
		<DocumentTitle title="Home Page">
			<div className="homePage">
				<h1>
					<mark>Cooking Companion</mark>
				</h1>
				<h2>Your one-stop-shop for deciding what’s for dinner.</h2>
				<h3>Select an option from the nav bar to get started.</h3>
			</div>
		</DocumentTitle>
	);
}
