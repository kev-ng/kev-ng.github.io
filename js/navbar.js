$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('navbar-shrink');
    } else {
      $('nav').removeClass('navbar-shrink');
    }
  });

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    console.log('clicked');
    $("#wrapper").toggleClass("toggled");
});

