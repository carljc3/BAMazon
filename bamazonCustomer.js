// **DISPLAY ITEMS HERE** //

var express = require("express");

var app = express();
var PORT = 8080;

// **PRODUCT VALUES** //

var PRODUCTS = [{
  item_id: "001",
  product_name: "Galaxy Yoga Pants",
  department_name: "Lululemon",
  price: "$98.00",
  stock_quantity: "5",
}, {

var PRODUCTS = [{
  item_id: "002",
  product_name: "Black Thermal Yoga Pants",
  department_name: "Lululemon",
  price: "$98.00",
  stock_quantity: "8",
}, {

var PRODUCTS = [{
  item_id: "003",
  product_name: "Galaxy Duffle Bag",
  department_name: "Lululemon",
  price: "$70.00",
  stock_quantity: "3",
}, {

var PRODUCTS = [{
  item_id: "004",
  product_name: "Pink Yoga Mat",
  department_name: "Lululemon",
  price: "$36.00",
  stock_quantity: "10",
}, {

var PRODUCTS = [{
  item_id: "005",
  product_name: "Blue Yoga Mat",
  department_name: "Lululemon",
  price: "$36.00",
  stock_quantity: "10",
}, {

var PRODUCTS = [{
  item_id: "006",
  product_name: "Elastic Non-slip Headbands",
  department_name: "Lululemon",
  price: "15.00",
  stock_quantity: "12",
}, {

var PRODUCTS = [{
  item_id: "007",
  product_name: "Yoga Strap",
  department_name: "Lululemon",
  price: "$20.00",
  stock_quantity: "14",
}, {

var PRODUCTS = [{
  item_id: "008",
  product_name: "Galaxy Yoga Bra",
  department_name: "Lululemon",
  price: "$40.00",
  stock_quantity: "8",
}, {

var PRODUCTS = [{
  item_id: "009",
  product_name: "Black Yoga Bra",
  department_name: "Lululemon",
  price: "$40.00",
  stock_quantity: "8",
}, {

var PRODUCTS = [{
  item_id: "010",
  product_name: "Yoga Towel",
  department_name: "Lululemon",
  price: "$10.00",
  stock_quantity: "18",
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
