/// <reference path="vendor/jquery-1.11.2.min.js" />

$(function () {
    // slider 
    $(".slider .controls .radio").click(function () {
        $(".slider .controls .radio").removeClass("checked");
        $(this).addClass("checked");
        
        var $slides = $(".slider .slides .slide");
        $slides.css("display", "none");
        var index = $(this).index();
        $($slides[index]).css("display", "block")
    });

    // radio
    $(".grid li").click(function () {
        $(".grid li").removeClass("checked");
        $(this).addClass("checked");
    });
    
    // checkbox
    $(".features li").click(function () {
        $(this).toggleClass("checked");
    });

    // sorting
    $(".sorting .sort-by").click(function () {
        var state =
            $(this).hasClass("asc") ? "asc" :
            $(this).hasClass("desc") ? "desc" : "";

        $(".sorting .sort-by").removeClass("asc desc");

        if (state === "asc")
            $(this).addClass("desc");
        else if (state === "desc")
            $(this).addClass("asc");
        else if (state === "")
            $(this).addClass("desc");
        else
            throw new Error("unexpected state");
    });

    // write us

    $(".btn.write-us").click(function () {
        $(".popup-write-us").css("display", "block");
    });

    $(".popup-write-us input[type=submit], .popup-write-us input[type=button]").click(function (e) {
        e.preventDefault();
        $(".popup-write-us").css("display", "none");
    })
});