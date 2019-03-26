import $ from "jquery";

$(".input").on("keypress", function() {
  var inputVal = $(".input").val();
  var splitted = inputVal.split("");
  console.log(splitted);

  for (const letter of splitted) {
    $("#" + letter).css("visibility", "visible");
  }
});
