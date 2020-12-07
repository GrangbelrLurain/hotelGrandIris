$(function() {
$(document).mouseup(function(e) {
    if ($(e.target).parents('.menu').length == 0) {
        $('.menu li').removeClass('expand');
        $('.menu ul').hide();
    }
});


$(".menu li>a").mouseover(function() {
    var li = $(this).parent();
    var ul = li.parent()
    ul.find('li').removeClass('expand');
    ul.find('ul').not(li.find('ul')).hide();
    li.children('ul').toggle();
    if (li.children('ul').is(':visible') || li.has('ul')) {
        li.addClass('expand');
    }
});
});

//햄버거메뉴
        $(".header .ham_menu").click(function(){
            var hamMenu = $(".header .ham_menu");
            var rightMenu = $(".header .nav_right");
            var leftMenu = $(".header .nav_left");
            
            hamMenu.toggleClass("active");
            rightMenu.toggleClass("active");
            leftMenu.toggleClass("active");
            
        });
        