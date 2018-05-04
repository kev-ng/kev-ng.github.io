$(document).ready(function () {
    $('#navi').load('assets/components/nav.html');
    $('#foot').load('assets/components/footer.html');
    $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
      })


});

window.onload=function () {

    document.getElementById('content').style.visibility = "visible";
    document.getElementById('spinner').style.visibility="hidden";
    document.getElementById('spinner').style.display="none"
    $('html, body').css({
        'overflow': 'auto',
        'height': 'auto'
      })
}
