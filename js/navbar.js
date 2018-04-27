
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($(document).scrollTop() > 50) {
      $("nav").addClass("navbar-shrink");
    } else {
      $("nav").removeClass("navbar-shrink");
    }
  };

  var navbarClose = function(){
    $('.navbar-collapse').collapse('hide');
  }
  
  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  $(window).scroll(navbarClose);

  // Smooth scrolling using jQuery easing
$('a.nav-link[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          $('html, body').animate({
              scrollTop: (target.offset().top)
          }, 500);
          return false;
      }
  }
});

  // Closes responsive menu when a scroll trigger link is clicked
  $('.nav-link').click(navbarClose);
