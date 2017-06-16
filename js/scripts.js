













////////////////////////DO NOT CROSS////////////////////////////

$(document).ready(function() {


$("form#new-order").submit(function(event) {
  event.preventDefault();
  var toppings = [];
  $("input:checkbox[name=size]:checked").each(function() {
    var size = $(this).val();
    toppings.push(size);
  });
  $("input:checkbox[name=meat]:checked").each(function() {
    var meatTop = $(this).val();
    toppings.push(meatTop);
  });
  $("input:checkbox[name=veg]:checked").each(function() {
    var vegTop = $(this).val();
    toppings.push(vegTop);
  });
});

});
