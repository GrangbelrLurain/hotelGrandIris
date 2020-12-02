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