// **DISPLAY ITEMS HERE** //

var express = require("express");

var app = express();
var PORT = 8080;

// **PRODUCT VALUES** //

var products = [{
  id: "HedgehogIgloo",
  name: "Hedgehog Igloo",
  department_name: "Pets",
  price: "$20.99",
  stock_quantity: 20,
}, {

var products = [{
    id: "HedgehogSleepingbag",
    name: "Hedgehog Sleepingbag",
    department_name: "Pets",
    price: "$6.99",
    stock_quantity: 25,
}, {

var products = [{
    id: "Paperbedding",
    name: "Paper Bedding",
    department_name: "Pets",
    price: "25.99",
    stock_quantity: 20,
}, {
var products = [{
    id: "MealWorms",
    name: "Meal Worms",
    department_name: "Pets",
    price: "$6.99",
    stock_quantity: 15,
}, {

var products = [{
    id: "CatnipMouse",
    name: "Catnip Mouse",
    department_name: "Pets",
    price: "2.99",
    stock_quantity: 9,
    }, {
           
      



// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to BAMazon!");
});

app.get("/:products", function(req, res) {
  var chosen = req.params.products;


  console.log(chosen);
  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
