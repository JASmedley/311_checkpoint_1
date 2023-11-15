let express = require("express");

let router = express.Router()
let controller = require("../controllers/recipeControllers")


//Return all users
router.get("/recipes", controller.listRecipes)
//Return just the user that matches the path param (id)
router.get("/recipes/:id", controller.showRecipe)
//Create a new user (sampleUser).
router.post("/recipes", controller.createRecipe)
//Update one user matching the path param (id). 
router.put("/recipes/:id", controller.updateRecipe)
//Delete one user by its id
router.delete("/recipes/:id", controller.deleteRecipe)


module.exports = router;