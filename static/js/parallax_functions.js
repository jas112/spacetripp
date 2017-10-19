$(window).scroll(function(){
  var winScroll = $(this).scrollTop();
  // console.log(winScroll);
  console.log("i scroll", winScroll)
  $('.stars_iso').css({
    'transform': 'translate(0px, -'+ winScroll/3280 +'%)'
  });

  $('.asteroids').css({
    'transform': 'translate(0px, '+ winScroll/120 +'%)'
  });

  $('.tripp_figure').css({
    'transform': 'translate(0px, '+ winScroll/240 +'%)'
  });

  $('.planets_one').css({
    'transform': 'translate(-'+ winScroll/284 +'%, -'+ winScroll/480 +'%)'
  });

  $('.tripp_logo').css({
    'transform': 'translate(0px, -'+ winScroll/960 +'%)'
  });

  $('.space_race').css({
    'transform': 'translate(0px, -'+ winScroll/1920 +'%)'
  });

  $('.planets_two').css({
    'transform': 'translate(0px, -'+ winScroll/3840 +'%)',
    'transform': 'rotate(-'+ winScroll/300 +'deg)'
  });

  $('.asteroids2A').css({
    'transform': 'translate(-'+ winScroll/24 +'%, -'+ winScroll/60 +'%)'
  });

  $('.asteroids2B').css({
    'transform': 'translate('+ winScroll/24 +'%, -'+ winScroll/60 +'%)'
  });

  $('.asteroids3').css({
    'transform': 'translate(0px, -'+ winScroll/13 +'%)'
  });

  if(winScroll > $('.gallery_images').offset().top - ($(window).height()/1.15)){
    $('.gallery_images figure').each(function(i){
      setTimeout(function(){
        $('.gallery_images figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }
});
