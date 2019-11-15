$('.block-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 3,
    nav: true,
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

$('.slider-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 0,
    items: 1,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        }
    }
});

$(function () {
    $('.toggle-menu').on('click', function () {
        $('.main-nav').toggleClass('open');
    });
});
