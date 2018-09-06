$(document).ready(function () {
    // when opening the sidebar
    $('.md2-sidebar-on').on('click', function () {
        $('#md2-sidebar').addClass('active');
        $('.md2-popup').css({
            display: 'none'
        });
        $('.md2-overlay').fadeIn();
    });
    // if dismiss or overlay was clicked
    $('.md2-overlay').on('click', function () {
        $('#md2-sidebar').removeClass('active');
        $('.md2-overlay').fadeOut();
    });
    // open popup 
    $('.md2-popup-open').on('click', function () {
        $('.md2-overlay-popup').fadeIn();
        $('.md2-overlay-popup').css({
            display: 'flex'
        });
        $('.md2-popup').fadeIn();
    });
});