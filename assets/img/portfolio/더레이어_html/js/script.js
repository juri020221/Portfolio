$(document).ready(function(){

  $('.depth1').mouseenter(function(){
    $('.header').stop(true).animate({
      'height' : '316px',
      
    })
  }).mouseleave(function(){
    $('.header').stop(true).animate({
      'height' : '80px',
     
    })

  });


});
