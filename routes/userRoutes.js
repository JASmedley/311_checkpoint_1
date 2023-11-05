let express = require("express");

let router = express.Router()
let controller = require("../controllers/userControllers")


//Return all users
router.get("/users", controller.listUsers)
//Return just the user that matches the path param (id)
router.get("/users/:id", controller.showUser)
//Create a new user (sampleUser).
router.post("/users", controller.createUser)
//Update one user matching the path param (id). 
router.put("/users/:id", controller.updateUser)
//Delete one user by its id
router.delete("/users/:id", controller.deleteUser)


module.exports = router;