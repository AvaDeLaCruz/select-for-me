import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";

import App from "./App";
import AddPage from "./components/AddPage";

import HomePage from "./components/HomePage";
import PickPage from "./components/PickPage";
import BookPage from "./components/BookPage";

it("assigns the correct document title to the Home Page", () => {
	render(<HomePage />);
	expect(document.title).toBe("Home Page");
});

it("assigns the correct document title to the Add Page", () => {
	render(<AddPage />);
	expect(document.title).toBe("Add A Recipe");
});

it("assigns the correct document title to the Pick Page", () => {
	render(<PickPage />);
	expect(document.title).toBe("Pick For Me");
});

it("assigns the correct document title to the Book Page", () => {
	render(<BookPage />);
	expect(document.title).toBe("Recipe Book");
});

it("renders the home page initially", () => {
	render(<App />);
	expect(document.title).toBe("Home Page");
});

it("renders the add page when you click the navbar link", () => {
	const { getByTestId } = render(<App />);
	fireEvent.click(getByTestId("add-navbar"));
	expect(document.title).toBe("Add A Recipe");
});

it("renders the pick page when you click the navbar link", () => {
	const { getByTestId } = render(<App />);
	fireEvent.click(getByTestId("pick-navbar"));
	expect(document.title).toBe("Pick For Me");
});

it("renders the book page when you click the navbar link", () => {
	const { getByTestId } = render(<App />);
	fireEvent.click(getByTestId("book-navbar"));
	expect(document.title).toBe("Recipe Book");
});

it("generates a random recipe or displays an error message", async () => {
	render(<PickPage />);

	const API = "https://cooking-companion-api.herokuapp.com";
	let response = await fetch(`${API}/recipes`);
	let recipes = await response.json();
	if (recipes.length === 0) {
	}
});
