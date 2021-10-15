$(".pic-bot-mid-btn03").click(function () {
    $('html,body').animate({
        scrollTop: $(".fifthPage").offset().top
    },
        'slow');
    $('.fiveList').fadeIn(1000);
});

var i = 1;
setInterval(function () {
    i++;
    if (i > 4) { i = 1 };
    document.getElementById('fiveSlidePic').src = "./img/fifthPage/show0" + i + ".jpg";
}, 5000);