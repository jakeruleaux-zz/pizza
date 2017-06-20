function Pizza (pieSize, meat, veg) {
  this.pieSize = 0;
  this.meat = 0;
  this.veg = 0;
  this.price = 0;
};

Pizza.prototype.pieBig = function() {
  if (this.pieSize === 16) {
    return this.pieSize = "16";
  } else {
    return this.pieSize = "18";
  }
  console.log(pieBig);
};
Pizza.prototype.toppingCost = function() {
  if (this.veg === 2) {
    this.veg = (2 * this.veg.length);
    return this.veg;
  } else (this.meat === 3)
    this.meat = (3 * this.meat.length);
    return this.meat;
    console.log(this.meat);
  };


Pizza.prototype.pizzaCost = function() {
  this.price = (this.meat + this.veg + this.pieSize) ;
  return this.price;
};
// debugger
// console.log()

////////////////////////DO NOT CROSS////////////////////////////

$(document).ready(function() {

  console.log(Pizza);
  var pieSize = [];
  var meat = [];
  var veg = [];
  //  var newPizza = new Pizza(pieSize,veg, meat);
  console.log(veg);
  console.log();

  $("form#new-order").submit(function(event) {
    event.preventDefault();
    // console.log(pieSize);

    var newPizza = new Pizza(pieSize,veg, meat);
    $("input:checkbox[name=size]:checked").each(function() {
      var size = $(this).val();
      pieSize.push(size);
      console.log(size);
    });
    $("input:checkbox[name=meat]:checked").each(function() {
        var meatTop = $(this).val();
        meat.push(meatTop);
        console.log();
    });
      $("input:checkbox[name=veg]:checked").each(function() {
        var vegTop = $(this).val();
        veg.push(vegTop);
        console.log(veg);
    });

//    var vegTotal = (newPizza.vegCost);
//    $("#total").text(veg);
    var diameter = (newPizza.pieBig);
    $("#total").text(pieSize);
  //  var price = (newPizza.pizzaCost);
//    $("#total").text(price);
  });
});
