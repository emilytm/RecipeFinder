import recipes from "./recipes.js"

const params = new URLSearchParams(window.location.search)
const recipeDetails = document.getElementById('recipe-details')
const recipeDisplay = document.getElementById('recipe-display')
let recipeId = params.get('recipe')
let recipe = recipes.find(recipe => recipe.id === parseInt(recipeId))

document.addEventListener('DOMContentLoaded',findRecipe(recipeId))

function findRecipe(recipeId) {
    let isValidId = checkValidRecipe(recipeId)
    if (isValidId === 2) {
        getRandomRecipe()
    } else if (isValidId === 1) {
        renderRecipe(recipes[recipeId])
    } else {
        getRandomRecipe()
    }
}

function checkValidRecipe(recipeId) {
    if (recipeId === "explore") {
        return 2
    } else if (recipes.find(recipe => recipe.id === parseInt(recipeId))) {
        return 1
    } else {
        return 0
    }
}

function getRandomRecipe(){
    let ids = recipes.map(recipe => recipe.id)
    let index = Math.floor(Math.random()*(ids.length))
    renderRecipe(recipes[index])
}

function renderRecipe(recipe) {
    let recipeBoxHtml = getRecipeBoxHtml(recipe)
    let recipeInstructionsHtml = getInstructionsHtml(recipe)
    recipeDetails.innerHTML = ""
    recipeDetails.innerHTML = recipeBoxHtml + recipeInstructionsHtml
}

function getRecipeBoxHtml(recipe) {
    let highlightedIngredientsHtml = getHighlightedIngredients(recipe)
    let newHtml = `
        <div class="recipe-box" data-recipe=${recipe.id}>
            <img class="recipe-image" data-recipe=${recipe.id} src="${recipe.image}" alt="Picture of ${recipe.title}">
            <h3 class="recipe-title" data-recipe=${recipe.id}>${recipe.title}</h3>
            <p class="recipe-source grid-right" data-recipe=${recipe.id}>From: ${recipe.source}</p>
            <p class="recipe-tags" data-recipe=${recipe.id}>Tags: ${recipe.tags}</p>
            <p class="recipe-time grid-right" data-recipe=${recipe.id}>${recipe.time}</p>
            <p class="recipe-ingredients" data-recipe=${recipe.id}>Ingredient highlight: ${highlightedIngredientsHtml}</p>
            <p class="recipe-made grid-right" data-recipe=${recipe.id}>Last made: ${recipe.lastmade}</p>
         </div>
    `
    return newHtml
}

function getHighlightedIngredients(recipe) {
    let highlightedIngredients = (recipe.ingredients.filter(ingred => ingred.highlight === false))
    let highlightedIngredientsString = highlightedIngredients.map(ing => ing.name).join(', ')
    return highlightedIngredientsString
}


function getInstructionsHtml(recipe) {
    let instructionsHtml = "<ol>"
    recipe.instructions.forEach(step => {
        instructionsHtml += `
            <li>${step}</li>
        `
    });
    instructionsHtml += `</ol><h5><a href="${recipe.link}" target="_blank">See Original Recipe</a></h5>`
    return instructionsHtml
}