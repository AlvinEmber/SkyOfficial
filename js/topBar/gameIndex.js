$(function () {
    // 游戏目录
    $('.gameIndex').hover(function () {
        $(this).children('.gameList').stop().slideToggle();
    })
})