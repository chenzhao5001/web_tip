$(document).ready(function () {
    var sub = $("#sub");

    var activeRow;
    var activeMenu;

    $("#test").on("mouseenter","li",function (e) {
        activeRow = $(e.target).addClass("active")
        sub.removeClass("none")
        activeMenu = $("#" + activeRow.data("id")).removeClass("none")
    }).on("mouseleave","li",function (e) {
        $(e.target).removeClass("active")
        sub.addClass("none")
        activeMenu = $("#" + activeRow.data("id")).addClass("none")
    })


})
