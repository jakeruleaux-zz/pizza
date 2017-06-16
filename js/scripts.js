function Pizza(pieSize, meat, veg) {
  this.pieSize = 0;
  this.meat = 0;
  this.veg = 0;
  this.price = 0;
}

Pizza.prototype.vegCost = function() {
  this.veg = {veg: ["peppers", "olives", "onion", "tomato", "mushroom", "pineapple", "spinach", "fresh basil", "pepperoncini"], += 1 };
  return this.veg;
}

Pizza.prototype.meatCost = function() {
  this.meat = "1";
  return this.meat;
}

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

// }
console.log()

////////////////////////DO NOT CROSS////////////////////////////

$(document).ready(function() {

  var newPizza = new Pizza(pieSize, meat, veg);
  console.log(Pizza);
  var pieSize = [];
  var meat = [];
  var veg = [];

$("form#new-order").submit(function(event) {
  event.preventDefault();
    // console.log(pieSize);

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
var vegTotal = (newPizza.vegCost);
$("#total").text(veg);

var diameter = (newPizza.pieBig);
$("#total").text(pieSize);
var price = (newPizza.pizzaCost);
$("#total").text(price);
});
});
