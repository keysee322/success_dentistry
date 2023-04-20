function stopScroll(item = 'body') {
  let documentWidth = parseInt(document.documentElement.clientWidth),
    windowsWidth = parseInt(window.innerWidth),
    scrollbarWidth = windowsWidth - documentWidth;
  $(item).attr('style', 'overflow: hidden; padding-right: ' + scrollbarWidth + 'px');
}

// возвращаем скролл для body
function freeScroll(item = 'body') {
  $(item).attr('style', '');
}

$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    smartSpeed: 800,
    autoplayHoverPause: true,
  });

  $('.item__button').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('.feedback').offset().top,
      },
      {
        duration: 370, // по умолчанию «400»
        easing: 'linear', // по умолчанию «swing»
      },
    );

    return false;
  });

  $('.header__burger-button').on('click', function () {
    $('.burger').addClass('active');
    stopScroll();
  });
  $('.burger__close').on('click', function () {
    $('.burger').removeClass('active');
    freeScroll();
  });
  $('.left-menu__title').on('click', function () {
    $('.left-menu').toggleClass('active');
  });
});
