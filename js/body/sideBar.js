$(function () {
    $('.sideBarBtn').click(function () {
        $(this).toggleClass('sideBarBtnOpen');
        $('.sideBar').toggleClass('sideBarOpen');
    })
})