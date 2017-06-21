function Pizza (pieSize, meat, veg) {
  this.pieSize = pieSize;
  this.meat = meat;
  this.veg = veg;
  this.price = 0;
  // console.log(pizzaCost);
};
// Pizza.prototype.vegCost = function() {
//   for (var i = 0; i < veg.length; i += 1)
//   this.veg = total += 1;
//   return this.veg;
//   console.log(this.veg);
// };
//
Pizza.prototype.meatCost = function() {
  for (i = 0; i < meat.length; i += 1);
  total += 2;
  return total;
  console.log(total);
};

// Pizza.prototype.pieBig = function() {
//   if (this.pieSize === 16) {
//     return this.pieSize = 16;
//   } else {
//     return this.pieSize = 18;
//   }
// };

// Pizza.prototype.toppingCost = function() {
//   if (this.veg === 2) {
//     this.veg = (2 * this.veg.length);
//     return this.veg;
//   } else (this.meat === 3)
//     this.meat = (3 * this.meat.length);
//     return this.meat;
//     console.log(this.meat);
//   };


// Pizza.prototype.pizzaCost = function() {
//   this.price = this.meat + this.veg + this.pieSize ;
//   return this.price;
// };
// debugger

////////////////////////DO NOT CROSS////////////////////////////

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var pieSize = [];
    var meat = [];
    var veg = [];
    var newPizza = new Pizza(pieSize, meat, veg);
    console.log(meat);
    $("input:checkbox[name=size]:checked").each(function() {
      var size = $(this).val();
      pieSize.push(size);
    });
    $("input:checkbox[name=meat]:checked").each(function() {
      var meatTop = $(this).val();
      meat.push(meatTop);
      console.log();
    });
    $("input:checkbox[name=veg]:checked").each(function() {
      var vegTop = parseInt($(this).val());
      veg.push(veg);
      console.log(vegTop);
    });



      // var cost = (newPizza.pizzaCost);
      // $("#total").text.(price);
    // var cost = (new)
    // var vegTotal = (newPizza.toppingCost);
    // $("#total").text(veg);
    var diameter = (newPizza.pieBig);
    $("#total").text("your total " + "$"+pieSize);
  //  var price = (newPizza.pizzaCost);
//    $("#total").text(price);
  });
});
