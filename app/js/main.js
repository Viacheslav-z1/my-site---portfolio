$(function () {
  $('.menu__link').on('click', function () {
    var el = $(this);
    var dest = el.attr('href'); 
    if (dest !== undefined && dest !== '') { 
      $('html').animate({
        scrollTop: $(dest).offset().top 
      }, 800 
      );
      $('.menu__list').toggleClass('active');
      $('.menu__btn').toggleClass('active');
      $('body').toggleClass('lock');
    }
    return false;
  });

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();

  $('.menu__btn').on('click',function () {
    $('.menu__list').toggleClass('active');
    $('.menu__btn').toggleClass('active');
    $('body').toggleClass('lock');
  });
})