
/* Start Navbar */

var nav = document.querySelector('nav');
function navScroll () {
    'use strict';
    if (pageYOffset >= 70) {
        nav.setAttribute('style', 'background:#000;');
    } 
    else {
        nav.setAttribute('style', 'background:none;');
    }
} addEventListener('scroll', navScroll);

$(document).ready(function () {
    $('.bars').click(function() {
        $('.sm-ul').slideToggle();
    });
})

$(function () {
    $('a').click(function () {
        $('.sm-ul').delay(500).slideUp();
    });
});

/* End Navbar */

/* Start Scrolling to top */
$(document).ready(function () {
    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop : $('#top').offset().top
        }, 1000);
    });
});
/* End Scrolling To top */

/* Start Features */

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.feat').offset().top - 120) {
            $('.feat').animate({
                opacity : 1,
            }, 1000);
        }
    })
}) 

$(function () {
    $('.slider button').click(function () {
        $('html, body').animate({
            scrollTop : $('.feat').offset().top - 120
        }, 1000)
    });
});


$(function () {
    $('.featBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.feat').offset().top - 120
        }, 1000)
    });
});



/* End Features */


/* Start About us */
$(function () {
    $('.aboutBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.about').offset().top - 100
        }, 1000)
    });
});


/* End About us */

/* Start services */

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.services').offset().top - 250) {
            $('.services').animate({
                opacity : 1,
            }, 1000);
        }
    })
}) 


$(function () {
    $('.servBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.services').offset().top - 250
        }, 1000)
    });
});



/* End services */




/* Start Contact */


$(function () {
    $('.contactBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.contact').offset().top
        }, 1000)
    });
});

/* End Contact */