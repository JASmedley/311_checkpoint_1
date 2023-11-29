let db = require("../data/recipes")


//DONE List all the recipes 
let listRecipes = function(req,res){
  let sql = "SELECT id, name, ingredients, allergens, amounts, dietary FROM recipes"
  db.query(sql,function(error,results){
    if (error) {
      console.error("Failed to get entries:", error);
      res.sendStatus(500);
    }

    else {
     res.json(results)
    }
})
}

//DONE Get a specific recipe by its id 
let showRecipe = function(req,res){
  let RecipeID = req.params.id;
  let sql = "SELECT * FROM recipes WHERE id = ?"
  let params = [RecipeID]

  db.query(sql, params, function(error,results){
    if(error){
      console.error("Could not fetch entry", error);
      res.sendStatus(500);
    }
    else if (results.length == 0){
      res.sendStatus(undefined)
    }
    else if (results.length >1){
      console.error("fetched more than 1 results for id", RecipeID)
      res.sendStatus(500)
    }
    else {
      res.json(results[0])
    }
  })
}

//DONE Add a recipe
let createRecipe = function (req,res){
    let name = req.body.name;
    let ingredients = req.body.ingredients;
    let amounts = req.body.amounts;
    let allergens = req.body.allergens;
    let dietary = req.body.dietary;

    let sql = 'insert into recipes (name,ingredients,amounts,allergens,dietary) value(?,?,?,?,?)'
    let params = [name,ingredients,amounts,allergens,dietary]

    db.query(sql, params, function(error,results){
      if(error){
        console.error("Couldn't add entry to the database",error)
        console.log("results are",results)
        res.sendStatus(500)
      }
      else {
        res.sendStatus(204)
      }
    });
    
}

// DONE Update a recipe by id 
let updateRecipe = function(req,res){
let id = req.params.id
let name = req.body.name;
let ingredients = req.body.ingredients;
let amounts = req.body.amounts;
let allergens = req.body.allergens;
let dietary = req.body.dietary;
let sql = "UPDATE recipes SET name = ?, ingredients = ?, amounts = ?, allergens = ?, dietary = ? WHERE id = ?"
let params = [name, ingredients, amounts, allergens, dietary, id]
db.query(sql, params, function(error,result){
  if(error){
      console.error("Couldn't update recipe", error)
      res.sendStatus(500)
  }
  else {
      res.sendStatus(204)
  }
})
}

// delete a recipe by id 
let deleteRecipe = function(req,res){
  let id = req.params.id
  let sql = "DELETE FROM recipes WHERE id = ?"
  let params =[id]
  db.query(sql, params, function (error,result){
    if(error){
      console.error("Could not delete entry", error);
      res.sendStatus(500);
    }
    else {
      res.sendStatus(204)
    }
  })

}
module.exports = {
  listRecipes,
  showRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
}