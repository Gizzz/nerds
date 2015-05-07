/// <reference path="../typings/jquery/jquery.d.ts"/>
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
    });

    // fixed menu
    $(window).scroll(function () {
        var sizeOfHeader = 436;

        if ($(window).scrollTop() > sizeOfHeader) {
            $('.scroll-menu').css("display", "block");
        }
        else {
            $('.scroll-menu').css("display", "none");
        }
    });

    // scroll to element
    $("nav a").click(function (e) {
        e.preventDefault();

        var scrollTopValue;
        var dest = $(this).attr("href");

        if (dest == "#root") {
            scrollTopValue = 0;
        } else {
            var fixedMenuHeight = 75;
            scrollTopValue = $(dest).offset().top - fixedMenuHeight;
        }

        $('html, body').animate({
            scrollTop: scrollTopValue
        }, 1000);
    });
    
    // map 
    (function mapInit() {
        var mapOptions = {
            center: { lat: 45.0439855, lng: 38.9404556 },
            zoom: 17,
            scrollwheel: false,
        };
        
        var map = new google.maps.Map($(".map-canvas").get(0), mapOptions);
        var marker = new google.maps.Marker({
            icon: 'img/map-marker-logo.png',
            position: { lat: 45.0433959, lng: 38.9445065 },
            map: map
        });
    })();
});