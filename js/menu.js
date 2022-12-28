$(document).ready(function() {
    $('.burger_menu').click(function(){
        $('.nav_panel').toggleClass('open-menu');
    });
});

$(document).ready(function() {
    $('.burger_menu').click(function(event){
        $('.burger_menu, .menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});