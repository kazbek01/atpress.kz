//SLAIDER
$('.sl').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear'
});
//sl-video
$('.video-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.video-nav'
});
$('.video-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.video-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
//sl-img
$('.img-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    asNavFor: '.img-nav'
});
$('.img-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.img-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
//SLAIDER_REFERENCES
$('.sl-links').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    // centerMode: true,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//toTOP
$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},1000);

    });

});
//slnews
$('.slnews-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slnews-nav'
});
$('.slnews-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slnews-for',
    dots: false,
    arrows: false,
    variableWidth: true,
    focusOnSelect: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                variableWidth: true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//sidemenu
function openNav() {
    if (window.matchMedia("(max-width: 767px)").matches) { // If media query matches
        document.getElementById("mySidenav").style.width = "100%";
    }
    else if (window.matchMedia("(max-width: 991px)").matches) { // If media query matches
        document.getElementById("mySidenav").style.width = "38%";
    }
    else if (window.matchMedia("(max-width: 4000px)").matches) { // If media query matches
        document.getElementById("mySidenav").style.width = "25%";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//POPUP
$('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.popup-bg').show();
})
$('.popup-bg').click(function() {
    $('.popup-bg, .popup').hide();
})
//display
function display() {
    document.getElementById("display1").style.display = "none";
}
$('.popup-bg').click(function() {
    $('#display1').show();
})