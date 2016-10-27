//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-transparent").addClass("top-nav-collapse-dark");
    } else {
        $(".navbar-transparent").removeClass("top-nav-collapse-dark");
    }
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-transparent-dark").addClass("top-nav-collapse");
    } else {
        $(".navbar-transparent-dark").removeClass("top-nav-collapse");
    }
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-inverse").addClass("top-nav-collapse-dark");
    } else {
        $(".navbar-inverse").removeClass("top-nav-collapse-dark");
    }
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-default").addClass("top-nav-collapse");
    } else {
        $(".navbar-default").removeClass("top-nav-collapse");
    }
});



//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//Change bg of .transperent navbar on responsive devices
var removeClass = true;
$("button.navbar-toggle").click(function () {
    $("nav:first").toggleClass('colapse');
    removeClass = false;
});

$("nav:first").click(function() {
    removeClass = false;
});

$("html").click(function () {
    if (removeClass) {
        $("nav:first").removeClass('colapse');
    }
    removeClass = true;
});

