$(document).ready(function () {
    $('#navi').load('assets/components/nav.html');
    $('#foot').load('assets/components/footer.html');

window.onload=function () {
    document.body.style.visibility = "visible";
}

// Smooth scrolling using jQuery easing
$('a.nav-link[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 54)
            }, 500);
            return false;
        }
    }
});
});

  // Closes responsive menu when a scroll trigger link is clicked
  $('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

