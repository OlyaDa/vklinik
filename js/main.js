
$('.nav-link-new').mPageScroll2id();

$('.block-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 3,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        }
    }
});

// $('.slider-carousel').owlCarousel({
//     loop: true,
//     autoplay: false,
//     margin: 0,
//     items: 1,
//     nav: false,
//     dots: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         }
//     }
// });

$(function () {
    $('.toggle-menu').on('click', function () {
        $('.main-nav').toggleClass('open');
    });
});

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

$('.phoneidcl').inputmask('+38(999) 999-99-99',{ "oncomplete": function(){ 
    $(".disbutt").prop("disabled", false);
}, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

