function Pizza(pieSize, meat, veg) {
  this.pieSize = 0;
  this.meat = 0;
  this.veg = 0;
  // this.price = price;
}





// var smallPie = {pieSize: "small", price: 16.00};
// var largePie = {pieSize: "large", price: 18.00};
// var vegCost = {veg: ["peppers", "olives", "onion", "tomato", "mushroom", "pineapple", "spinach", "fresh basil", "pepperoncini"], price: 1.00 };
// var meatCost = {meat: ["pepperoni", "sausage", "salami", "candian bacon", "ground beef", "chicken"], price: 2.00 };
// var cost = (veg + meat + smallPie + largePie)
Pizza.prototype.pizzaCost = function() {
  return this.price = this.pieSize + this.meat + this.veg;
}
console.log();




////////////////////////DO NOT CROSS////////////////////////////

$(document).ready(function() {


$("form#new-order").submit(function(event) {
  event.preventDefault();
  var pieSize = [];
    console.log(pieSize);
  $("input:checkbox[name=size]:checked").each(function() {
    var size = $(this).val();
    pieSize.push(size);
    console.log(pieSize);
  // });
  var meat = [];
  $("input:checkbox[name=meat]:checked").each(function() {
    var meatTop = $(this).val();
    meat.push(meatTop);
  // });
  var veg = [];
  $("input:checkbox[name=veg]:checked").each(function() {
    var vegTop = $(this).val();
    veg.push(vegTop);
    console.log(veg);
    var newPizza = new Pizza(meat, veg, pieSize);
  });
  console.log(meat);
  console.log(Pizza);

$("ul#total").text("");
});
});
});
});
