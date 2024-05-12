$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    var targetElement = $('.order_details'); // Replace 'yourElement' with the ID or selector of your target element

    if (scrollPosition >= 216 && scrollPosition <=860 ) {
        targetElement.addClass('fix'); // Replace 'yourClass' with the class you want to add
    } else {
        targetElement.removeClass('fix'); // Optional: Remove the class if scroll position is less than 216
    }
});

    var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
  