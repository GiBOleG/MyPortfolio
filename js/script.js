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
        } else {
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


    $(".btn-portfolio").click(function () {
        $('.portfolio-show img').attr("src", $(this).parent().data("largeimage"));
        $(".portfolio-show").fadeIn(800).css("display", "flex");
    });
    $(".portfolio-show").click(function () {
        $(this).fadeOut(800);
    });


    $("#nav-close li").click(function () {
        const target = $(this).data("target");
        console.log(target);
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    $('#contact-form').submit(function (event) {
        event.preventDefault();

        const name = this.elements.name.value;
        const email = this.elements.email.value;
        const message = this.elements.message.value;
        const subject = this.elements.subject.value;
        fetch("https://email-redirect-oleh.herokuapp.com/email-data", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            //mode:'no-cors',
            body: JSON.stringify({
                name, email, message, subject
            })
        })
            .then(res => res.text())
            .then(function (response) {
                if (response === 'ok') {
                    console.log(response.status);
                    const $formAlert = $(".contact-form-success-alert");
                    $formAlert.fadeIn(500);
                    setTimeout(function () {
                        $formAlert.fadeOut(500);
                    }, 6000);
                }
            })
    })

});