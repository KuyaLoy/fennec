$("#menu").click(function () {
  $(this).next().addClass("show");
});

$(window).resize(function () {
  $("nav ul.show").removeClass("show");
});
