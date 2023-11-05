let db = require("../data/index")


//DONE List all the elements 
let listUsers = function(req,res){
  res.json(db)
}

//DONE Get a specific element by its id 
let showUser = function(req,res){
  let UserID = req.params.id;
  let found;
  for(let i=0;i<db.length;i++){
    let user = db[i];
    if(user.id == UserID){
      found = user;
    }
  }
  res.json(found)
}

//DONE Add an element
let createUser = function (req,res){
  let idCounter = db.length+1
  req.body.id = idCounter
  let newID = req.body.id
  let newUser = {
    id: newID,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    website: req.body.website,
    company: req.body.company
    };

    db.push(newUser)
    res.json(newUser)
    
}

//DONE Update an element by id 
let updateUser = function(req,res){
  let id = req.params.id
  let name = req.body.name
  let username = req.body.username
  let  email =req.body.email
  let address = req.body.address
 let phone = req.body.phone
  let website = req.body.website
  let company = req.body.company
  let foundUser

  for (let i=0; i < db.length; i++){ 
    let user = db[i]
    if(id == user.id){
      user.name = name;
      user.username = username;
      user.email = email;
      user.address = address;
      user.phone = phone;
      user.website = website;
      user.company = company;
      foundUser = user;
  }
}
res.json(foundUser);
}

//DONE delete an element by id 
let deleteUser = function(req,res){
  let id = req.params.id;
  let foundIndex; 
  let deleteUser; 
  for (let i=0; i < db.length; i++){ 
    let item = db[i];
    if(id == item.id){
      foundIndex = i;
    }
  }
  if (foundIndex >= 0){
   deleteUser = db.splice(foundIndex, 1)[0];
  }

  res.json(deleteUser)

}
module.exports = {
  listUsers,
  showUser,
  createUser,
  updateUser,
  deleteUser
}