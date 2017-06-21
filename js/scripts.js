function Pizza (size, meat, veg, name) {
  this.size = size;
  this.meat = meat;
  this.veg = veg;
  this.name = name;
};

Pizza.prototype.pieBig = function() {
  var price = 0
  if (this.size === 16) {
     price += 16
  } else {
    price += 18
  }

for (var i = 0; i < this.meat.length; i ++) {
  price += 2;
  console.log(price);
}

for (var i = 0; i < this.veg.length; i ++) {
  price += 1;
}

return price;
};



////////////////////////DO NOT CROSS////////////////////////////

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var size = [];
    var meat = [];
    var veg = [];
    var name = $("input#name").val();
    $("#name").text.name;
    var newPizza = new Pizza(size, meat, veg, name,);

    $("input:checkbox[name=size]:checked").each(function() {
      var size1 = $(this).val();
      size.push(size1);
    });
    $("input:checkbox[name=meat]:checked").each(function() {
      var meatTop = $(this).val();
      meat.push(meatTop);
      console.log(meatTop);
    });
    $("input:checkbox[name=veg]:checked").each(function() {
      var vegTop = parseInt($(this).val());
      veg.push(vegTop);
      console.log(vegTop);
    });

    var diameter = newPizza.pieBig();
    $("#total").text(name  + ", Your total is " + "$"+diameter);

  });
});
