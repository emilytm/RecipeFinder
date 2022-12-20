import recipes from "./recipes.js"

console.log(recipes[0])

renderRecipes(recipes)

function renderRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list')
    let recipeListHtml = ""
    recipeList.innerHTML = ""
    for (let recipe of recipes) {
        recipeListHtml += getRecipeHtml(recipe)
    }
    recipeList.innerHTML = recipeListHtml
}

function getRecipeHtml(recipe) {
    let newHtml = ""
    newHtml = `
        <div class="recipe-box">
            <img class="recipe-image" src="${recipe.image}" alt="Picture of selected recipe">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-source">${recipe.source}</p>
            <p class="recipe-tags">${recipe.tags}</p>
            <p class="recipe-time">${recipe.time.active}</p>
            <p class="recipe-ingredients">${recipe.ingredients}</p>
            <p class="recipe-made">${recipe.lastmade}</p>
         </div>
    `
    return newHtml
}