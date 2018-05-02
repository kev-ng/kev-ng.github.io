$(document).ready(function () {
    $('#navi').load('assets/components/nav.html');
    $('#foot').load('assets/components/footer.html');

window.onload=function () {
    var els= document.getElementsByClassName('action-link');
    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        el.style.visibility="visible";
    });

    document.getElementById('content').style.visibility = "visible";
    document.getElementById('spinner').style.visibility="hidden";
    document.getElementById('spinner').style.display="none"

}


});

