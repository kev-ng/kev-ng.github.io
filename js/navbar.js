
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($(document).scrollTop() > 50) {
      $("nav").addClass("navbar-shrink");
    } else {
      $("nav").removeClass("navbar-shrink");
    }
  };
  
  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);