// Выделение пунктов меню при наведении
$(".top-menu li:not(.active)").mouseenter(function () {
    $(this).addClass("active");
}).mouseleave(function () {
    $(this).removeClass("active");
});
// Анимация изображений при наведении
$("figure img").hover(
function() {
    $(this).animate({
        width: "350px",
        height: "200px",
        borderRadius: "2%"
    }, "slow");
}, function() {
    $(this).animate({
        width: "320px",
        height: "180px",
        borderRadius: "10%"
    }, "slow");
});