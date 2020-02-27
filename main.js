// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.

$('.header-right > a').click(function () {
    $('.hamburger-menu').addClass('active');
});

$('.close').click(function () {
    $('.hamburger-menu').removeClass('active');
});
