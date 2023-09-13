//  AOS
AOS.init({ disable: "mobile" });

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

$(document).ready(function () {
  // Open the first item by default
  $(".accordion li:first-child .accordion-content").show();

  // Toggle accordion items on click
  $(".accordion-header").click(function () {
    var content = $(this).next(".accordion-content");

    // Check if the clicked header is active
    if ($(this).hasClass("active")) {
      content.slideUp();
      $(this).removeClass("active");
    } else {
      // Close all accordion items except the one clicked
      $(".accordion-content").not(content).slideUp();
      // Remove "active" class from all headers
      $(".accordion-header").removeClass("active");

      // Toggle the clicked item
      content.slideDown();
      $(this).addClass("active");
    }
  });
});

function comingsoon() {
  $(".coming-soon").toggleClass("show");
  $("body").toggleClass("disable");
}
