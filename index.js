import recipes from "./recipes.js"

console.log(recipes[0])

renderRecipes(recipes)

const searchBar = document.getElementById('search')
searchBar.addEventListener('submit',function(e){
    e.preventDefault()

    let searchTerm = searchBar.elements.search.value
    searchRecipes(searchTerm.trim())
    searchBar.elements.search.value = ""
})

document.addEventListener('click',function(e){
    if(e.target.dataset.recipe){
        console.log("RECIPE CLICKED")
    } else {
        console.log("SOMETHING CLICKED")
    }

    console.log(e)
})

function searchRecipes(searchTerm) {
    console.log(searchTerm)
    let searchResults = []

    searchResults = recipes.filter(recipe => {
        if (recipe.title.includes(searchTerm)){
            console.log("Found ",searchTerm," in ",recipe.title)
            return true
        } else {
            console.log("Did not find ",searchTerm," in ",recipe.title)
            return false
        }
    })
    console.log(searchResults)
    //search recipe by recipe to see if it includes the term
    //display the array of new recipes in the list
}

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