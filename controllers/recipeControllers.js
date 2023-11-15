let db = require("../data/recipes")


//DONE List all the recipes 
let listRecipes = function(req,res){
  res.json(db)
}

//DONE Get a specific recipe by its id 
let showRecipe = function(req,res){
  let RecipeID = req.params.id;
  let found;
  for(let i=0;i<db.length;i++){
    let recipe = db[i];
    if(recipe.id == RecipeID){
      found = recipe;
    }
  }
  res.json(found)
}

//DONE Add a recipe
let createRecipe = function (req,res){
  let idCounter = db.length+1
  req.body.id = idCounter
  let newID = req.body.id
  let newRecipe = {
    id: newID,
    name: req.body.name,
    ingredients: req.body.ingredients,
    amounts: req.body.amounts,
    allergens: req.body.allergens,
    dietary: req.body.dietary
    };

    db.push(newRecipe)
    res.json(newRecipe)
    
}

//DONE Update a recipe by id 
let updateRecipe = function(req,res){
  let id = req.params.id
  let name = req.body.name
  let ingredients = req.body.ingredients
  let  allergens =req.body.allergens
  let amounts = req.body.amounts
  let dietary = req.body.dietary
  let foundRecipe

  for (let i=0; i < db.length; i++){ 
    let recipe = db[i]
    if(id == user.id){
      recipe.name = name;
      recipe.ingredients = ingredients;
      recipe.amounts = amounts;
      recipe.allergens = allergens;
      recipe.dietary = dietary;
      foundRecipe = recipe;
  }
}
res.json(foundRecipe);
}

//DONE delete a recipe by id 
let deleteRecipe = function(req,res){
  let id = req.params.id;
  let foundIndex; 
  let deleteRecipe; 
  for (let i=0; i < db.length; i++){ 
    let recipe = db[i];
    if(id == recipe.id){
      foundIndex = i;
    }
  }
  if (foundIndex >= 0){
    deleteRecipe = db.splice(foundIndex, 1)[0];
  }

  res.json(deleteRecipe)

}
module.exports = {
  listRecipes,
  showRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
}