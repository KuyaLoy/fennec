//  AOS
AOS.init();
//SPLIDE
var splide = new Splide(".splide", {
  type: "loop",
  pagination: false,
});
splide.mount();
//NAV
$("#menu").click(function () {
  $("nav ul").addClass("show");
  $("body").addClass("disable");
});
$(".close-menu").click(function () {
  $("body").removeClass("disable");
  $("nav ul.show").removeClass("show");
});
$(window).resize(function () {
  $("nav ul.show").removeClass("show");
  $("body").removeClass("disable");
});
