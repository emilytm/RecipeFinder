import recipes from "./recipes.js"

const params = new URLSearchParams(window.location.search)
const recipeDetails = document.getElementById('recipe-details')
const recipeDisplay = document.getElementById('recipe-display')
let recipeId = params.get('recipe')
let recipe = recipes.find(recipe => recipe.id === parseInt(recipeId))

document.addEventListener('DOMContentLoaded',renderRecipe(recipe),)

function renderRecipe(recipe) {
    let recipeBoxHtml = getRecipeBoxHtml(recipe)
    let recipeInstructionsHtml = getInstructionsHtml(recipe)
    recipeDetails.innerHTML = ""
    recipeDetails.innerHTML = recipeBoxHtml + recipeInstructionsHtml
}

function getRecipeBoxHtml(recipe) {
    let newHtml = ""
    newHtml = `
        <div class="recipe-box test" data-recipe=${recipe.id}>
            <img class="recipe-image" data-recipe=${recipe.id} src="${recipe.image}" alt="Picture of ${recipe.title}">
            <h3 class="recipe-title" data-recipe=${recipe.id}>${recipe.title}</h3>
            <p class="recipe-source grid-right" data-recipe=${recipe.id}>From: ${recipe.source}</p>
            <p class="recipe-tags" data-recipe=${recipe.id}>Tags: ${recipe.tags}</p>
            <p class="recipe-time grid-right" data-recipe=${recipe.id}>${recipe.time}</p>
            <p class="recipe-ingredients" data-recipe=${recipe.id}>Ingredient highlight: ${recipe.ingredients}</p>
            <p class="recipe-made grid-right" data-recipe=${recipe.id}>Last made: ${recipe.lastmade}</p>
         </div>
    `
    return newHtml
}

function getInstructionsHtml(recipe) {

    let instructionsHtml = "<ol>"
    recipe.instructions.forEach(step => {
        instructionsHtml += `
            <li>${step}</li>
        `
    });
    console.log(instructionsHtml)
    instructionsHtml += "</ol"

    return instructionsHtml
}