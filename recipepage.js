import recipes from "./recipes.js"

const params = new URLSearchParams(window.location.search)
let recipeId = params.get('recipe')
let recipeObject = recipes.find(recipe => recipe.id === parseInt(recipeId))

