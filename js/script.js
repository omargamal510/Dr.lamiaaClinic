
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
        if ($(window).scrollTop() >= $('.feat').offset().top - 200) {
            $('.feat').animate({
                opacity : 1,
            }, 1000);
        }
    })
}) 

$(function () {
    $('.slider button').click(function () {
        $('html, body').animate({
            scrollTop : $('.feat').offset().top - 200
        }, 1000)
    });
});


$(function () {
    $('.featBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.feat').offset().top - 200
        }, 1000)
    });
});



/* End Features */


/* Start Features */



$(function () {
    $('.clinichBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.clinic-hours').offset().top - 200
        }, 1000)
    });
});


/* Start About us */
$(function () {
    $('.aboutBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.about').offset().top - 100
        }, 1000);
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



/* Start Switch language */
$(document).ready(function () {
    $('.switch-ar').click(function () {
        $('body').css({direction: "rtl"});
        $('nav .main-ul li, nav h1.div-ar').css({float:"right"});
        $('nav button.div-ar, .main-ul').css({float: "left"});
        $('.div-ar').css({display:"block"});
        $('.div-en').css({display: "none"});
        $('.switch-ar').css({display:"none"});
        $('.switch-en').css({display:"block"});
    });

    $('.switch-en').click(function () {
        $('body').css({direction: "ltr"});
        $('nav .main-ul li, nav h1.div-ar').css({float:"left"});
        $('nav button.div-ar, .main-ul').css({float: "right"});
        $('.div-ar').css({display:"none"});
        $('.div-en').css({display: "block"});
        $('.switch-ar').css({display:"block"});
        $('.switch-en').css({display:"none"});
    });
});

/* End Switch Language */
