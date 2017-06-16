function Pizza(pieSize, meat, veg) {
  this.pieSize = 0;
  this.meat = 0;
  this.veg = 0;
  this.price = 0;
}


// var price = {
//   meat: "2",
//   veg: "1",
//   calC: function() {
//     return this.meat + this.veg;
//   }
// };

 var smallPie = {pieSize: "small", price: 16.00};
 var largePie = {pieSize: "large", price: 18.00};
 var vegCost = {veg: ["peppers", "olives", "onion", "tomato", "mushroom", "pineapple", "spinach", "fresh basil", "pepperoncini"], price: 1.00 };
 var meatCost = {meat: ["pepperoni", "sausage", "salami", "candian bacon", "ground beef", "chicken"], price: 2.00 };

var vegTopCost = "";
 for (var i = 0; i < vegCost.length; i += 1) {
   vegTopCost = vegCost[i];
// Pizza.prototype.pizzaCost = function() {
//   meat = "2";
//   veg = "1";
//   this.price = meat + veg;
//   return this.price;
// }
Pizza.prototype.pieBig = function() {
  if (this.pieSize === 16) {
    return this.pieSize = "16";
  } else {
    return this.pieSize = "18";
  }
}


Pizza.prototype.pizzaCost = function() {
   this.price = this.meat + "1" ;
   return this.price;

   console.log(price);
   console.log(this.price);

}

}
console.log()

////////////////////////DO NOT CROSS////////////////////////////

$(document).ready(function() {


$("form#new-order").submit(function(event) {
  event.preventDefault();
    // console.log(pieSize);
    var pieSize = [];
    var meat = [];
    var veg = [];
    var newPizza = new Pizza(pieSize, meat, veg);
    console.log(Pizza);

  $("input:checkbox[name=size]:checked").each(function() {
    var size = $(this).val();
    pieSize.push(size);
    console.log(size);
  });
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
  console.log(meat);

var diameter = (newPizza.pieBig);
$("#total").text(pieSize);
var price = (newPizza.pizzaCost);
$("#total").text(price);
});
});
