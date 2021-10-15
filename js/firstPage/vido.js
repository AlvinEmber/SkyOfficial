document.getElementById('main').style.cssText = 'display:none;';

function open_video() {
    document.getElementById('main').style.cssText = 'display:block;';
}

$('#main').click(function () {
    $(this).hide();
    // $('#vido')[0].paused();
})