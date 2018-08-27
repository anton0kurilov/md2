$(document).ready(function () {
    // when opening the sidebar
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').fadeIn();
    });
    // if dismiss or overlay was clicked
    $('.overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });
});