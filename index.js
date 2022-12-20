import recipes from "./recipes.js"

console.log(recipes[0])

renderRecipes(recipes)

document.addEventListener('click',function(e){
    if(e.target.dataset.recipe){
        console.log("RECIPE CLICKED")
    } else {
        console.log("SOMETHING CLICKED")
    }
})

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
        <div class="recipe-box" data-recipe=${recipe.id}>
            <img class="recipe-image" data-recipe=${recipe.id} src="${recipe.image}" alt="Picture of selected recipe">
            <h3 class="recipe-title" data-recipe=${recipe.id}>${recipe.title}</h3>
            <p class="recipe-source" data-recipe=${recipe.id}>${recipe.source}</p>
            <p class="recipe-tags" data-recipe=${recipe.id}>${recipe.tags}</p>
            <p class="recipe-time" data-recipe=${recipe.id}>${recipe.time.active}</p>
            <p class="recipe-ingredients" data-recipe=${recipe.id}>${recipe.ingredients}</p>
            <p class="recipe-made" data-recipe=${recipe.id}>${recipe.lastmade}</p>
         </div>
    `
    return newHtml
}