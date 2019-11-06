# Project: Random Recipe Generator

## What problem are you trying to solve?

When coming to college, many students, myself included, struggle to juggle class, homework, extracurriculars, social life, and, of course, deciding what to eat for dinner every night. What my application will do is select a random recipe out of recipes the user inputs in order to help them decide what to eat for dinner.

## Who is the primary audience?

Myself, college students, and other adults who hate choosing what to make for dinner all the time!

## How will the project requirements be fulfilled?

I will have multiple pages, each with their own route. First, I am going to have an `AddRecipe` page on which there is a form that the user can use to add information about recipes, such as the name, ingredients, or a link to the recipe. Then, when the user clicks `submit`, the recipe will be saved to the database hosted on AWS using a `POST` request and there will be a notification that the recipe was successfully saved to their recipe book. The `GenerateRecipe` page will randomly select a recipe for the user to cook using a `GET` request on page load. There will also be a `RecipeBook` page which will use a `GET` request to retrieve all of the user's saved recipes. This page will have a nested route called `EditRecipe` which the user can navigate to in order to change the content of a recipe– my site will use a `PUT/PATCH` request to update the database. Finally, the user will be able to `DELETE` a recipe on the `RecipeBook` page by clicking an `x` next to any recipe they have entered. My reusable component will be my `recipe cards` which make up the `RecipeBook` because they could easily be repurposed to display non-recipe data and because I will need to access them in multiple parts of my application, like on the `GenerateRecipe` page.

## Which libraries do you think you will use and for what?

I'm going to use React Router for creating my site's routes. Other than that, I don't think I'm going to be using any libraries. That being said, I plan on using AWS on my backend to store the recipes and create APIs.
