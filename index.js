import recipes from "./recipes.js"

const menu =  document.getElementById('menu')
const modal = document.getElementById('modal')
const searchBar = document.getElementById('search')
const footer = document.createElement('footer')

footer.innerHTML = `
    <footer>
    <h5>Made by <a href="https://github.com/emilytm" target="_blank">emilytm</a></h5>
    <h5>Get cooking.</h5>
    </footer>
    `

document.addEventListener("DOMContentLoaded",
    renderRecipes(recipes,false),
    document.body.appendChild(footer.content)
)

searchBar.addEventListener('submit',function(e){
    e.preventDefault()
    let searchTerm = searchBar.elements.search.value
    searchRecipes(searchTerm.trim())
    searchBar.elements.search.value = ""
})

document.addEventListener('click',function(e){
    if(e.target.dataset.recipe){
        let recId = parseInt(e.target.dataset.recipe)
        let recLink = recipes.find(recipe => recipe.id === recId).link
        window.open(recLink, '_blank').focus()
        menu.classList.add('hidden')
        modal.classList.add('hidden')
    } else if (e.target.dataset.menu === 'menu') {
        menu.classList.toggle('hidden') 
    } else if ((e.target.dataset.menu === 'login' || e.target.dataset.menu === 'signup')){
        modal.classList.toggle('hidden')
        menu.classList.toggle('hidden') 
    } else if (e.target.dataset.clear){
        renderRecipes(recipes,false)
    } else {
        menu.classList.add('hidden')
        modal.classList.add('hidden')
    }
})

function searchRecipes(searchTerm) {
    let searchResults = []
    searchResults = recipes.filter(recipe => {
        let recipeValues = Object.values(recipe)
        for (let value of recipeValues) {
            if(typeof value === 'string'){
                if(value.includes(searchTerm)){
                    return true
                }
            } 
        }
    })
    renderRecipes(searchResults,true)
}

function renderRecipes(recipes,results) {
    const recipeList = document.getElementById('recipe-list')
    const myRecipesTitle =`<h2 class="list-title">My Recipes</h2>`
    const ifResultsTitle = `
        <h2 class="list-title">${recipes.length} Search Results <span data-clear='clear'>Clear</span></h2>
    `
    let recipeListHtml = ""
    
    if(results === true) {
        recipeListHtml += ifResultsTitle
    } else {
        recipeListHtml += myRecipesTitle
    }
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