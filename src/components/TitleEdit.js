import React from "react";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
const API = "https://cooking-companion-api.herokuapp.com";

export default class TitleEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			previousValue: props.title,
			currentValue: props.title,
			errorMessage: "",
			errorMessageVisibility: "hidden"
		};
	}

	saveToDatabase = async () => {
		// save new title to db using PUT
		let author = this.props.author;
		let originalTitle = this.props.title;
		let requestBody = { title: this.state.currentValue };

		let url = `${API}/recipes/${author}/${originalTitle}`;
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(requestBody)
		});
		if (response.ok) {
			// let updatedRecipe = await response.json();
			this.props.showNotification("Recipe edits sucessfully saved.");
			this.props.reloadFavorites();
		} else {
			this.props.showNotification("Error updating recipe.");
		}
	};

	noDuplicateRecipes = async () => {
		let author = this.props.author;
		let newTitle = this.state.currentValue;
		let url = `${API}/recipes/${author}/${newTitle}`;
		let response = await fetch(url);
		if (response.status === 404) {
			// recipe is ok to add bc identical one not in database
			return true;
		} else {
			this.setState({
				errorMessage:
					"A recipe with that title and author already exists in your book. Please choose another name."
			});
			return false;
		}
	};

	handleKeyUp = async event => {
		const { keyCode } = event;
		const { currentValue, previousValue } = this.state;

		if (keyCode === ENTER_KEY) {
			// if title didn't change
			if (this.props.title === this.state.currentValue) {
				this.setState({ currentValue: previousValue });
				this.props.turnOffEditMode();
			} else {
				// if the new title is blank and invalid
				if (this.state.currentValue === "") {
					this.setState({
						errorMessage: "Recipes must have a title. Please enter a title.",
						errorMessageVisibility: "visible"
					});
				}
				// if title changed and new title is valid
				else if (await this.noDuplicateRecipes()) {
					this.setState({ previousValue: currentValue });
					this.saveToDatabase();
					this.props.updateTitle(currentValue);
					this.props.turnOffEditMode();
				} else {
					//if the new title is a duplicate and is invalid
					this.setState({ errorMessageVisibility: "visible" });
				}
			}
		} else if (keyCode === ESCAPE_KEY) {
			this.setState({ currentValue: previousValue });
			this.props.turnOffEditMode();
		}
	};

	handleChange = event => {
		this.setState({
			currentValue: event.target.value
		});
	};

	render() {
		return (
			<>
				<input
					type="text"
					value={this.state.currentValue}
					onKeyUp={this.handleKeyUp}
					onChange={this.handleChange}
					data-testid="title-input"
					autoFocus
				></input>
				<span
					className={`${this.state.errorMessageVisibility} errorMessage`}
					data-testid="title-input-error"
				>
					{this.state.errorMessage}
				</span>
			</>
		);
	}
}
