//박스 마우스오버시 배경화면 변경
$(".grandhall").mouseover(function() {
        $("#wedding").css('background-image', 'url(assets/img/grandhall80.jpg');
    });
$(".grandhall").mouseout(function() {
    $("#wedding").css('background-image', 'url(assets/img/wedding.jpg');
});
$(".irishall").mouseover(function() {
    $("#wedding").css('background-image', 'url(assets/img/irishall80.jpg');
});
$(".irishall").mouseout(function() {
    $("#wedding").css('background-image', 'url(assets/img/wedding.jpg');
});

setTimeout(function(){
    $("#wedding").css('background-image', 'url(assets/img/irishall80.jpg');
},400)
setTimeout(function(){
    $("#wedding").css('background-image', 'url(assets/img/grandhall80.jpg');
},800)
setTimeout(function(){
    $("#wedding").css('background-image', 'url(assets/img/wedding.jpg');
},1200)