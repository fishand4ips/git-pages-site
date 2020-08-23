var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.header-main').style.top = "0";
    } else {
        document.querySelector('.header-main').style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
