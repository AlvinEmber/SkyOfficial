$(".pic-bot-mid-btn").click(function () {
    $('html,body').animate({
        scrollTop: $(".secondPage").offset().top
    },
        'slow');
});