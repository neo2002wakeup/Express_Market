$('.main-carousel').flickity({
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
});


$(document).ready(function(){
    $(".wish-icon i").click(function(){
        $(this).toggleClass("fa-heart fa-heart-o");
    });
});	