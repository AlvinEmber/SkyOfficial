$('.pic-bot-mid-btn02').click(function () {
    $('.bgvid')[0].play();
    setTimeout(function () {
        $('.bgvid').hide();
        $('.bgvid01')[0].play();
        $('.newsbox').show();
    }, 4000)

    $('.newsbox').css({
        'transition': '1s linear',
        'animation': 'newsbox 1s ease'
    });
})