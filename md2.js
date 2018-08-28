$(document).ready(function () {
    // when opening the sidebar
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.md2-overlay').fadeIn();
    });
    // if dismiss or overlay was clicked
    $('.md2-overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.md2-overlay').fadeOut();
    });
});