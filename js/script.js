$(document).ready(function () {
    $(function () {
        function runEffect() {
            var selectedEffect = $("#effectTypes").val();
            var options = {};
            if (selectedEffect === "scale") {
                options = {percent: 50};
            } else if (selectedEffect === "size") {
                options = {to: {width: 200, height: 60}};
            }
            $(".main-nav").toggle(selectedEffect, options, 500);
        };
        $(".btn-close").on("click", function () {
            runEffect();
        });
        $(".menu-bar").on("click", function () {
            runEffect();
        });

    });


    var $header = $(".header");
    var $btnTop = $("#btn-top");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $header.addClass("fixed");
        }
        else {
            $header.removeClass("fixed");
        }
    });
    $btnTop.on("click", function () {
        $("html,body").animate({scrollTop: 0}, 900)
    });


    $(".portfolio-item").mouseenter(function () {
        $(this).addClass("active");
    });
    $(".portfolio-item").mouseleave(function () {
        $(this).removeClass("active");
    });


    $(".portfolio-item").click(function() {
        $('.portfolio-show img').attr("src", $(this).data("largeimage"));
        $(".portfolio-show").fadeIn(800).css("display", "flex");
    });
    $(".portfolio-show").click(function () {
        $(this).fadeOut(800);
    });



    $("#service").click(function (){
        $('html, body').animate({
            scrollTop: $(".service-section").offset().top
        }, 2000);
    });



});