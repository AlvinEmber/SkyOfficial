$(function () {
    // 右侧广告
    setInterval(function () {
        $('.addcell').slideToggle(2000, function () {
            $(this).text('限时领取免费课程');
        }).slideToggle(2000, function () {
            $(this).text('25元专属券限时领！');
        });
    })
})