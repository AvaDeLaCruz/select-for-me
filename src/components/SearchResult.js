import React from "react";
import TitleEdit from "./TitleEdit";
import "../styles/SearchResult.css";

export default class SearchResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			currentTitle: this.props.name
		};
	}

	enableEditMode = () => {
		this.setState({ editMode: true });
	};

	turnOffEditMode = () => {
		this.setState({ editMode: false });
	};

	updateTitle = newTitle => {
		this.setState({ currentTitle: newTitle });
	};

	render() {
		return (
			<div className="searchResult" onClick={this.props.onClick}>
				{this.state.editMode ? (
					<TitleEdit
						title={this.state.currentTitle}
						author={this.props.author}
						turnOffEditMode={this.turnOffEditMode}
						updateTitle={this.updateTitle}
						showNotification={this.props.showNotification}
						reloadFavorites={this.props.reloadFavorites}
					/>
				) : (
					this.state.currentTitle
				)}

				<div className="resultAuthor">{this.props.author}</div>

				<div className="resultButtons">
					<button
						className="favoriteButton"
						title="un/favorite recipe"
						onClick={this.props.favoriteFunction}
					>
						{this.props.favorited ? (
							<img src={require("../images/filledHeart.png")}></img>
						) : (
							<img src={require("../images/heart.png")}></img>
						)}
					</button>

					{this.props.canEdit ? (
						<button className="editButton" onClick={this.enableEditMode}>
							<img src={require("../images/edit.png")}></img>
						</button>
					) : (
						undefined
					)}

					<button
						className="detailsButton"
						title="more details"
						onClick={this.props.viewDetails}
					>
						<img src={require("../images/details.png")}></img>
					</button>
				</div>
			</div>
		);
	}
}
