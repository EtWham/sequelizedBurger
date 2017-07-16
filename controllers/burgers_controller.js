var express = require("express");
var methodOverride = require('method-override');
var db = require('./../models');
var router = express.Router();


// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  var burgers = [];
  var devouredBurgers = [];
  db.Burger.findAll({}).then(function(data){
    for(var i = 0; i < data.length; i++){
      if(data[i].dataValues.devoured === false){
        burgers.push(data[i].dataValues);
      }
      else{
        devouredBurgers.push(data[i].dataValues);
      }
    }
    res.render('index', {
      burgers: burgers,
      eatenBurgers: devouredBurgers
    });
  })
});

router.post("/", function(req, res) {
  var newBurger = req.body.burger_name;
  console.log("Burger added!");
  db.Burger.create({
    burger_name: newBurger
  }).then(function(data){
    res.redirect('/');
  })
});


router.put("/:eatBurger", function(req, res) {
var burgerToEat = req.params.burger_name;
  db.Burger.update({
    devoured: true
  },
  {
    where: {
      burger_name: burgerToEat
    }
  }).then(function(data){
    res.redirect('/');
  })
});

module.exports = router;
