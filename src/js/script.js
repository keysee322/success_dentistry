function stopScroll(item = 'body') {
  let documentWidth = parseInt(document.documentElement.clientWidth),
    windowsWidth = parseInt(window.innerWidth),
    scrollbarWidth = windowsWidth - documentWidth;
  $(item).attr('style', 'overflow: hidden; padding-right: ' + scrollbarWidth + 'px');
}

function moreToggle(button, target) {
  if ($(button).hasClass('active')) {
    $(target).height(160);
  } else {
    $(target).height($(target)[0].scrollHeight);
  }
  $(button).toggleClass('active');
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
  $('.header__burger-button').on('click', function () {
    $('.burger').addClass('active');
    stopScroll();
  });
  $('.burger__close').on('click', function () {
    $('.burger').removeClass('active');
    freeScroll();
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
  $('.about__button').on('click', function () {
    moreToggle(this, '.about__text');
  });
  $('.text__button').on('click', function () {
    moreToggle(this, '.text__text');
  });
});
