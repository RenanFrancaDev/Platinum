var $body = document.querySelector("body");
$body.classList.remove("no-js");
$body.classList.add("js");


var menu = new Menu({
    container: '.header_nav',
    toggleBtn: '.header_btnMenu',
    widthEnabled: 1024
})

var carouselImgs = new Carousel({
    container: '.laptop-slider .slide-show',
    itens:'figure',
    btnPrev:'.prev',
    btnNext:'.next'
})

var carouselQuotes = new Carousel({
    container: '.quote-slideshow',
    itens:'figure',
    btnPrev:'.prev',
    btnNext:'.next'
})