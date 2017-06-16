function Pizza(pieSize, meat, veg) {
  this.pieSize = 0;
  this.meat = 0;
  this.veg = 0;
  this.price = 0;
}





 var smallPie = {pieSize: "small", price: 16.00};
 var largePie = {pieSize: "large", price: 18.00};
 var vegCost = {veg: ["peppers", "olives", "onion", "tomato", "mushroom", "pineapple", "spinach", "fresh basil", "pepperoncini"], price: 1.00 };
 var meatCost = {meat: ["pepperoni", "sausage", "salami", "candian bacon", "ground beef", "chicken"], price: 2.00 };




Pizza.prototype.pizzaCost = function() {
   this.price = meatCost + "1" ;
   return this.price;
}


console.log(Pizza);




////////////////////////DO NOT CROSS////////////////////////////

$(document).ready(function() {


$("form#new-order").submit(function(event) {
  event.preventDefault();
    // console.log(pieSize);
    var pieSize = [];
    var meat = [];
    var veg = [];
    var newPizza = new Pizza(pieSize, meat, veg);

    console.log(meat);
  $("input:checkbox[name=size]:checked").each(function() {
    var size = $(this).val();
    pieSize.push(size);
    console.log(size);
  // });
  $("input:checkbox[name=meat]:checked").each(function() {
    var meatTop = $(this).val();
    meat.push(meatTop);
    console.log();
  // });
  $("input:checkbox[name=veg]:checked").each(function() {
    var vegTop = $(this).val();
    veg.push(vegTop);
    console.log();
  });

    console.log(veg);
  });

  console.log(meat);
  console.log(Pizza);


var price = (newPizza.pizzaCost);
$("ul#total").text(price);
});
});
});
