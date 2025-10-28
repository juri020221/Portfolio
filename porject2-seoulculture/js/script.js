$(document).ready(function(){

  $('.depth1').mouseenter(function(){
    $('.width').stop(true).animate({'height' : '320px'})
  }).mouseleave(function(){
    $('.width').stop(true).animate({'height' : '60px'})

  });

  //////////////      
});
